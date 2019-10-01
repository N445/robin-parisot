<?php

namespace App\DataFixtures\Actualite;

use App\Entity\Actualite\Tags;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;

class TagsFixture extends Fixture
{
    const LOOP = 20;
    const REF  = 'tag_%s';

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr');
        for ($i = 0; $i < self::LOOP; $i++) {
            $tag = new Tags($faker->realText(20));
            $this->addReference(sprintf(self::REF, $i), $tag);
            $manager->persist($tag);
        }

        $manager->flush();
    }
}
