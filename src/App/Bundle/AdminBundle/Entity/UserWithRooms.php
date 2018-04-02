<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserWithRooms
 *
 * @ORM\Table(name="user_with_rooms")
 * @ORM\Entity
 */
class UserWithRooms
{
    /**
     * @var int
     *
     * @ORM\Column(name="r_uuid", type="integer", nullable=false, options={"comment"="用户uuid"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $rUuid;

    /**
     * @var int
     *
     * @ORM\Column(name="r_roomid", type="integer", nullable=false, options={"comment"="用户游戏记录房间"})
     */
    private $rRoomid;


}
