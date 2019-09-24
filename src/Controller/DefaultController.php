<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\ToolsProvider;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage")
     * @param Request                $request
     * @param EntityManagerInterface $em
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request, EntityManagerInterface $em)
    {
        $contact = new Contact();
        $form    = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            // send contact
            $em->persist($contact);
            $em->flush();
        }
        return $this->render('default/index.html.twig', [
            'toolsFront' => ToolsProvider::getToolsFront(),
            'toolsBack'  => ToolsProvider::getToolsBack(),
            'toolsOther' => ToolsProvider::getToolsOther(),
            'form'       => $form->createView(),
        ]);
    }
}
