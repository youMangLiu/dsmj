<?php

namespace App\Bundle\LoginBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * AdminPermission
 *
 * @ORM\Table(name="admin_permission")
 * @ORM\Entity(repositoryClass="App\Bundle\LoginBundle\Repository\AdminPermissionRepository")
 */
class AdminPermission
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
     * @ORM\Column(name="model", type="string", length=20)
     */
    private $model;

    /**
     * @var string
     *
     * @ORM\Column(name="action", type="string", length=20)
     */
    private $action;

    /**
     * @var string
     *
     * @ORM\Column(name="text", type="string", length=255)
     */
    private $text;
    /**
     * @var string
     *
     * @ORM\Column(name="status", type="integer")
     */
    private $status;
    /**
     * @var string
     *
     * @ORM\Column(name="add_time", type="datetime")
     */
    private $add_time;


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
     * Set model.
     *
     * @param string $model
     *
     * @return AdminPermission
     */
    public function setModel($model)
    {
        $this->model = $model;

        return $this;
    }

    /**
     * Get model.
     *
     * @return string
     */
    public function getModel()
    {
        return $this->model;
    }

    /**
     * Set action.
     *
     * @param string $action
     *
     * @return AdminPermission
     */
    public function setAction($action)
    {
        $this->action = $action;

        return $this;
    }

    /**
     * Get action.
     *
     * @return string
     */
    public function getAction()
    {
        return $this->action;
    }

    /**
     * Set text.
     *
     * @param string $text
     *
     * @return AdminPermission
     */
    public function setText($text)
    {
        $this->text = $text;

        return $this;
    }

    /**
     * Get text.
     *
     * @return string
     */
    public function getText()
    {
        return $this->text;
    }

    /**
     * AdminPermission  Status
     *
     * @return string
     */
    public function getStatus()
    {
        return $this->status;
    }

    /**
     * @param string $status
     *
     * @return AdminPermission
     */
    public function setStatus($status)
    {
        $this->status = $status;

        return $this;
    }

    /**
     * AdminPermission  AddTime
     *
     * @return string
     */
    public function getAddTime()
    {
        return $this->add_time;
    }

    /**
     * @param string $add_time
     *
     * @return AdminPermission
     */
    public function setAddTime($add_time)
    {
        $this->add_time = $add_time;

        return $this;
    }
}
