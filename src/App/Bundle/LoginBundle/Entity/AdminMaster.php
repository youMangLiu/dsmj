<?php

namespace App\Bundle\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * AdminMaster
 *
 * @ORM\Table(name="admin_master")
 * @ORM\Entity(repositoryClass="App\Bundle\LoginBundle\Repository\AdminMasterRepository")
 */
class AdminMaster
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
     * @ORM\Column(name="groupid", type="integer")
     * @Assert\NotBlank(message="账号不能为空"）
     */
    private $groupid;

    /**
     * @var int
     *
     * @ORM\Column(name="aphone", type="integer", unique=true)
     * @Assert\Regex(pattern="^1[3|4|5|7|8][0-9]{9}$", message="手机号码不匹配")
     */
    private $aphone;

    /**
     * @var string
     *
     * @ORM\Column(name="apswd", type="string", length=32)
     * @Assert\Length(max="16", min="6", maxMessage="密码不能超过16个字符", minMessage="密码不能少于6个字符")
     */
    private $apswd;

    /**
     * @var int
     *
     * @ORM\Column(name="atype", type="integer")
     */
    private $atype;

    /**
     * @var int
     *
     * @ORM\Column(name="astatus", type="integer")
     */
    private $astatus;

    /**
     * @var int
     *
     * @ORM\Column(name="agold", type="integer")
     */
    private $agold;

    /**
     * @var string
     *
     * @ORM\Column(name="acard", type="integer")
     */
    private $acard;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="add_time", type="datetime")
     */
    private $addTime;

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
     * Set groupid.
     *
     * @param int $groupid
     *
     * @return AdminMaster
     */
    public function setGroupid($groupid)
    {
        $this->groupid = $groupid;

        return $this;
    }

    /**
     * Get groupid.
     *
     * @return int
     */
    public function getGroupid()
    {
        return $this->groupid;
    }

    /**
     * Set aphone.
     *
     * @param int $aphone
     *
     * @return AdminMaster
     */
    public function setAphone($aphone)
    {
        $this->aphone = $aphone;

        return $this;
    }

    /**
     * Get aphone.
     *
     * @return int
     */
    public function getAphone()
    {
        return $this->aphone;
    }

    /**
     * Set apswd.
     *
     * @param string $apswd
     *
     * @return AdminMaster
     */
    public function setApswd($apswd)
    {
        $this->apswd = $apswd;

        return $this;
    }

    /**
     * Get apswd.
     *
     * @return string
     */
    public function getApswd()
    {
        return $this->apswd;
    }

    /**
     * Set atype.
     *
     * @param int $atype
     *
     * @return AdminMaster
     */
    public function setAtype($atype)
    {
        $this->atype = $atype;

        return $this;
    }

    /**
     * Get atype.
     *
     * @return int
     */
    public function getAtype()
    {
        return $this->atype;
    }

    /**
     * Set astatus.
     *
     * @param int $astatus
     *
     * @return AdminMaster
     */
    public function setAstatus($astatus)
    {
        $this->astatus = $astatus;

        return $this;
    }

    /**
     * Get astatus.
     *
     * @return int
     */
    public function getAstatus()
    {
        return $this->astatus;
    }

    /**
     * Set agold.
     *
     * @param int $agold
     *
     * @return AdminMaster
     */
    public function setAgold($agold)
    {
        $this->agold = $agold;

        return $this;
    }

    /**
     * Get agold.
     *
     * @return int
     */
    public function getAgold()
    {
        return $this->agold;
    }

    /**
     * Set acard.
     *
     * @param string $acard
     *
     * @return AdminMaster
     */
    public function setAcard($acard)
    {
        $this->acard = $acard;

        return $this;
    }

    /**
     * Get acard.
     *
     * @return string
     */
    public function getAcard()
    {
        return $this->acard;
    }

    /**
     * Set addTime.
     *
     * @param \DateTime $addTime
     *
     * @return AdminMaster
     */
    public function setAddTime($addTime)
    {
        $this->addTime = $addTime;

        return $this;
    }

    /**
     * Get addTime.
     *
     * @return \DateTime
     */
    public function getAddTime()
    {
        return $this->addTime;
    }
}
