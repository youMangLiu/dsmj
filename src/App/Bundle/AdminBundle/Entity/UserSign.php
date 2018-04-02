<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserSign
 *
 * @ORM\Table(name="user_sign")
 * @ORM\Entity
 */
class UserSign
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
     * @var int
     *
     * @ORM\Column(name="uuid", type="integer", nullable=false, options={"comment"="用户uuid"})
     */
    private $uuid;

    /**
     * @var int
     *
     * @ORM\Column(name="glod", type="integer", nullable=false, options={"unsigned"=true,"comment"="奖励的金币数量"})
     */
    private $glod;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer", nullable=false, options={"unsigned"=true,"comment"="是否领取了，0表示未领取，1表示已经领取"})
     */
    private $status;

    /**
     * @var int
     *
     * @ORM\Column(name="last_time", type="integer", nullable=false, options={"unsigned"=true,"comment"="上次发放奖励的时间"})
     */
    private $lastTime;

    /**
     * @var int
     *
     * @ORM\Column(name="days", type="integer", nullable=false, options={"unsigned"=true,"comment"="连续登录的天数"})
     */
    private $days;


}
