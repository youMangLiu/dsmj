<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserInfo
 *
 * @ORM\Table(name="user_info")
 * @ORM\Entity(repositoryClass="App\Bundle\AdminBundle\Repository\UserInfoRepository")
 */
class UserInfo
{
    /**
     * @var int
     *
     * @ORM\Column(name="uid", type="integer", nullable=false, options={"comment"="用户唯一uid"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $uid;

    /**
     * @var int
     *
     * @ORM\Column(name="uuid", type="integer", nullable=false)
     */
    private $uuid;

    /**
     * @var string|null
     *
     * @ORM\Column(name="unick", type="string", length=32, nullable=true, options={"comment"="用户昵称"})
     */
    private $unick;

    /**
     * @var int|null
     *
     * @ORM\Column(name="uphone", type="integer", nullable=true, options={"comment"="手机号"})
     */
    private $uphone;

    /**
     * @var string|null
     *
     * @ORM\Column(name="upswd", type="string", length=32, nullable=true)
     */
    private $upswd;

    /**
     * @var string|null
     *
     * @ORM\Column(name="uface", type="string", length=350, nullable=true, options={"comment"="头像"})
     */
    private $uface;

    /**
     * @var string|null
     *
     * @ORM\Column(name="uemail", type="string", length=50, nullable=true, options={"comment"="邮箱"})
     */
    private $uemail;

    /**
     * @var int|null
     *
     * @ORM\Column(name="usex", type="smallint", nullable=true, options={"comment"="性别 1是男 2是女 "})
     */
    private $usex;

    /**
     * @var int|null
     *
     * @ORM\Column(name="uvip", type="smallint", nullable=true, options={"comment"="vip等级"})
     */
    private $uvip = '0';

    /**
     * @var string|null
     *
     * @ORM\Column(name="u_token", type="string", length=32, nullable=true, options={"comment"="游客key"})
     */
    private $uToken;

    /**
     * @var int|null
     *
     * @ORM\Column(name="u_type", type="smallint", nullable=true, options={"comment"="是否是游客账号/QQ/微信"})
     */
    private $uType;

    /**
     * @var int|null
     *
     * @ORM\Column(name="status", type="smallint", nullable=true, options={"comment"="用户状态 0是正常 1是封号"})
     */
    private $status;

    /**
     * @var string|null
     *
     * @ORM\Column(name="regist_ip", type="string", length=50, nullable=true, options={"comment"="注册地址"})
     */
    private $registIp;

    /**
     * @var string|null
     *
     * @ORM\Column(name="regist_time", type="string", length=20, nullable=true, options={"comment"="注册时间"})
     */
    private $registTime;

    /**
     * @var string|null
     *
     * @ORM\Column(name="login_ip", type="string", length=50, nullable=true, options={"comment"="登录ip"})
     */
    private $loginIp;

    /**
     * @var string|null
     *
     * @ORM\Column(name="login_time", type="string", length=20, nullable=true, options={"comment"="登录时间"})
     */
    private $loginTime;

    /**
     * UserInfo  Uid
     *
     * @author liulian
     * @return int
     */
    public function getUid()
    {
        return $this->uid;
    }

    /**
     * @param int $uid
     *
     * @return UserInfo
     */
    public function setUid($uid)
    {
        $this->uid = $uid;

        return $this;
    }

    /**
     * UserInfo  Uuid
     *
     * @author liulian
     * @return int
     */
    public function getUuid()
    {
        return $this->uuid;
    }

    /**
     * @param int $uuid
     *
     * @return UserInfo
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * UserInfo  Unick
     *
     * @author liulian
     * @return null|string
     */
    public function getUnick()
    {
        return $this->unick;
    }

    /**
     * @param null|string $unick
     *
     * @return UserInfo
     */
    public function setUnick($unick)
    {
        $this->unick = $unick;

        return $this;
    }

    /**
     * UserInfo  Uphone
     *
     * @author liulian
     * @return int|null
     */
    public function getUphone()
    {
        return $this->uphone;
    }

    /**
     * @param int|null $uphone
     *
     * @return UserInfo
     */
    public function setUphone($uphone)
    {
        $this->uphone = $uphone;

        return $this;
    }

    /**
     * UserInfo  Upswd
     *
     * @author liulian
     * @return null|string
     */
    public function getUpswd()
    {
        return $this->upswd;
    }

    /**
     * @param null|string $upswd
     *
     * @return UserInfo
     */
    public function setUpswd($upswd)
    {
        $this->upswd = $upswd;

        return $this;
    }

    /**
     * UserInfo  Uface
     *
     * @author liulian
     * @return null|string
     */
    public function getUface()
    {
        return $this->uface;
    }

    /**
     * @param null|string $uface
     *
     * @return UserInfo
     */
    public function setUface($uface)
    {
        $this->uface = $uface;

        return $this;
    }

    /**
     * UserInfo  Uemail
     *
     * @author liulian
     * @return null|string
     */
    public function getUemail()
    {
        return $this->uemail;
    }

    /**
     * @param null|string $uemail
     *
     * @return UserInfo
     */
    public function setUemail($uemail)
    {
        $this->uemail = $uemail;

        return $this;
    }

    /**
     * UserInfo  Usex
     *
     * @author liulian
     * @return int|null
     */
    public function getUsex()
    {
        return $this->usex;
    }

    /**
     * @param int|null $usex
     *
     * @return UserInfo
     */
    public function setUsex($usex)
    {
        $this->usex = $usex;

        return $this;
    }

    /**
     * UserInfo  Uvip
     *
     * @author liulian
     * @return int|null
     */
    public function getUvip()
    {
        return $this->uvip;
    }

    /**
     * @param int|null $uvip
     *
     * @return UserInfo
     */
    public function setUvip($uvip)
    {
        $this->uvip = $uvip;

        return $this;
    }

    /**
     * UserInfo  UToken
     *
     * @author liulian
     * @return null|string
     */
    public function getUToken()
    {
        return $this->uToken;
    }

    /**
     * @param null|string $uToken
     *
     * @return UserInfo
     */
    public function setUToken($uToken)
    {
        $this->uToken = $uToken;

        return $this;
    }

    /**
     * UserInfo  UType
     *
     * @author liulian
     * @return int|null
     */
    public function getUType()
    {
        return $this->uType;
    }

    /**
     * @param int|null $uType
     *
     * @return UserInfo
     */
    public function setUType($uType)
    {
        $this->uType = $uType;

        return $this;
    }

    /**
     * UserInfo  Status
     *
     * @author liulian
     * @return int|null
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param int|null $status
     *
     * @return UserInfo
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * UserInfo  RegistIp
     *
     * @author liulian
     * @return null|string
     */
    public function getRegistIp()
    {
        return $this->registIp;
    }

    /**
     * @param null|string $registIp
     *
     * @return UserInfo
     */
    public function setRegistIp($registIp)
    {
        $this->registIp = $registIp;

        return $this;
    }

    /**
     * UserInfo  RegistTime
     *
     * @author liulian
     * @return null|string
     */
    public function getRegistTime()
    {
        return $this->registTime == null ? '' : date('Y-m-d', $this->registTime);
    }

    /**
     * @param null|string $registTime
     *
     * @return UserInfo
     */
    public function setRegistTime($registTime)
    {
        $this->registTime = $registTime;

        return $this;
    }

    /**
     * UserInfo  LoginIp
     *
     * @author liulian
     * @return null|string
     */
    public function getLoginIp()
    {
        return $this->loginIp;
    }

    /**
     * @param null|string $loginIp
     *
     * @return UserInfo
     */
    public function setLoginIp($loginIp)
    {
        $this->loginIp = $loginIp;

        return $this;
    }

    /**
     * UserInfo  LoginTime
     *
     * @author liulian
     * @return null|string
     */
    public function getLoginTime()
    {
        return $this->loginTime == null ? '' : date('Y-m-d', $this->loginTime);
    }

    /**
     * @param null|string $loginTime
     *
     * @return UserInfo
     */
    public function setLoginTime($loginTime)
    {
        $this->loginTime = $loginTime;

        return $this;
    }


}
