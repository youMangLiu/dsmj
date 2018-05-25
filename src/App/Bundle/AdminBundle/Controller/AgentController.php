<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/5/25
 * Time: 10:42
 */

namespace App\Bundle\AdminBundle\Controller;

use App\Bundle\AdminBundle\Annotation\Parameter;
use App\Bundle\LoginBundle\Entity\AdminMaster;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;

class AgentController extends AdminApiController
{
    /**
     * addAction
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     *
     * @Route("/api/add/admin", methods={"POST"})
     *
     * @return \Symfony\Component\HttpFoundation\JsonResponse
     */
    public function addAction(EntityManagerInterface $entityManager, Request $request)
    {
        $serialize = $this->get('serializer');
        /** @var AdminMaster $adminMaster */
        $adminMaster = $serialize->deserialize($request->getContent(), AdminMaster::class, 'json');
        $errorList   = $this->get('validator')->validate($adminMaster);
        if ($errorList->count()) {
            return $this->error($errorList->get(0)->getMessage(), 'invalid_advert');
        }

        $entityManager->persist($adminMaster);
        $entityManager->flush();

        return $this->success();
    }

    /**
     * listAction 代理用户列表
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @Parameter(name="page", require="false")
     */
    public function listAction(EntityManagerInterface $entityManager, Request $request)
    {

    }

    /**
     * editAction 编辑代理用户
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param AdminMaster            $adminMaster
     * @param Request                $request
     */
    public function editAction(EntityManagerInterface $entityManager, Request $request, AdminMaster $adminMaster)
    {

    }

    /**
     * delAction
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     */
    public function delAction(EntityManagerInterface $entityManager, Request $request)
    {

    }
}