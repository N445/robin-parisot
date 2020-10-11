<?php

namespace App\Controller;

use App\Repository\Tools\Rss\RssFeedRepository;
use App\Service\Tools\Rss\RssParser;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{

    /**
     * @var RssParser
     */
    private $rssParser;

    /**
     * @var RssFeedRepository
     */
    private $rssFeedRepository;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * AdminController constructor.
     * @param RssParser $rssParser
     */
    public function __construct(
        RssParser $rssParser,
        RssFeedRepository $rssFeedRepository,
        EntityManagerInterface $em
    )
    {
        $this->rssParser         = $rssParser;
        $this->rssFeedRepository = $rssFeedRepository;
        $this->em                = $em;
    }


    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        return $this->render('admin/index.html.twig', [
            'current_group' => 'ADMIN',
        ]);
    }

    /**
     * Création de la route "goaccess"
     * @Route("/goaccess", name="GOACCESS", methods={"GET"})
     * @param Request $request
     * @return Response
     */
    public function goaccess(Request $request, KernelInterface $kernel)
    {
        return $this->render('admin/goaccess.html.twig', [
            'goaccessContent' => file_get_contents($kernel->getProjectDir() . '/var/goaccess/index.html'),
        ]);
    }


}
