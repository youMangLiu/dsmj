<?php

namespace App\Bundle\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AdminGroup
 *
 * @ORM\Table(name="admin_group")
 * @ORM\Entity(repositoryClass="App\Bundle\LoginBundle\Repository\AdminGroupRepository")
 */
class AdminGroup
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
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=32)
     */
    private $name;

    /**
     * @var string
     *
     * @ORM\Column(name="permission", type="text")
     */
    private $permission;

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
     * Set name.
     *
     * @param string $name
     *
     * @return AdminGroup
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name.
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set permission.
     *
     * @param string $permission
     *
     * @return AdminGroup
     */
    public function setPermission($permission)
    {
        $this->permission = $permission;

        return $this;
    }

    /**
     * Get permission.
     *
     * @return string
     */
    public function getPermission()
    {
        return $this->permission;
    }

    /**
     * Set addTime.
     *
     * @param \DateTime $addTime
     *
     * @return AdminGroup
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
