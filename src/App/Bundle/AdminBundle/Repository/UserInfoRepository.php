<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/2/27
 * Time: 11:14
 */

namespace App\Bundle\AdminBundle\Repository;

use Doctrine\ORM\EntityRepository;

class UserInfoRepository extends EntityRepository
{
    /**
     * getUserList 用户管理列表
     *
     * @author liulian
     *
     * @param int    $page   页码
     * @param int    $size   条数
     * @param array $where
     *
     * @return \Doctrine\ORM\Query
     *
     */
    public function getUserList($page, $where, $size = 20)
    {
        $qb = $this->createQueryBuilder('u');
        if (trim($where['unick'])) {
            $qb->Where('u.unick like :unick')
                ->setParameter('unick', '%' . $where['unick'] . '%');
        }
        if (trim($where['uuid'])) {
            $qb->andWhere('u.uuid =:uuid')
                ->setParameter('uuid', $where['uuid']);
        }
        if ($where['u_type'] != '') {
            $qb->andWhere('u.uType =:uType')
                ->setParameter('uType', $where['u_type']);
        }
        if($where['start_time'] && $where['end_time']){
            //注册时间登陆时间筛选
            if(($where['type'] == 3 || $where['type'] == '')){
                $OneDayLaterTime = (new \DateTime($where['end_time']))->add(new \DateInterval('P1D'));
                $qb->orWhere($qb->expr()->between('u.loginTime', strtotime($where['start_time']), strtotime($OneDayLaterTime->format('Y-m-d'))));
                $qb->orWhere($qb->expr()->between('u.registTime', strtotime($where['start_time']), strtotime($OneDayLaterTime->format('Y-m-d'))));

            }
            //登陆时间筛选
            if($where['type'] == 1){
                $OneDayLaterTime = (new \DateTime($where['end_time']))->add(new \DateInterval('P1D'));
                $qb->orWhere($qb->expr()->between('u.loginTime', strtotime($where['start_time']), strtotime($OneDayLaterTime->format('Y-m-d'))));
            }
            //注册时间筛选
            if($where['type'] == 2){
                $OneDayLaterTime = (new \DateTime($where['end_time']))->add(new \DateInterval('P1D'));
                $qb->orWhere($qb->expr()->between('u.registTime', strtotime($where['start_time']), strtotime($OneDayLaterTime->format('Y-m-d'))));
            }
        }


        return $qb->setFirstResult(($page - 1) * $size)
            ->setMaxResults($size)
            ->getQuery();
    }
}