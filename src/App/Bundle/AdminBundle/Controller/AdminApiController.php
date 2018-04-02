<?php
/**
 * Created by PhpStorm.
 * User: webid
 * Date: 17-8-31
 * Time: 下午5:29
 */

namespace App\Bundle\AdminBundle\Controller;

use App\Bundle\AdminBundle\Annotation\Parameter;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\JsonResponse;

class AdminApiController extends Controller
{
    /**
     * checkLogged
     *
     * @author chenmingming
     *
     * @param $method
     *
     * @return array
     */
    public function getParams($method)
    {
        $params    = [];
        $key       = 'app.params.' . md5(get_class($this) . '-' . $method);
        $cacheItem = $this->get('cache.app')->getItem($key);
        if (!$cacheItem->isHit() || in_array($this->getParameter('kernel.environment'), ['dev', 'test'])) {
            $object = new \ReflectionObject($this);
            try {
                $annotations = $this->get('annotation_reader')->getMethodAnnotations($object->getMethod($method));

                foreach ($annotations as $annotation) {
                    if ($annotation instanceof Parameter) {
                        $params[] = $annotation;
                    }
                }
                $cacheItem->set(serialize($params));
                $this->get('cache.app')->save($cacheItem);
            } catch (\Exception $e) {

            }
        } else {
            $params = unserialize($cacheItem->get());
        }

        return $params;

    }

    /**
     * success
     *
     * @author chenmingming
     *
     * @param $data
     *
     * @return JsonResponse
     */
    public function success($data = [])
    {
        $array = [
            'code' => 'SUCCESS',
            'msg'  => 'SUCCESS',
        ];
        $array = array_merge($array, $this->convertToString($data));

        return new JsonResponse($array);
    }

    private function convertToString($value)
    {
        if (is_array($value)) {
            $tmp = [];
            foreach ($value as $k => $v) {
                $tmp[$k] = $this->convertToString($v);
            }

            return $tmp;
        } elseif (!is_bool($value)) {
            return (string)$value;
        }

        return $value;
    }

    public function error($message, $errNo, array $data = [])
    {
        $array = [
            'code' => $errNo,
            'msg'  => $message,
        ];
        if ($data) {
            $array = array_merge($array, $data);
        }

        return new JsonResponse($array);
    }
}