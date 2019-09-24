<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\Contact2Type;
use App\Repository\ContactRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/admin/contact")
 */
class ContactController extends AbstractController
{
    const CURRENT_GROUP = 'CONTACT_GROUP';

    /**
     * SkillController constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Route("/", name="contact_index", methods={"GET"})
     * @param ContactRepository $contactRepository
     * @return Response
     */
    public function index(ContactRepository $contactRepository): Response
    {
        return $this->render('contact/index.html.twig', [
            'contacts'      => $contactRepository->findBy([], ['send_at' => 'DESC']),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/new", name="contact_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $contact = new Contact();
        $form    = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->persist($contact);
            $this->em->flush();
            return $this->redirectToRoute('contact_index');
        }
        return $this->render('contact/new.html.twig', [
            'contact'       => $contact,
            'form'          => $form->createView(),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="contact_show", methods={"GET"})
     * @return Response
     */
    public function show(Contact $contact): Response
    {
        return $this->render('contact/show.html.twig', [
            'contact'       => $contact,
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="contact_edit", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request, Contact $contact): Response
    {
        $form = $this->createForm(ContactType::class, $contact);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            return $this->redirectToRoute('contact_index', ['id' => $contact->getId()]);
        }
        return $this->render('contact/edit.html.twig', [
            'contact'       => $contact,
            'form'          => $form->createView(),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="contact_delete", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request, Contact $contact): Response
    {
        if ($this->isCsrfTokenValid('delete' . $contact->getId(), $request->request->get('_token'))) {
            $this->em->remove($contact);
            $this->em->flush();
        }
        return $this->redirectToRoute('contact_index');
    }

    /**
     * @Route("/{id}/switch-value", name="contact_switch_update", methods={"POST"}, options={"expose":true})
     * @param Contact $contact * @param Request $request
     * @return Response
     */
    public function switchUpdate(Contact $contact, request $request): Response
    {
        $method = 'set' . ucfirst($request->get('fieldname'));
        $value  = filter_var($request->get('value'), FILTER_VALIDATE_BOOLEAN);
        $contact->$method($value);
        $this->em->flush();
        return new JsonResponse([
            'status' => true,
        ]);
    }
}
