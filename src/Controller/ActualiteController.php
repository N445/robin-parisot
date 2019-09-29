<?php

namespace App\Controller;

use App\Entity\Actualite;
use App\Form\ActualiteType;
use App\Repository\ActualiteRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\Form;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;

/**
 * @Route("/admin/actualite")
 */
class ActualiteController extends AbstractController
{
    const CURRENT_GROUP = 'ACTUALITE_GROUP';

    /**
     * SkillController constructor.
     * @param EntityManagerInterface $em
     */
    public function __construct(EntityManagerInterface $em)
    {
        $this->em = $em;
    }

    /**
     * @Route("/", name="actualite_index", methods={"GET"})
     * @param ActualiteRepository $actualiteRepository
     * @return Response
     */
    public function index(ActualiteRepository $actualiteRepository): Response
    {
        return $this->render('actualite/index.html.twig', [
            'actualites'    => $actualiteRepository->findAll(),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/new", name="actualite_new", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function new(Request $request): Response
    {
        $actualite = new Actualite();
        $form      = $this->createForm(ActualiteType::class, $actualite);
        $form->handleRequest($request);
        $this->createTags($form);
//        if ($form->isSubmitted() && $form->isValid()) {
//            $this->em->persist($actualite);
//            $this->em->flush();
//            return $this->redirectToRoute('actualite_index');
//        }
        return $this->render('actualite/new.html.twig', [
            'actualite'     => $actualite,
            'form'          => $form->createView(),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="actualite_show", methods={"GET"})
     * @return Response
     */
    public function show(Actualite $actualite): Response
    {
        return $this->render('actualite/show.html.twig', [
            'actualite'     => $actualite,
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="actualite_edit", methods={"GET","POST"})
     * @param Request $request
     * @return Response
     */
    public function edit(Request $request, Actualite $actualite): Response
    {
        $form = $this->createForm(ActualiteType::class, $actualite);
        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $this->em->flush();
            return $this->redirectToRoute('actualite_index', ['id' => $actualite->getId()]);
        }
        return $this->render('actualite/edit.html.twig', [
            'actualite'     => $actualite,
            'form'          => $form->createView(),
            'current_group' => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="actualite_delete", methods={"DELETE"})
     * @param Request $request
     * @return Response
     */
    public function delete(Request $request, Actualite $actualite): Response
    {
        if ($this->isCsrfTokenValid('delete' . $actualite->getId(), $request->request->get('_token'))) {
            $this->em->remove($actualite);
            $this->em->flush();
        }
        return $this->redirectToRoute('actualite_index');
    }

    /**
     * @Route("/{id}/switch-value", name="actualite_switch_update", methods={"POST"}, options={"expose":true})
     * @param Actualite $actualite * @param Request $request
     * @return Response
     */
    public function switchUpdate(Actualite $actualite, request $request): Response
    {
        $method = 'set' . ucfirst($request->get('fieldname'));
        $value  = filter_var($request->get('value'), FILTER_VALIDATE_BOOLEAN);
        $actualite->$method($value);
        $this->em->flush();
        return new JsonResponse([
            'status' => true,
        ]);
    }

    private function createTags(Form $form)
    {
        dump($form->get("tags_select2")->getData());
    }
}
