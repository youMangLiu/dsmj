<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GameRoomRecord
 *
 * @ORM\Table(name="game_room_record")
 * @ORM\Entity
 */
class GameRoomRecord
{
    /**
     * @var int
     *
     * @ORM\Column(name="roomid", type="integer", nullable=false, options={"comment"="房间号"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $roomid;

    /**
     * @var bool
     *
     * @ORM\Column(name="cur_jushu", type="boolean", nullable=false, options={"comment"="当前局数"})
     */
    private $curJushu;

    /**
     * @var string
     *
     * @ORM\Column(name="cur_record", type="string", length=10240, nullable=false, options={"comment"="当前记录"})
     */
    private $curRecord;


}
