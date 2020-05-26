<?php

namespace App\Controller;

use App\Service\Tools\Apod\ApodProvider;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @var ApodProvider
     */
    private $apodProvider;

    public function __construct(
        ApodProvider $apodProvider
    )
    {
        $this->apodProvider = $apodProvider;
    }


    /**
     * @Route("/admin", name="admin")
     */
    public function index()
    {
        $this->apodProvider->getApod();
        return $this->render('admin/index.html.twig', [
            'current_group' => 'ADMIN',
        ]);
    }
}
