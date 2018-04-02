<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GameRooms
 *
 * @ORM\Table(name="game_rooms", uniqueConstraints={@ORM\UniqueConstraint(name="id", columns={"room_id"})})
 * @ORM\Entity(repositoryClass="App\Bundle\AdminBundle\Repository\GameRoomsRepository")
 */
class GameRooms
{
    /**
     * @var int
     *
     * @ORM\Column(name="room_id", type="integer", nullable=false, options={"comment"="房间id"})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $roomId;

    /**
     * @var string
     *
     * @ORM\Column(name="room_info", type="string", length=1024, nullable=false, options={"comment"="游戏配置信息"})
     */
    private $roomInfo;

    /**
     * @var string
     *
     * @ORM\Column(name="create_time", type="string", length=20, nullable=false, options={"comment"="创建时间"})
     */
    private $createTime;

    /**
     * @var int
     *
     * @ORM\Column(name="room_type", type="smallint", nullable=false, options={"comment"="游戏类型"})
     */
    private $roomType;

    /**
     * @var int
     *
     * @ORM\Column(name="room_state", type="smallint", nullable=false, options={"comment"="房间状态"})
     */
    private $roomState;

    /**
     * @var int
     *
     * @ORM\Column(name="homeowners", type="integer", nullable=false, options={"comment"="房主uuid"})
     */
    private $homeowners;

    /**
     * GameRooms  RoomId
     *
     * @author liulian
     * @return int
     */
    public function getRoomId()
    {
        return $this->roomId;
    }

    /**
     * @param int $roomId
     *
     * @return GameRooms
     */
    public function setRoomId($roomId)
    {
        $this->roomId = $roomId;

        return $this;
    }

    /**
     * GameRooms  RoomInfo
     *
     * @author liulian
     * @return string
     */
    public function getRoomInfo()
    {
        return $this->roomInfo;
    }

    /**
     * @param string $roomInfo
     *
     * @return GameRooms
     */
    public function setRoomInfo($roomInfo)
    {
        $this->roomInfo = $roomInfo;

        return $this;
    }

    /**
     * GameRooms  CreateTime
     *
     * @author liulian
     * @return string
     */
    public function getCreateTime()
    {
        return $this->createTime;
    }

    /**
     * @param string $createTime
     *
     * @return GameRooms
     */
    public function setCreateTime($createTime)
    {
        $this->createTime = $createTime;

        return $this;
    }

    /**
     * GameRooms  RoomType
     *
     * @author liulian
     * @return int
     */
    public function getRoomType()
    {
        return $this->roomType;
    }

    /**
     * @param int $roomType
     *
     * @return GameRooms
     */
    public function setRoomType($roomType)
    {
        $this->roomType = $roomType;

        return $this;
    }

    /**
     * GameRooms  RoomState
     *
     * @author liulian
     * @return int
     */
    public function getRoomState()
    {
        return $this->roomState;
    }

    /**
     * @param int $roomState
     *
     * @return GameRooms
     */
    public function setRoomState($roomState)
    {
        $this->roomState = $roomState;

        return $this;
    }

    /**
     * GameRooms  Homeowners
     *
     * @author liulian
     * @return int
     */
    public function getHomeowners()
    {
        return $this->homeowners;
    }

    /**
     * @param int $homeowners
     *
     * @return GameRooms
     */
    public function setHomeowners($homeowners)
    {
        $this->homeowners = $homeowners;

        return $this;
    }


}
