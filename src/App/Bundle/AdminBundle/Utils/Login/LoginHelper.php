<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/15
 * Time: 21:29
 */

namespace App\Bundle\AdminBundle\Utils\Login;

use Anxin\UserBundle\Entity\User;
use Anxin\UserBundle\Entity\UserLoginLog;
use App\Bundle\LoginBundle\Entity\AdminMaster;
use App\Bundle\LoginBundle\Entity\GameAdmin;
use Doctrine\ORM\EntityManagerInterface;
use phpseclib\Crypt\AES;
use Symfony\Component\HttpFoundation\Cookie;
use Symfony\Component\HttpFoundation\Request;

class LoginHelper
{
    const PREFIX_CONFRIRM_TICKET = 'confirm.ticket.';
    const PREFIX_RESET_PASSWORD = 'reset.password.ticket.';
    const PREFIX_USER_CURRENT_TOKEN = 'user.token.current.';
    const COOKIE_NAME_REMEMBER_MFA = 'mfa_remember';
    private $user;
    private $redis;

    public function __construct(AdminMaster $user, \Redis $client)
    {
        $this->user = $user;
        $this->redis = $client;
    }

    /**
     * isSecurity
     *
     * @author chenmingming
     *
     * @param UserLoginLog $log
     * @param EntityManagerInterface $em
     *
     * @return bool
     */
    public function isSecurity(UserLoginLog $log, EntityManagerInterface $em)
    {
        /** @var UserLoginLog $lastLog */
        $lastLog = $em->getRepository('AnxinUserBundle:UserLoginLog')
            ->getLast($this->user);

        return $lastLog && $lastLog->getIp() == $log->getIp()
            && $lastLog->getUserAgent() == $log->getUserAgent();
    }

    /**
     * generateLoginToken
     *
     * @author chenmingming
     *
     * @param bool $isRemember
     * @param bool $force
     *
     * @return array
     */
    public function generateLoginToken($isRemember, $force = true)
    {
        //检查当前的token  返回或者清空
        $key = self::PREFIX_USER_CURRENT_TOKEN . $this->user->getId();
        $ttl = $isRemember ? 3 * 86400 : 86400;
//        if (in_array('PERSIST_LOGIN', $this->user->getRoles())) {
//            $ttl = 3650 * 86400;
//        }
        $data = $this->redis->get($key);
        if ($data !== false) {
            //上一次的token还存在
            $nowToken = @unserialize($data);
            if ($force) {
                //强制刷新auth
                isset($nowToken[0]) && $this->redis->del($nowToken[0]);
            } else {
                //auth 无须刷新
                isset($nowToken[0])
                && $this->redis->get($nowToken[0]) !== false
                && $token = $nowToken[0];
            }
        }
        if (!isset($token)) {
            //建立token 跟 用户的关系映射  并保存
            $token = self::generateRandKey(64);
        }

        $this->redis->setex($token, $ttl, $this->user->getAphone() . ':' . ($ttl + time()));

        //保存到用户当前token
        $value = [$token, $ttl];

        $this->redis->setex($key, $ttl * 2, serialize($value));

        return $value;
    }

    /**
     * generateTicket 生成票据 修改密码用
     *
     * @author chenmingming
     */
    public function generateResetPasswordTicket()
    {
        $ticket = self::generateRandKey(32);
        $this->redis->set($ticket, self::PREFIX_RESET_PASSWORD . $this->user->getId());
        $this->redis->expire($ticket, 300);

        return $ticket;
    }

    /**
     * generateConfirmTicket
     *
     * @author chenmingming
     * @return string
     */
    public function generateConfirmTicket()
    {
        $ticket = self::generateRandKey(32);
        $this->redis->set($ticket, self::PREFIX_CONFRIRM_TICKET . $this->user->getId());
        $this->redis->expire($ticket, 300);

        return $ticket;
    }

    /**
     * isConfirmTicketValid 判断二次认证票据是否合法
     *
     * @author chenmingming
     *
     * @param $ticket
     *
     * @return bool
     */
    public function isConfirmTicketValid($ticket)
    {
        return $this->redis->get($ticket) === self::PREFIX_CONFRIRM_TICKET . $this->user->getId();
    }

    /**
     * checkResetPasswordTicket 返回ticket是否合法
     *
     * @author chenmingming
     *
     * @param string $ticket 修改密码票据
     *
     * @return bool
     */
    public function isResetPasswordTicketValid($ticket)
    {
        return $this->redis->get($ticket) === self::PREFIX_RESET_PASSWORD . $this->user->getId();
    }

    /**
     * generateRandKey 获取一个随机字符串
     *
     * @author chenmingming
     *
     * @param int $length
     *
     * @return string
     */
    static public function generateRandKey($length = 32)
    {
        $fp = @fopen('/dev/urandom', 'rb');
        if ($fp !== false) {
            $pr_bits = @fread($fp, $length * 2);
            @fclose($fp);

            return substr(str_replace(['/', '+', '='], '', base64_encode($pr_bits)), 1, $length);
        } else {
            return bin2hex(random_bytes($length / 2));
        }
    }

    /**
     * getRememberMfaCookie
     *
     * @author chenmingming
     *
     * @param $key
     *
     * @return Cookie
     */
    public function getRememberMfaCookie($key)
    {
        $aes = new AES('cbc');
        $iv = bin2hex(random_bytes(8));
        $aes->setIV($iv);
        $aes->setKey($key);
        $data = [
            'user_id' => $this->user->getId(),
            'expire_time' => strtotime('+7 day'),
        ];
        $cookieValue = bin2hex($aes->encrypt(serialize($data))) . ':' . $iv;

        return new Cookie(self::COOKIE_NAME_REMEMBER_MFA, $cookieValue, $data['expire_time']);
    }

    /**
     * hasRememberMfaCookie 返回当前机器是否已经记得上一次mfa的记录
     *
     * @author chenmingming
     *
     * @param $key
     *
     * @return bool
     */
    public function hasRememberMfaCookie($key)
    {
        try {
            if (isset($_COOKIE[self::COOKIE_NAME_REMEMBER_MFA])) {
                list($value, $iv) = explode(':', $_COOKIE[self::COOKIE_NAME_REMEMBER_MFA]);
                $aes = new AES('cbc');
                $aes->setIV($iv);
                $aes->setKey($key);
                $plaintext = $aes->decrypt(hex2bin($value));
                $data = unserialize($plaintext);
                if (isset($data['user_id']) && isset($data['expire_time'])) {
                    return $data['user_id'] == $this->user->getId()
                        && $data['expire_time'] > time();
                }

                return false;
            }
        } catch (\Exception $e) {
            return false;
        }

        return false;
    }
}