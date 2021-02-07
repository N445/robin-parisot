<?php

namespace App\DataFixtures\Contact;

use App\Entity\Contact\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ContactFixtures extends Fixture
{
    const LOOP = 10;

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        for ($i = 1; $i <= self::LOOP; $i++) {
            $contact = (new Contact())
                ->setFirstname($faker->optional()->firstName)
                ->setLastname($faker->optional()->lastname)
                ->setEmail($faker->email)
                ->setSubject($faker->realText(50))
                ->setMessage($faker->realText(200))
                ->setCreatedAt($faker->dateTimeBetween('-30 days','+30 days'))
            ;
            $manager->persist($contact);
        }

        $manager->flush();
    }
}
