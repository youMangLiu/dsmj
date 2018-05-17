<?php
/**
 * Created by PhpStorm.
 * User: liulian
 * Date: 2018/4/23
 * Time: 18:12
 */

namespace App\Bundle\AdminBundle\Controller;

use App\Bundle\AdminBundle\Annotation\Parameter;
use App\Bundle\AdminBundle\Entity\GameConfig;
use App\Bundle\AdminBundle\Entity\GameSign;
use App\Bundle\AdminBundle\Exception\AppException;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;

class ConfigController extends AdminApiController
{
    /**
     * signListAction 签到配置列表
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     *
     * @Parameter(name="page", require=false)
     * @Route("/api/sign")
     *
     * @return JsonResponse
     */
    public function signListAction(EntityManagerInterface $entityManager, Request $request)
    {
        $page = max($request->query->getInt('page', 1), 1);

        $query = $entityManager->getRepository('AppAdminBundle:GameSign')->getAll($page);

        $page = new Paginator($query);

        $list = [];
        /** @var GameSign $item */
        foreach ($page as $item) {
            $list[] = [
                'id'   => $item->getId(),
                'glod' => $item->getGlod(),
                'card' => $item->getCard(),
                'days' => $item->getDays(),
            ];
        }

        return $this->success([
            'list'  => $list,
            'count' => $page->count(),
        ]);
    }

    /**
     * addSignAction 添加签到配置
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     *
     * @Route("/api/sign/add", methods={"post"})
     * @Parameter(name="data", method="BODY")
     *
     * @return JsonResponse
     */
    public function addSignAction(EntityManagerInterface $entityManager, Request $request)
    {
        $serializer = $this->get('serializer');

        /** @var GameSign $gameSign */
        $gameSign = $serializer->deserialize($request->getContent(), GameSign::class, 'json');

        $errorList = $this->get('validator')->validate($gameSign);
        if ($errorList->count()) {
            return $this->error($errorList->get(0)->getMessage(), 'invalid_advert');
        }

        $entityManager->persist($gameSign);
        $entityManager->flush();

        return $this->success();
    }

    /**
     * editSignAction 编辑签到配置
     *
     * @author liulian
     *
     * @param GameSign               $gameSign
     * @param Request                $request
     * @param EntityManagerInterface $entityManager
     *
     * @Route("/api/sign/{id}", methods={"PUT"}, requirements={"id":"^[1-9]\d*$"})
     * @return JsonResponse
     */
    public function editSignAction(GameSign $gameSign, Request $request, EntityManagerInterface $entityManager)
    {
        $serializer = $this->get('serializer');
        $serializer->deserialize($request->getContent(), GameSign::class, 'json', [
            'object_to_populate' => $gameSign,
        ]);

        $errorList = $this->get('validator')->validate($gameSign);
        if ($errorList->count()) {
            return $this->error($errorList->get(0)->getMessage(), 'invalid_popup');
        }
        $entityManager->flush();

        return $this->success();
    }

    /**
     * delSignAction 删除签到配置
     *
     * @author liulian
     *
     * @param GameSign               $gameSign
     * @param EntityManagerInterface $entityManager
     *
     * @Route("/api/sign/delete/{id}", methods={"DELETE"},requirements={"id":"^[1-9]\d*$"})
     *
     * @return JsonResponse
     */
    public function delSignAction(GameSign $gameSign, EntityManagerInterface $entityManager)
    {
        if (null === $gameSign) {
            throw new AppException('该签到配置不存在');
        }

        $entityManager->remove($gameSign);
        $entityManager->flush();

        return $this->success();
    }

    /**
     * regAction
     *
     * @author liulian
     *
     * @param EntityManagerInterface $entityManager
     * @param Request                $request
     * @Route("/api/reg")
     *
     * @return JsonResponse
     */
    public function regAction(EntityManagerInterface $entityManager, Request $request)
    {
        /** @var GameConfig $data */
        $data = $entityManager->getRepository('AppAdminBundle:GameConfig')->findOneBy([]);

        return $this->success([
            'data' => [
                'id'        => $data->getId(),
                'init_gold' => $data->getInitGold(),
                'init_card' => $data->getInitCard(),
                'init_bank' => $data->getInitBank(),
            ],
        ]);
    }

    /**
     * editAction
     *
     * @author liulian
     *
     * @param GameConfig             $gameConfig
     * @param Request                $request
     * @param EntityManagerInterface $entityManager
     *
     * @Route("/api/reg/{id}", methods={"PUT"}, requirements={"id":"^[1-9]\d*$"})
     * @return JsonResponse
     */
    public function editAction(GameConfig $gameConfig, Request $request, EntityManagerInterface $entityManager)
    {
        $serializer = $this->get('serializer');
        $serializer->deserialize($request->getContent(), GameConfig::class, 'json', [
            'object_to_populate' => $gameConfig,
        ]);

        $errorList = $this->get('validator')->validate($gameConfig);
        if ($errorList->count()) {
            return $this->error($errorList->get(0)->getMessage(), 'invalid_popup');
        }
        $entityManager->flush();

        return $this->success();

    }

}