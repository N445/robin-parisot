<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Helper\ContactPopulator;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use App\Utils\ToolsProvider;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="homepage", methods={"GET","POST"}, options={"expose"=true})
     * @param Request                $request
     * @param EntityManagerInterface $em
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request, EntityManagerInterface $em)
    {
        $contact = new Contact();
        $form    = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($request->isXmlHttpRequest()) {
            dump('$request->isXmlHttpRequest()');
            dump(ContactPopulator::populate($request->request->get('contact')));
            dump($form->isSubmitted());
            dump($form->isValid());
            return new JsonResponse([
                'success' => true,
                'view'    => $this->renderView('includes/contact-form.html.twig', [
                    'form' => $form->createView(),
                ]),
            ]);
        }

        if ($form->isSubmitted() && $form->isValid()) {
            // send contact
            dump('$form->isSubmitted()');
            dump($contact);
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
