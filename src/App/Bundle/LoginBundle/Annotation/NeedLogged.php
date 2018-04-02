<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-8-25
 * Time: 上午10:35
 */

namespace Anxin\Bundle\LoginBundle\Annotation;

/**
 * Class NeedLogged
 * @package Anxin\Bundle\MallBundle\Annotation
 * @Annotation
 */
class NeedLogged
{
    public $value = true;

    public function __construct($options = [])
    {
        if (is_bool($options)) {
            $this->value = $options;
        }
        if (is_array($options) && isset($options['value'])) {
            $this->value = $options['value'] == true;
        }
    }
}