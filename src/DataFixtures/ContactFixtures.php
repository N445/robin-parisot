<?php

namespace App\DataFixtures;

use App\Entity\Contact;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class ContactFixtures extends Fixture
{
    public const REFERENCE = 'contact_%d';
    public const LOOP = 100;

    /**
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        foreach (range(1, self::LOOP) as $i) {
            $contact = (new Contact())
                ->setFirstname($faker->firstName())
                ->setLastname($faker->lastName())
                ->setEmail($faker->email())
                ->setMessage($faker->text(400))
                ->setSendedAt(
                    new \DateTimeImmutable($faker->dateTimeBetween('-3 years', 'now')->format(DATE_ATOM))
                );
//            $this->addReference(sprintf(self::REFERENCE, $i), $tag);
            $manager->persist($contact);
        }

        $manager->flush();
    }
}
