<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/8/26
 * Time: 15:51
 */

namespace App\Bundle\LoginBundle\Annotation;


/**
 * Class Parameter
 * @package App\Bundle\AdminBundle\Annotation
 * @Annotation
 */
class Parameter
{
    public $name;
    public $require = true;
    public $method = 'GET';
    public $message;

    public function __construct($options)
    {
        foreach ($options as $k => $v) {
            if ($k === 'value') {
                $this->name = $v;
                continue;
            }
            if (property_exists($this, $k)) {
                $this->$k = $v;
            }
        }
        if (empty($this->name)) {
            throw new \InvalidArgumentException("name is can not be empty.");
        }

        if (!in_array($this->method, ['GET', 'POST', 'BODY'])) {
            throw new \InvalidArgumentException("method invalid.");
        }
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @return bool
     */
    public function isRequire()
    {
        return $this->require == true;
    }

    /**
     * @return string
     */
    public function getMethod()
    {
        return $this->method;
    }

    /**
     * @return string
     */
    public function getMessage()
    {
        return $this->message ?? '参数' . $this->name . '不能为空 [' . $this->method . ']';
    }
}