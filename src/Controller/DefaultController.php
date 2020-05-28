<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Helper\ContactPopulator;
use App\Provider\RssProvider;
use App\Service\ContactDiscord;
use App\Service\Recaptcha;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var ContactDiscord
     */
    private $contactDiscord;

    /**
     * @var RssProvider
     */
    private $rssProvider;

    /**
     * DefaultController constructor.
     * @param EntityManagerInterface $em
     * @param ContactDiscord         $contactDiscord
     * @param RssProvider            $rssProvider
     */
    public function __construct(
        EntityManagerInterface $em,
        ContactDiscord $contactDiscord,
        RssProvider $rssProvider
    )
    {
        $this->em             = $em;
        $this->contactDiscord = $contactDiscord;
        $this->rssProvider    = $rssProvider;
    }
    
    /**
     * @Route("/", name="homepage", methods={"GET","POST"}, options={"expose"=true})
     * @param Request $request
     * @return Response
     */
    public function index(Request $request)
    {
        $contact = new Contact();
        $form    = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($request->isXmlHttpRequest()) {
            return $this->contactSend($form, $request);
        }

        return $this->render('default/index.html.twig', [
            'form'      => $form->createView(),
            'recaptcha' => Recaptcha::RECAPTCHA_KEY,
            'rssFeeds'  => $this->rssProvider->getHomeRssFeeds(),
            'rssItems'  => $this->rssProvider->getHomeRssItems(),
        ]);
    }
    
    /**
     * @param Form $form
     * @param Request $request
     * @return JsonResponse
     */
    private function contactSend(
        Form $form,
        Request $request
    )
    {
        $success = false;
        if ($form->isValid()) {
            $contact = ContactPopulator::populate($request->request->get('contact'));
            $this->em->persist($contact);
            $this->em->flush();
            $this->contactDiscord->send($contact);
            $contact = new Contact();
            $form = $this->createForm(ContactType::class, $contact);
            $success = true;
        }
        
        return new JsonResponse([
            'success' => $success,
            'view' => $this->renderView('includes/contact-form.html.twig', [
                'form' => $form->createView(),
            ]),
        ]);
    }
}
