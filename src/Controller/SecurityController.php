<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class SecurityController extends AbstractController
{
    #[Route(path: '/connexion', name: 'APP_LOGIN')]
    public function login(AuthenticationUtils $authenticationUtils): Response
    {
        $error = $authenticationUtils->getLastAuthenticationError();
        $lastUsername = $authenticationUtils->getLastUsername();

        return $this->render('@EasyAdmin/page/login.html.twig', [
            'error' => $error,
            'last_username' => $lastUsername,
            'favicon_path' => '/favicon/base-favicon.svg',
            'page_title' => 'Connexion - Robin PARISOT',
            'csrf_token_intention' => 'authenticate',
            'target_path' => $this->generateUrl('ADMIN_DASHBOARD'),
            'username_label' => 'Identifiant',
            'password_label' => 'Mot de passe',
            'sign_in_label' => 'Se connecter',
            'username_parameter' => 'email',
            'password_parameter' => 'password',

            // whether to enable or not the "forgot password?" link (default: false)
//            'forgot_password_enabled' => true,

            // the path (i.e. a relative or absolute URL) to visit when clicking the "forgot password?" link (default: '#')
//            'forgot_password_path' => $this->generateUrl('...', ['...' => '...']),

            // the label displayed for the "forgot password?" link (the |trans filter is applied to it)
//            'forgot_password_label' => 'Forgot your password?',

            // whether to enable or not the "remember me" checkbox (default: false)
            'remember_me_enabled' => true,

            // remember me name form field (default: '_remember_me')
            'remember_me_parameter' => 'custom_remember_me_param',

            // whether to check by default the "remember me" checkbox (default: false)
            'remember_me_checked' => true,

            // the label displayed for the remember me checkbox (the |trans filter is applied to it)
            'remember_me_label' => 'Se souvenir de moi',
        ]);
    }

    #[Route(path: '/deconnexion', name: 'APP_LOGOUT')]
    public function logout(): void
    {
        throw new \LogicException('This method can be blank - it will be intercepted by the logout key on your firewall.');
    }
}
