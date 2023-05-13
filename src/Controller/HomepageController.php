<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\ActualityRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomepageController extends AbstractController
{
    #[Route('/', name: 'APP_HOMEPAGE')]
    public function index(
        ActualityRepository    $actualityRepository
    ): Response
    {
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
return $this->redirectToRoute('APP_HOMEPAGE');
        }

        return $this->render('homepage/index.html.twig', [
            'actualities' => $actualityRepository->getPaginated(limit: 3),
            'contact' => new Contact(),
            'form' => $this->createForm(ContactType::class, new Contact()),
        ]);
    }

    #[Route('/test', name: 'TEST')]
    public function test()
    {
        return $this->render('default/test.html.twig');
    }
}
