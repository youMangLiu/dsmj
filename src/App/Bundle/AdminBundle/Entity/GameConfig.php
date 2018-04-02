<?php

namespace App\Bundle\AdminBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * GameConfig
 *
 * @ORM\Table(name="game_config")
 * @ORM\Entity
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


}
