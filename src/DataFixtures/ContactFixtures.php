<?php

namespace App\DataFixtures;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;

class ContactFixtures extends Fixture
{

    const LOOP = 10;

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr_FR');
        for ($i = 0; $i < self::LOOP; $i++) {
            $contact = new Contact();
            $contact->setFirstname($faker->firstName)
                    ->setLastname($faker->lastName)
                    ->setEmail($faker->email)
                    ->setSubject($faker->realText(20))
                    ->setMessage($faker->realText(200))
                    ->setSendAt($faker->dateTimeBetween('-30 days', 'now'))
            ;
            $manager->persist($contact);
        }
        $manager->flush();
    }
}
