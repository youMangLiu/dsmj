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
     * @param int    $page  页码
     * @param int    $size  条数
     * @param string $unick 昵称
     *
     * @return \Doctrine\ORM\Query
     *
     */
    public function getUserList($page, $unick = '', $size = 20)
    {
        $qb = $this->createQueryBuilder('u');
        if (trim($unick)) {
            $qb->Where('u.unick like :unick')
                ->setParameter('unick', '%' . $unick . '%');
        }

        return $qb->setFirstResult(($page - 1) * $size)
            ->setMaxResults($size)
            ->getQuery();
    }
}