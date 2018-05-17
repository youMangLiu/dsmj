<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/13
 * Time: 00:42
 */

namespace App\Bundle\LoginBundle\Controller;

use App\Bundle\LoginBundle\Annotation\Parameter;
use App\Bundle\LoginBundle\Entity\GameAdmin;
use App\Bundle\LoginBundle\Utils\Login\LoginHelper;
use Doctrine\ORM\EntityManagerInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

class LoginController extends AppApiController
{
    /**
     * simpleLoginAction 登陆
     *
     * @author liulian
     *
     * @param Request                $request
     * @param EntityManagerInterface $entityManager
     *
     * @Route("/api/simplelogin")
     *
     * @return JsonResponse
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function simpleLoginAction(EntityManagerInterface $entityManager, Request $request)
    {
        $data     = json_decode($request->getContent(), true);
        $userName = $data['username'];
        $password = $data['password'];
//        $userName = $request->request->get('username');
//        $password = $request->request->get('password');

        /** @var GameAdmin $user */
        $user = $entityManager->getRepository('AppLoginBundle:GameAdmin')
            ->loadAdminByUserName($userName);

        if ($user === NULL) {
            throw new BadRequestHttpException("该用户不存在");
        }
        $helper          = new LoginHelper($user, $this->get('snc_redis.default'));
        $encryptPassword = md5($password);

        if ($encryptPassword == $user->getPassword()) {
            $user->setLastLoginIp($request->getClientIp());
            $user->setLastLoginTime(new \DateTime());
            list($token,) = $helper->generateLoginToken(false, false);
            return $this->success([
                'token' => $token,
            ]);
        }
        throw new BadRequestHttpException("账号错误");
    }
}