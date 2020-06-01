<?php

namespace App\Controller;

use App\Repository\Tools\ApodRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

/**
 * Class ToolsController
 * @package App\Controller
 * @Route("/admin/tools")
 */
class ToolsController extends AbstractController
{
    /**
     * @Route("/apod", name="TOOLS_APOD")
     */
    public function apod(ApodRepository $apodRepository)
    {
        return $this->render('tools/apod.html.twig', [
            'apods' => $apodRepository->getAllOrderByDate(),
        ]);
    }
}
