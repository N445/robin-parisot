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
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * DefaultController constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Route("/", name="homepage", methods={"GET","POST"}, options={"expose"=true})
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function index(Request $request)
    {
        $contact = new Contact();
        $form    = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($request->isXmlHttpRequest()) {
            $this->em->persist(ContactPopulator::populate($request->request->get('contact')));
            $this->em->flush();
            if ($form->isValid()) {
                $contact = new Contact();
                $form    = $this->createForm(ContactType::class, $contact);
            }
            return new JsonResponse([
                'success' => true,
                'view'    => $this->renderView('includes/contact-form.html.twig', [
                    'form' => $form->createView(),
                ]),
            ]);
        }

        return $this->render('default/index.html.twig', [
            'toolsFront' => ToolsProvider::getToolsFront(),
            'toolsBack'  => ToolsProvider::getToolsBack(),
            'toolsOther' => ToolsProvider::getToolsOther(),
            'form'       => $form->createView(),
        ]);
    }
}
