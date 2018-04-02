<?php
///**
// * Created by PhpStorm.
// * User: chenmingming
// * Date: 2017/7/10
// * Time: 00:27
// */
//
//namespace App\Bundle\AdminBundle\Security;
//
//use GuzzleHttp\Client;
//use GuzzleHttp\Exception\ClientException;
//use Psr\Cache\CacheItemPoolInterface;
//use Psr\Log\LoggerInterface;
//use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
//use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
//use Symfony\Component\Security\Core\User\UserInterface;
//use Symfony\Component\Security\Core\User\UserProviderInterface;
//
//class ApiKeyUserProvider implements UserProviderInterface
//{
//
//    /** @var  CacheItemPoolInterface */
//    private $cacheItemPool;
//    /** @var LoggerInterface $logger */
//    private $logger;
//    private $options = [
//        'base_uri' => 'http://127.0.0.1:8001',
//    ];
//
//    public function __construct($options = [], CacheItemPoolInterface $adapter, LoggerInterface $logger)
//    {
//        $this->cacheItemPool = $adapter;
//        $this->logger        = $logger;
//        $this->options       = array_merge($this->options, $options);
//    }
//
//    /**
//     * loadUserByUsername
//     *
//     * @author chenmingming
//     *
//     * @param string $username apikey
//     *
//     * @return Operator
//     */
//    public function loadUserByUsername($username)
//    {
//        $client = new Client(['base_uri' => $this->options['base_uri']]);
//
//        try {
//            $response = $client->get('/api/simplelogin', [
//                'headers' => [
//                    'Authorization' => $username,
//                ],
//                'verify'  => false,
//            ]);
//            echo "<pre>";
//            print_r($response);exit;
//            $content  = json_decode($response->getBody()->getContents(), true);
//            $this->logger->debug('admin user response.', $content);
//            $operator = new Operator($content);
//        } catch (ClientException $exception) {
//            echo "<pre>";
//            print_r($exception->getMessage());exit;
//            $this->logger->info($exception->getMessage(), ['exception' => $exception]);
//            throw new UnauthorizedHttpException('Authorization', $exception->getMessage());
//        }
//
//        return $operator;
//    }
//
//    public function refreshUser(UserInterface $user)
//    {
//        // this is used for storing authentication in the session
//        // but in this example, the token is sent in each request,
//        // so authentication can be stateless. Throwing this exception
//        // is proper to make things stateless
//        throw new UnsupportedUserException();
//    }
//
//    public function supportsClass($class)
//    {
//        return Operator::class === $class;
//    }
//
//}

/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/10
 * Time: 00:27
 */

namespace App\Bundle\AdminBundle\Security;

use App\Bundle\LoginBundle\Entity\GameAdmin;
use App\Bundle\LoginBundle\Repository\GameAdminRepository;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;
use Symfony\Component\Security\Core\Exception\UnsupportedUserException;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Core\User\UserProviderInterface;

class ApiKeyUserProvider implements UserProviderInterface
{
    private $logger;
    /** @var  GameAdminRepository */
    private $userRepos;

    /** @var \Redis $redis */
    private $redis;

    public function __construct(\Redis $redis, LoggerInterface $logger, UserCacheManager $userCacheManager, EntityManagerInterface $em)
    {
        $this->redis     = $redis;
        $this->logger    = $logger;
        $this->userRepos = $em->getRepository(GameAdmin::class);
    }

    /**
     * getUsernameForApiKey
     *
     * @author chenmingming
     *
     * @param $apiKey
     *
     * @return mixed
     */
    public function getUsernameForApiKey($apiKey)
    {
        $data = $this->redis->get($apiKey);

        if ($data === false) {
            throw new UnauthorizedHttpException('api-key', 'api-key is invalid.');
        }
        list($user_name, $expire) = explode(":", $data, 2);

        if ($user_name) {
            //用户名存在  确认生命周期是否合法
            $life = $expire - time();
            if ($life <= 0) {
                throw new UnauthorizedHttpException('Authorization', 'authorization expired.');
            }

            return $user_name;
        } else {
            throw new UnauthorizedHttpException('Authorization', 'authorization invalid.');
        }
    }

    /**
     * loadUserByUsername
     * @author liulian
     * @param string $username
     *
     * @return GameAdmin|UserInterface
     * @throws \Doctrine\ORM\NonUniqueResultException
     */
    public function loadUserByUsername($username)
    {
        return $this->userRepos->findByUserName($username);
    }

    public function refreshUser(UserInterface $user)
    {
        throw new UnsupportedUserException();
    }

    public function supportsClass($class)
    {
        return GameAdmin::class === $class;
    }

}