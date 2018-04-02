<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-7-31
 * Time: 下午4:12
 */

namespace App\Bundle\AdminBundle\Security;

use App\Bundle\LoginBundle\Entity\GameAdmin;
use Psr\Cache\CacheItemPoolInterface;

class UserCacheManager
{
    /** @var  CacheItemPoolInterface */
    private $cacheItemPool;

    public function __construct(CacheItemPoolInterface $cacheItemPool)
    {
        $this->cacheItemPool = $cacheItemPool;
    }

    /**
     * saveUser 保存用户信息
     *
     * @author chenmingming
     *
     * @param GameAdmin $user
     * @throws \Psr\Cache\InvalidArgumentException
     */
    public function saveUser(GameAdmin $user)
    {
        $key   = $this->getKey($user->getUserName());
        $cache = $this->cacheItemPool->getItem($key);
        $cache->set(serialize($user));
        $this->cacheItemPool->save($cache);
    }

    /**
     * getUser 获取用户缓存对象
     *
     * @author chenmingming
     *
     * @param $username
     *
     * @return GameAdmin|null
     * @throws \Psr\Cache\InvalidArgumentException
     */
    public function getUser($username)
    {
        $key   = $this->getKey($username);
        $cache = $this->cacheItemPool->getItem($key);
        if ($cache->isHit()) {
            try {
                $user = unserialize($cache->get());
                if ($user instanceof GameAdmin) {
                    return $user;
                }
            } catch (\Exception $e) {
            }
        }

        return null;
    }

    private function getKey($username)
    {
        return 'user.cache.' . md5($username);
    }
}