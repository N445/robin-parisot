<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\ToolsProvider;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
            'toolsFront' => ToolsProvider::getToolsFront(),
            'toolsBack'  => ToolsProvider::getToolsBack(),
            'toolsOther' => ToolsProvider::getToolsOther(),
        ]);
    }
}
