<?php

namespace App\Bundle\AdminBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class SwaggerController extends Controller
{
    /**
     * indexAction
     *
     * @return \Symfony\Component\HttpFoundation\Response
     * @Route("/swagger.html")
     */
    public function indexAction()
    {
        return $this->render('swagger.html.twig', ['yml_url' => '/swagger/swagger.yml']);
    }
}
