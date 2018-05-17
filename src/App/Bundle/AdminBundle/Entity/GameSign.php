<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GameSign
 *
 * @ORM\Table(name="game_sign")
 * @ORM\Entity(repositoryClass="App\Bundle\AdminBundle\Repository\GameSignRepository")
 */
class GameSign
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var int
     *
     * @ORM\Column(name="glod", type="integer", nullable=false, options={"comment"="奖励的金币数量"})
     */
    private $glod;
    /**
     * @var int
     *
     * @ORM\Column(name="card", type="smallint", nullable=false, options={"comment"="奖励的房卡数量"})
     */
    private $card;
    /**
     * @var int
     *
     * @ORM\Column(name="days", type="integer", nullable=false, options={"comment"="连续签到天数"})
     */
    private $days;

    /**
     * Get id.
     *
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * GameSign  Glod
     *
     * @author baofan
     * @return int
     */
    public function getGlod()
    {
        return $this->glod;
    }

    /**
     * @param int $glod
     *
     * @return GameSign
     */
    public function setGlod($glod)
    {
        $this->glod = $glod;

        return $this;
    }

    /**
     * GameSign  Card
     *
     * @author baofan
     * @return int
     */
    public function getCard()
    {
        return $this->card;
    }

    /**
     * @param int $card
     *
     * @return GameSign
     */
    public function setCard($card)
    {
        $this->card = $card;

        return $this;
    }

    /**
     * GameSign  Days
     *
     * @author baofan
     * @return int
     */
    public function getDays()
    {
        return $this->days;
    }

    /**
     * @param int $days
     *
     * @return GameSign
     */
    public function setDays($days)
    {
        $this->days = $days;

        return $this;
    }

}
