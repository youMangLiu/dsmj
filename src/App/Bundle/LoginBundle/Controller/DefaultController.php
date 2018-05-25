<?php

namespace App\Bundle\LoginBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/index/1")
     */
    public function indexAction()
    {
        return $this->render('@AppLogin/Default/index.html.twig');
    }
}
