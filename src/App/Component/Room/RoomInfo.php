<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/3/9
 * Time: 10:36
 */

namespace App\Component\Room;

interface RoomInfo
{
    const ROOM_TYPE_MAJIANG = 11;//麻将
    const ROOM_STATE_NOMAL = 0;//正常
    const ROOM_STATE_CLOSE = 1;//关闭

    const ROOM_TYPE_ARR = [
        self::ROOM_TYPE_MAJIANG => '麻将',
    ];
    const ROOM_STATE_ARR = [
        self::ROOM_STATE_CLOSE => '关闭',
        self::ROOM_STATE_NOMAL => '正常',
    ];

    const ROOMSTATE = [
        [
            'id'   => 9999,
            'name' => '全部',
        ],
        [
            'id'   => self::ROOM_STATE_NOMAL,
            'name' => '正常',
        ],
        [
            'id'   => self::ROOM_STATE_CLOSE,
            'name' => '关闭',
        ],
    ];
    const ROOMTYPE = [
        [
            'id'   => 0,
            'name' => '全部',
        ],
        [
            'id'   => self::ROOM_TYPE_MAJIANG,
            'name' => '麻将',
        ],
    ];
}