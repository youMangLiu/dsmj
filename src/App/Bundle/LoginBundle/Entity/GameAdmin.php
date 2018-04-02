<?php

namespace App\Bundle\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;

/**
 * GameAdmin
 *
 * @ORM\Table(name="game_admin")
 * @ORM\Entity(repositoryClass="App\Bundle\LoginBundle\Repository\GameAdminRepository")
 */
class GameAdmin implements UserInterface
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="user_name", type="string", length=20, nullable=false, options={"comment"="用户名称"})
     */
    private $userName;

    /**
     * @var string
     *
     * @ORM\Column(name="password", type="string", length=32, nullable=false, options={"fixed"=true})
     */
    private $password = '';

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="last_login_time", type="datetime", nullable=false)
     */
    private $lastLoginTime;

    /**
     * @var string
     *
     * @ORM\Column(name="last_login_ip", type="string", length=16, nullable=false, options={"fixed"=true})
     */
    private $lastLoginIp = '';

    public function getRoles()
    {
        // TODO: Implement getRoles() method.
    }

    public function getSalt()
    {
        // TODO: Implement getSalt() method.
    }

    public function eraseCredentials()
    {
        // TODO: Implement eraseCredentials() method.
    }

    public function __construct()
    {
        $this->setLastLoginTime(new \DateTime());
    }

    /**
     * GameAdmin  Id
     *
     * @author liulian
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * GameAdmin  UserName
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
     */
    public function setUserName($userName)
    {
        $this->userName = $userName;
    }

    /**
     * GameAdmin  Password
     *
     * @author liulian
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

    /**
     * GameAdmin  LastLoginTime
     *
     * @author liulian
     * @return \DateTime
     */
    public function getLastLoginTime()
    {
        return $this->lastLoginTime;
    }

    /**
     * @param \DateTime $lastLoginTime
     */
    public function setLastLoginTime($lastLoginTime)
    {
        $this->lastLoginTime = $lastLoginTime;
    }

    /**
     * GameAdmin  LastLoginIp
     *
     * @author liulian
     * @return string
     */
    public function getLastLoginIp()
    {
        return $this->lastLoginIp;
    }

    /**
     * @param string $lastLoginIp
     */
    public function setLastLoginIp($lastLoginIp)
    {
        $this->lastLoginIp = $lastLoginIp;
    }

}
