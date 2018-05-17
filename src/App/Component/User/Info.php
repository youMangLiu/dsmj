<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/2/27
 * Time: 14:41
 */

namespace App\Component\User;

interface Info
{
    const STATUS_NOMAL = 0;//状态，正常
    const STATUS_FORBID = 1;//封号
    const TYPE_TOURIST = 0;//游客
    const TYPE_QQ = 1;//QQ
    const TYPE_WECHART = 2;//微信
    const SEX_MAN = 1;//性别男
    const SEX_WOMAN = 0;//性别女
    const SEX_UNKONW = 2;//未知

    const STATUS_ARR = [
        self::STATUS_NOMAL  => '正常',
        self::STATUS_FORBID => '封号',
    ];

    const TYPE = [
        self::TYPE_TOURIST => '游客',
        self::TYPE_QQ      => 'QQ',
        self::TYPE_WECHART => '微信',
    ];

    const SEX_ARR = [
        self::SEX_MAN   => '男',
        self::SEX_WOMAN => '女',
        self::SEX_UNKONW => '未知',
    ];
}