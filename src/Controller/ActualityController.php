<?php

namespace App\Controller;

use App\Repository\ActualityRepository;
use App\Service\Seo\SonataSeoHelper;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Vich\UploaderBundle\Storage\StorageInterface;
use Vich\UploaderBundle\Templating\Helper\UploaderHelperInterface;

class ActualityController extends AbstractController
{
    public function __construct(
        private readonly ActualityRepository $actualityRepository,
        private readonly SonataSeoHelper     $seoHelper,
        private readonly StorageInterface    $helper
    )
    {
    }

    #[Route('/actualites', name: 'APP_ACTUALITIES')]
    public function actualites(Request $request): Response
    {
        $this
            ->seoHelper
            ->setTitle('Les actualités')
            ->setDescription('Retrouvez ici mes actualités ou mes snippets ou encore de courts tutoriels.')
        ;
        return $this->render('actuality/actualites.html.twig', [
            'pagination' => $this->actualityRepository->getPaginated(
                page: $request->get('page', 1),
                limit: 10,
                tagName: $request->get('tag')
            ),
        ]);
    }

    #[Route('/actualite/{id}', name: 'APP_ACTUALITY')]
    public function actuality(int $id): Response
    {
        if (!$actuality = $this->actualityRepository->find($id)) {
            return $this->redirectToRoute('APP_ACTUALITIES');
        }

        $this->seoHelper
            ->setTitle($actuality->getTitle())
            ->setDescription($actuality->getResume())
            ->setImage($this->helper->resolveUri($actuality), true);

        return $this->render('actuality/actuality.html.twig', [
            'actuality' => $actuality,
            'actuality_prev_next' => $this->actualityRepository->findPreviousAndNextActualite($actuality)
        ]);
    }
}
