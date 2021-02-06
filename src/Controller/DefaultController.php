<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    const PAGE = 'page';

    /**
     * @Route("/", name="HOMEPAGE")
     */
    public function index(): Response
    {
        return $this->render('default/index.html.twig', [
            self::PAGE => 'homepage',
        ]);
    }

    /**
     * Création de la route "skills"
     * @Route("/skills", name="SKILLS", methods={"GET"})
     * @return Response
     */
    public function skills()
    {
        return $this->render('default/skills.html.twig', [
            self::PAGE => 'skills',
        ]);
    }

    /**
     * Création de la route "skill"
     * @Route("/skill/{id}", name="SKILL", methods={"GET"})
     * @return Response
     */
    public function skill(int $id)
    {
        return $this->render('default/skill.html.twig', [
            self::PAGE => 'skills',
        ]);
    }


    /**
     * Création de la route "news"
     * @Route("/news", name="NEWS", methods={"GET"})
     * @return Response
     */
    public function news()
    {
        return $this->render('default/news.html.twig', [
            self::PAGE => 'news',
        ]);
    }

    /**
     * Création de la route "new"
     * @Route("/new/{id}", name="NEW", methods={"GET"})
     * @param int $id
     * @return Response
     */
    public function new(int $id)
    {
        return $this->render('default/new.html.twig', [
            self::PAGE => 'news',
        ]);
    }


    /**
     * Création de la route "contact"
     * @Route("/contact", name="CONTACT", methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function contact(Request $request)
    {
        return $this->render('default/contact.html.twig', [
            self::PAGE => 'contact',
        ]);
    }


}
