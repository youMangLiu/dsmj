<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/2/27
 * Time: 11:14
 */

namespace App\Bundle\LoginBundle\Repository;

use App\Bundle\LoginBundle\Entity\GameAdmin;
use Doctrine\ORM\EntityRepository;

class GameAdminRepository extends EntityRepository
{
    /**
     * loadAdminByUserName @desc
     * @author liulian
     * @param $userName
     *
     * @return mixed|null
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function loadAdminByUserName($userName)
    {
        if (!$userName) {
            return null;
        }
        $user = $this->createQueryBuilder('u')
            ->where('u.userName=:acc')
            ->setParameter('acc', $userName)
            ->getQuery()
            ->getOneOrNullResult();

        return $user;
    }

    /**
     * findByUserName @desc
     * @author liulian
     * @param $userName
     *
     * @return GameAdmin
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function findByUserName($userName)
    {
        return $this->createQueryBuilder('u')
            ->where('u.userName=:userName')
            ->setParameter('userName', $userName)
            ->getQuery()
            ->setCacheable(true)
            ->getOneOrNullResult();
    }
}