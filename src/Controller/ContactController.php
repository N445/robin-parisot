<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\Contact2Type;
use App\Repository\ContactRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/contact")
 */
class ContactController extends AbstractController
{
    const CURRENT_GROUP = 'CONTACT_GROUP';

    /**
     * @var ContactRepository
     */
    private $contactRepository;

    /**
     * SkillController constructor.
     * @param EntityManagerInterface $em
     * @param ContactRepository      $contactRepository
     */
    public function __construct(
        EntityManagerInterface $em,
        ContactRepository $contactRepository
    )
    {
        $this->em                = $em;
        $this->contactRepository = $contactRepository;
    }

    /**
     * @Route("/", name="contact_index", methods={"GET"})
     * @param ContactRepository $contactRepository
     * @return Response
     */
    public function index(ContactRepository $contactRepository): Response
    {
        return $this->render('contact/index.html.twig', [
            'contacts' => $contactRepository->findBy([], ['send_at' => 'DESC']),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="contact_show", methods={"GET"})
     * @param int $id
     * @return Response
     */
    public function show(int $id): Response
    {
        return $this->render('contact/show.html.twig', [
            'contact'       => $this->contactRepository->find($id),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="contact_delete", methods={"DELETE"})
     * @param Request $request
     * @param int     $id
     * @return Response
     */
    public function delete(Request $request, int $id): Response
    {
        $contact = $this->contactRepository->find($id);
        if ($this->isCsrfTokenValid('delete' . $contact->getId(), $request->request->get('_token'))) {
            $this->em->remove($contact);
            $this->em->flush();
        }
        return $this->redirectToRoute('contact_index');
    }
}
