<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/3/8
 * Time: 17:24
 */

namespace App\Bundle\AdminBundle\Controller;

use App\Bundle\AdminBundle\Annotation\Parameter;
use App\Bundle\AdminBundle\Entity\GameRooms;
use App\Component\Room\RoomInfo;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class RoomController extends AdminApiController implements RoomInfo
{
    /**
     * indexAction 房间信息
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @Route("/api/room", methods={"GET"})
     * @Parameter(name="page", require=false)
     * @Parameter(name="room_type", require=false)
     * @Parameter(name="room_state", require=false)
     *
     * @return JsonResponse
     */
    public function indexAction(EntityManagerInterface $entityManager, Request $request)
    {
        $room_type  = $request->query->get('room_type');
        $room_state = $request->query->get('room_state');
        $page       = max($request->query->getInt('page', 1), 1);

        $query = $entityManager->getRepository('AppAdminBundle:GameRooms')->getList($room_type, $room_state, $page);

        $page = new Paginator($query);

        $list = [];
        /** @var GameRooms $item */
        foreach ($page as $item) {
            $data    = json_decode(trim($item->getRoomInfo(), '"'), true);
            $overone = $data['is_overone'] > 0 ? '(每人出一张)' : '';
            $xiama   = $data['type_xiama'] > 0 ? '可下码' : '';
            $hu7dui  = $data['type_hu7dui'] > 0 ? '可胡7对（番数*2）' : '';
            $ypdx    = $data['type_ypdx'] > 0 ? '一炮多响' : '';
            $liudi   = $data['liudi'] > 0 ? '留' . $data['liudi'] . '张底牌' : '不留底牌';
            $list[]  = [
                'room_id'     => $item->getRoomId(),
                'jushu'       => $data['jushu'] . '局房卡*' . $data['fangka'] . $overone,
                'renshu'      => $data['renshu'] . '人',
                'play'        => $xiama . ' ' . $hu7dui . ' ' . $ypdx,
                'liudi'       => $liudi,
                'room_type_name'   => self::ROOM_TYPE_ARR[$item->getRoomType()],
                'room_type'   => $item->getRoomType(),
                'room_state'  => $item->getRoomState(),
                'room_state_name'  => self::ROOM_STATE_ARR[$item->getRoomState()],
                'create_time' => date('Y-m-d H:i:s', $item->getCreateTime()),
                'homeowners'  => $item->getHomeowners(),
            ];
        }

        return $this->success([
            'list'       => $list,
            'count'      => $page->count(),
            'room_type'  => self::ROOMTYPE,
            'room_state' => self::ROOMSTATE,
        ]);
    }
}