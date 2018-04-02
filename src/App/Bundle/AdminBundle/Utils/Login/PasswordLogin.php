<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-7-14
 * Time: 上午9:16
 */

namespace Anxin\UserBundle\Utils\Login;

use Symfony\Component\Validator\Constraints as Assert;

class PasswordLogin
{
    /**
     * @var string
     * @Assert\NotBlank(message="请输入账号")
     * @Assert\Length(max="20",maxMessage="账号或者密码错误")
     * @Assert\Type("string")
     */
    private $userName;

    /**
     * @var string
     * @Assert\NotBlank(message="请输入密码")
     * @Assert\Length(max="32",maxMessage="账号或者密码错误")
     * @Assert\Type("string")
     */
    private $password;

    /**
     * @var string
     */
    private $redirect = '';

    /**
     * @return string
     */
    public function getRedirect()
    {
        return $this->redirect ?: 'ucenter';
    }

    /**
     * @param string $redirect
     *
     * @return PasswordLogin
     */
    public function setRedirect($redirect)
    {
        $this->redirect = $redirect;

        return $this;
    }

    /**
     * PasswordLogin  UserName
     *
     * @author liulian
     * @return string
     */
    public function getUserName()
    {
        return $this->userName;
    }

    /**
     * @param string $userName
     *
     * @return PasswordLogin
     */
    public function setUserName(string $userName)
    {
        $this->userName = $userName;

        return $this;
    }

    /**
     * @return string
     */
    public function getPassword()
    {
        return $this->password;
    }

    /**
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

}