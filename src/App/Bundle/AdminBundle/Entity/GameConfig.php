<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GameConfig
 *
 * @ORM\Table(name="game_config")
 * @ORM\Entity(repositoryClass="App\Bundle\AdminBundle\Repository\GameConfigRepository")
 */
class GameConfig
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
     * @ORM\Column(name="init_gold", type="integer", nullable=false, options={"comment"="初始化的玩家金币"})
     */
    private $initGold;

    /**
     * @var int
     *
     * @ORM\Column(name="init_bank", type="integer", nullable=false, options={"comment"="初始化的玩家银行资产"})
     */
    private $initBank;

    /**
     * @var int
     *
     * @ORM\Column(name="init_card", type="integer", nullable=false, options={"comment"="初始化的玩家房卡数量"})
     */
    private $initCard;

    /**
     * GameConfig  Id
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
     * @return GameConfig
     */
    public function setId($id)
    {
        $this->id = $id;

        return $this;
    }

    /**
     * GameConfig  InitGold
     *
     * @author liulian
     * @return int
     */
    public function getInitGold()
    {
        return $this->initGold;
    }

    /**
     * @param int $initGold
     *
     * @return GameConfig
     */
    public function setInitGold($initGold)
    {
        $this->initGold = $initGold;

        return $this;
    }

    /**
     * GameConfig  InitBank
     *
     * @author liulian
     * @return int
     */
    public function getInitBank()
    {
        return $this->initBank;
    }

    /**
     * @param int $initBank
     *
     * @return GameConfig
     */
    public function setInitBank($initBank)
    {
        $this->initBank = $initBank;

        return $this;
    }

    /**
     * GameConfig  InitCard
     *
     * @author baofan
     * @return int
     */
    public function getInitCard()
    {
        return $this->initCard;
    }

    /**
     * @param int $initCard
     *
     * @return GameConfig
     */
    public function setInitCard($initCard)
    {
        $this->initCard = $initCard;

        return $this;
    }

}
