<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/2/27
 * Time: 11:14
 */

namespace App\Bundle\AdminBundle\Repository;

use Doctrine\ORM\EntityRepository;

class GameRoomsRepository extends EntityRepository
{
    const SIZE = 20;

    /**
     * getList
     *
     * @author liulian
     *
     * @param         $page
     * @param integer $room_type  房间类型
     * @param integer $room_state 房间状态
     *
     * @return \Doctrine\ORM\Query
     */
    public function getList($room_type, $room_state, $page)
    {
        $qb = $this->createQueryBuilder('r');

        if ($room_type) {
            $qb->where('r.roomType =:roomType')
                ->setParameter('roomType', $room_type);
        }

        if ($room_state && $room_state != 9999) {
            $qb->andWhere('r.roomState =:roomState')
                ->setParameter('roomState', $room_state);
        }

        return $qb->getQuery()
            ->setFirstResult(($page - 1) * self::SIZE)
            ->setMaxResults(self::SIZE);
    }
}