<?php

namespace App\Bundle\AdminBundle\Controller;

use App\Bundle\AdminBundle\Annotation\Parameter;
use App\Bundle\AdminBundle\Entity\UserGame;
use App\Bundle\AdminBundle\Entity\UserInfo;
use App\Bundle\AdminBundle\Exception\AppException;
use App\Component\User\Info;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class InfoController extends AdminApiController implements Info
{
    /**
     * indexAction
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @Route("/api/user")
     * @Parameter(name="page",require=false)
     * @Parameter(name="unick",require=false)
     *
     * @return JsonResponse
     */
    public function indexAction(EntityManagerInterface $entityManager, Request $request)
    {
        $page  = max($request->query->getInt('page', 1), 1);
        $nick = $request->query->get('unick');
        $query = $entityManager->getRepository('AppAdminBundle:UserInfo')->getUserList($page, $nick);

        $page = new Paginator($query);
        $list = [];
        /** @var UserInfo $item */
        foreach ($page as $item) {
            /** @var UserGame $userGame */
            $userGame = $entityManager->getRepository('AppAdminBundle:UserGame')->findOneBy(['uuid' => $item->getUuid()]);
            $list[]   = [
                'uid'         => $item->getUid(),
                'uuid'        => $item->getUuid(),
                'unick'       => $item->getUnick(),
                'uphone'      => $item->getUphone(),
                'uface'       => $item->getUface(),
                'uemail'      => $item->getUemail(),
                'usex'        => self::SEX_ARR[$item->getUsex()],
                'uvip'        => $item->getUvip(),
                'u_token'     => $item->getUToken(),
                'u_type'      => self::TYPE[$item->getUType()],
                'status'      => self::STATUS_ARR[$item->getStatus()],
                'regist_ip'   => $item->getRegistIp(),
                'regist_time' => $item->getRegistTime(),
                'login_ip'    => $item->getLoginIp(),
                'login_time'  => $item->getLoginTime(),
                'ugold'       => $userGame ? $userGame->getUgold() : 0,
                'ubank'       => $userGame ? $userGame->getUbank() : 0,
                'ucard'       => $userGame ? $userGame->getUcard() : 0,
                'roomid'      => $userGame ? $userGame->getRoomid() : 0,
            ];
        }

        return $this->success([
            'list'  => $list,
            'count' => $page->count(),
        ]);

    }

    /**
     * delAction 删除用户
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param UserInfo               $userInfo
     * @Route("/api/delete/{id}", methods={"DELETE"}, requirements={"uid":"^[1-9]\d*$"})
     *
     * @return JsonResponse
     */
    public function delAction(EntityManagerInterface $entityManager, UserInfo $userInfo)
    {
        if (null === $userInfo) {
            throw new AppException('该用户不存在');
        }

        $entityManager->getRepository('AppAdminBundle:UserGame')->removeByUuid($userInfo->getUuid());

        $entityManager->remove($userInfo);
        $entityManager->flush();

        return $this->success();
    }
}
