<?php

namespace App\Bundle\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AdminMasterPermission
 *
 * @ORM\Table(name="admin_master_permission")
 * @ORM\Entity(repositoryClass="App\Bundle\LoginBundle\Repository\AdminMasterPermissionRepository")
 */
class AdminMasterPermission
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
     * @ORM\Column(name="permission_id", type="integer")
     */
    private $permissionId;

    /**
     * @var int
     *
     * @ORM\Column(name="master_id", type="integer")
     */
    private $masterId;

    /**
     * @var int
     *
     * @ORM\Column(name="type", type="integer")
     */
    private $type;

    /**
     * @var int
     *
     * @ORM\Column(name="status", type="integer")
     */
    private $status;


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
     * Set permissionId.
     *
     * @param int $permissionId
     *
     * @return AdminMasterPermission
     */
    public function setPermissionId($permissionId)
    {
        $this->permissionId = $permissionId;

        return $this;
    }

    /**
     * Get permissionId.
     *
     * @return int
     */
    public function getPermissionId()
    {
        return $this->permissionId;
    }

    /**
     * Set masterId.
     *
     * @param int $masterId
     *
     * @return AdminMasterPermission
     */
    public function setMasterId($masterId)
    {
        $this->masterId = $masterId;

        return $this;
    }

    /**
     * Get masterId.
     *
     * @return int
     */
    public function getMasterId()
    {
        return $this->masterId;
    }

    /**
     * Set type.
     *
     * @param int $type
     *
     * @return AdminMasterPermission
     */
    public function setType($type)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type.
     *
     * @return int
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set status.
     *
     * @param int $status
     *
     * @return AdminMasterPermission
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * Get status.
     *
     * @return int
     */
    public function getStatus()
    {
        return $this->status;
    }
}
