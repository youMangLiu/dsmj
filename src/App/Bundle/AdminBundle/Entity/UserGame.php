<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * UserGame
 *
 * @ORM\Table(name="user_game")
 * @ORM\Entity(repositoryClass="App\Bundle\AdminBundle\Repository\UserGameRepository")
 */
class UserGame
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="uuid", type="integer", nullable=false)
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="NONE")
     */
    private $uuid;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ugold", type="integer", nullable=true)
     */
    private $ugold;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ubank", type="integer", nullable=true)
     */
    private $ubank;

    /**
     * @var int|null
     *
     * @ORM\Column(name="ucard", type="integer", nullable=true)
     */
    private $ucard;

    /**
     * @var int|null
     *
     * @ORM\Column(name="roomid", type="integer", nullable=true, options={"comment"="当前所在房间"})
     */
    private $roomid;

    /**
     * UserGame  Id
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
     *
     * @return UserGame
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * UserGame  Uuid
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
     * @return UserGame
     */
    public function setUuid($uuid)
    {
        $this->uuid = $uuid;

        return $this;
    }

    /**
     * UserGame  Ugold
     *
     * @author liulian
     * @return int|null
     */
    public function getUgold()
    {
        return $this->ugold;
    }

    /**
     * @param int|null $ugold
     *
     * @return UserGame
     */
    public function setUgold($ugold)
    {
        $this->ugold = $ugold;

        return $this;
    }

    /**
     * UserGame  Ubank
     *
     * @author liulian
     * @return int|null
     */
    public function getUbank()
    {
        return $this->ubank;
    }

    /**
     * @param int|null $ubank
     *
     * @return UserGame
     */
    public function setUbank($ubank)
    {
        $this->ubank = $ubank;

        return $this;
    }

    /**
     * UserGame  Ucard
     *
     * @author liulian
     * @return int|null
     */
    public function getUcard()
    {
        return $this->ucard;
    }

    /**
     * @param int|null $ucard
     *
     * @return UserGame
     */
    public function setUcard($ucard)
    {
        $this->ucard = $ucard;

        return $this;
    }

    /**
     * UserGame  Roomid
     *
     * @author liulian
     * @return int|null
     */
    public function getRoomid()
    {
        return $this->roomid;
    }

    /**
     * @param int|null $roomid
     *
     * @return UserGame
     */
    public function setRoomid($roomid)
    {
        $this->roomid = $roomid;

        return $this;
    }


}
