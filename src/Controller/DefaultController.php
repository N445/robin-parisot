<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    #[Route('/mention-legales', name: 'APP_LEGAL_MENTION')]
    public function legalMention(): Response
    {
        return $this->render('default/legal-mention.html.twig');
    }
}
