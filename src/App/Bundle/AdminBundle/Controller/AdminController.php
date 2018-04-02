<?php
/**
 * Created by PhpStorm.
 * User: chenmingming
 * Date: 2017/7/9
 * Time: 17:04
 */

namespace App\Bundle\AdminBundle\Controller;

use Anxin\UserBundle\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Psr\Log\LoggerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;
use Symfony\Component\Serializer\Serializer;
use Symfony\Component\Validator\Validator\RecursiveValidator;

class AdminController extends Controller
{

    /**
     * getSerializer
     *
     * @author chenmingming
     * @return Serializer
     */
    protected function getSerializer()
    {
        /** @var Serializer $serializer */
        $serializer = $this->get('serializer');

        return $serializer;
    }

    /**
     * getValidator
     *
     * @author chenmingming
     * @return RecursiveValidator
     */
    protected function getValidator()
    {
        /** @var RecursiveValidator $validator */
        $validator = $this->get('validator');

        return $validator;
    }

    /**
     * getEntityManager
     *
     * @author chenmingming
     * @return EntityManagerInterface
     */
    protected function getEntityManager()
    {
        /** @var EntityManagerInterface $entityManager */
        $entityManager = $this->getDoctrine()->getManager();

        return $entityManager;
    }

    /**
     * getLogger
     *
     * @author chenmingming
     * @return LoggerInterface
     */
    protected function getLogger()
    {
        /** @var LoggerInterface $logger */
        $logger = $this->get('logger');

        return $logger;
    }

    /**
     * getUser
     *
     * @author chenmingming
     * @return User
     */
    public function getUser()
    {
        return parent::getUser();
    }

    /**
     * create 创建一个新的对象
     *
     * @author chenmingming
     *
     * @param $entityClass
     * @param $body
     *
     * @return object
     */
    public function create($entityClass, $body)
    {
        $entity = $this->getSerializer()->deserialize($body, $entityClass, 'json');
        $errors = $this->getValidator()->validate($entity);
        if ($errors->count()) {
            throw new BadRequestHttpException($errors);
        }
        $this->getDoctrine()->getManager()->persist($entity);

        return $entity;
    }

    /**
     * edit
     *
     * @author chenmingming
     *
     * @param object $entity
     * @param string $body
     *
     * @return object
     */
    public function edit($entity, $body)
    {
        $this->getSerializer()
            ->deserialize($body, get_class($entity), 'json', ['object_to_populate' => $entity]);

        $errors = $this->getValidator()->validate($entity);
        if ($errors->count()) {
            throw new BadRequestHttpException($errors);
        }

        return $entity;
    }
}