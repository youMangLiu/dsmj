<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserLoginRecord
 *
 * @ORM\Table(name="user_login_record")
 * @ORM\Entity
 */
class UserLoginRecord
{
    /**
     * @var int
     *
     * @ORM\Column(name="uuid", type="integer", nullable=false, options={"comment"="用户uuid"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $uuid;

    /**
     * @var int
     *
     * @ORM\Column(name="login_os", type="integer", nullable=false, options={"comment"="登录设备类型 安卓/ios"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $loginOs;

    /**
     * @var int
     *
     * @ORM\Column(name="login_type", type="integer", nullable=false, options={"comment"="登录类型 游客/QQ/微信"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $loginType;

    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     */
    private $id;

    /**
     * @var string|null
     *
     * @ORM\Column(name="login_time", type="string", length=20, nullable=true, options={"comment"="登录时间"})
     */
    private $loginTime;

    /**
     * @var string|null
     *
     * @ORM\Column(name="login_ip", type="string", length=50, nullable=true, options={"comment"="登录ip"})
     */
    private $loginIp;


}
