<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/15
 * Time: 17:53
 */

namespace Anxin\UserBundle\Utils\Login;

class LoginResult implements \JsonSerializable
{
    //登录成功
    const STATUS_SUCCESS = 'success';
    //提醒重置密码
    const STATUS_NOTICE = 'notice';
    //初次重置密码
    const STATUS_RESET = 'reset';
    //二次认证
    const STATUS_CONFIRM = 'confirm';
    /**
     * @var string
     */
    private $status = self::STATUS_SUCCESS;
    /** @var  string */
    private $token = '';
    /** @var  integer */
    private $expire = 0;
    /** @var  string */
    private $ticket = '';

    /**
     * @var string
     */
    private $message = '登录成功';

    /**
     * jsonSerialize
     *
     * @author chenmingming
     * @inheritdoc
     */
    public function jsonSerialize()
    {
        return [
            'status'  => $this->status,
            'token'   => $this->token,
            'expire'  => $this->expire,
            'ticket'  => $this->ticket,
            'message' => $this->message,
        ];
    }

    /**
     * @return string
     */
    public function getStatus(): string
    {
        return $this->status;
    }

    /**
     * @param string $status
     *
     * @return LoginResult
     */
    public function setStatus(string $status): LoginResult
    {
        $this->status = $status;

        return $this;
    }

    /**
     * @return string
     */
    public function getToken(): string
    {
        return $this->token;
    }

    /**
     * @param string $token
     *
     * @return LoginResult
     */
    public function setToken(string $token): LoginResult
    {
        $this->token = $token;

        return $this;
    }

    /**
     * @return int
     */
    public function getExpire(): int
    {
        return $this->expire;
    }

    /**
     * @param int $expire
     *
     * @return LoginResult
     */
    public function setExpire(int $expire): LoginResult
    {
        $this->expire = $expire;

        return $this;
    }

    /**
     * @return string
     */
    public function getTicket(): string
    {
        return $this->ticket;
    }

    /**
     * @param string $ticket
     *
     * @return LoginResult
     */
    public function setTicket(string $ticket): LoginResult
    {
        $this->ticket = $ticket;

        return $this;
    }

    /**
     * @return string
     */
    public function getMessage(): string
    {
        return $this->message;
    }

    /**
     * @param string $message
     *
     * @return LoginResult
     */
    public function setMessage(string $message): LoginResult
    {
        $this->message = $message;

        return $this;
    }

}