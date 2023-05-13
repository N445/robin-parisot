<?php

namespace App\DataFixtures;

use App\Entity\User;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

class UserFixtures extends Fixture
{
    public function __construct(
        private readonly UserPasswordHasherInterface $userPasswordHasher
    )
    {
    }

    public function load(ObjectManager $manager): void
    {
        $user = new User();
        $user->setEmail('parisrob@hotmail.fr')
            ->setPassword($this->userPasswordHasher->hashPassword($user, 'parisrob@hotmail.fr'))
            ->setRoles([User::ROLE_ADMIN]);
        $manager->persist($user);

        $manager->flush();
    }
}
