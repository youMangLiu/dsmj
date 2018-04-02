<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-7-14
 * Time: 上午9:39
 */

namespace Anxin\UserBundle\Utils\Login;

interface LoginVerifyInterface
{
    /**
     * getVerify 获取验证码
     *
     * @author chenmingming
     * @return string
     */
    public function getVerify();
}