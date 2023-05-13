<?php

namespace App\Controller\Admin;

use App\Entity\Actuality;
use App\Entity\Contact;
use App\Entity\Tag;
use EasyCorp\Bundle\EasyAdminBundle\Config\Assets;
use EasyCorp\Bundle\EasyAdminBundle\Config\Dashboard;
use EasyCorp\Bundle\EasyAdminBundle\Config\MenuItem;
use EasyCorp\Bundle\EasyAdminBundle\Controller\AbstractDashboardController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use function Symfony\Component\DependencyInjection\Loader\Configurator\env;

class DashboardController extends AbstractDashboardController
{
//    #[Route('/admin6314a8e', name: 'ADMIN_DASHBOARD')]
    #[Route('/%admin_base_path%', name: 'ADMIN_DASHBOARD')]
    public function index(): Response
    {
        return $this->render('admin/my-dashboard.html.twig');
    }

    public function configureDashboard(): Dashboard
    {
        return Dashboard::new()
            ->setTitle('Administration')
            ->setFaviconPath('favicon/base-favicon.svg')
            ->renderContentMaximized()
            ;
    }

    public function configureMenuItems(): iterable
    {
        yield MenuItem::linkToDashboard('Dashboard', 'fa-solid fa-gauge');
        yield MenuItem::linkToRoute('Le site', 'fa-solid fa-home', 'APP_HOMEPAGE');
        yield MenuItem::section('ContactFixtures');
        yield MenuItem::linkToCrud('Contacts', 'fa-solid fa-message', Contact::class);
        yield MenuItem::section('Contenu');
        yield MenuItem::linkToCrud('Tags', 'fa-solid fa-tags', Tag::class);
        yield MenuItem::linkToCrud('Actualités', 'fa-regular fa-newspaper', Actuality::class);
        // yield MenuItem::linkToCrud('The Label', 'fas fa-list', EntityClass::class);
    }
}
