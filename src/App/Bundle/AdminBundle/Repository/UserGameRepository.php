<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/2/27
 * Time: 11:14
 */

namespace App\Bundle\AdminBundle\Repository;

use Doctrine\ORM\EntityRepository;

class UserGameRepository extends EntityRepository
{
    public function removeByUuid($uuid)
    {
        $this->_em->createQueryBuilder('ug')
            ->where('ug.uuid =:Uuid')
            ->setParameter('Uuid', $uuid)
            ->delete();
    }
}