<?php

namespace App\Controller;

use App\Repository\Tools\ApodRepository;
use App\Service\Tools\Apod\ApodDiscord;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Response;
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
     * @param ApodRepository $apodRepository
     * @return Response
     */
    public function apod(ApodRepository $apodRepository)
    {
        return $this->render('tools/apod.html.twig', [
            'apods' => $apodRepository->getAllOrderByDate(),
        ]);
    }

    /**
     * @Route("/apod/send/{id}", name="TOOLS_APOD_SEND")
     * @param int            $id
     * @param ApodRepository $apodRepository
     * @param ApodDiscord    $apodDiscord
     * @return RedirectResponse
     */
    public function apodSend(int $id, ApodRepository $apodRepository, ApodDiscord $apodDiscord)
    {
        if (!$apod = $apodRepository->find($id)) {
            return $this->redirectToRoute('TOOLS_APOD');
        }
        $apodDiscord->sendDiscord($apod);
        $this->addFlash('success', 'Message envoyé sur le discord');
        return $this->redirectToRoute('TOOLS_APOD');

    }
}
