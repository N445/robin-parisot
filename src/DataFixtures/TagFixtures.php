<?php

namespace App\DataFixtures;

use App\Entity\Tag;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;

class TagFixtures extends Fixture
{
    public const REFERENCE = 'tag_%d';
    public const LOOP = 15;

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create('fr_FR');
        foreach (range(1, self::LOOP) as $i) {
            $tag = (new Tag())
                ->setName($faker->text(20))
                ->setColor($faker->hexColor());
            $this->addReference(sprintf(self::REFERENCE, $i), $tag);
            $manager->persist($tag);
        }

        $manager->flush();
    }
}
