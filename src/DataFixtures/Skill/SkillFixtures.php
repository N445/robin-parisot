<?php

namespace App\DataFixtures\Skill;

use App\Entity\Skill\Skill;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class SkillFixtures extends Fixture
{
    const NAME   = 'name';
    const PARENT = 'parent';

    public function load(ObjectManager $manager)
    {
        foreach ($this->getSkills() as $skillArray) {
            $skill = (new Skill())->setName($skillArray[self::NAME]);

            if ($parent = $skillArray[self::PARENT]) {
                $skill->addParentSkill($this->getReference($parent));
            }

            $manager->persist($skill);
            $this->addReference($skill->getName(), $skill);
        }
        // $product = new Product();
        // $manager->persist($product);

        $manager->flush();
    }


    private function getSkills()
    {
        return [
            [
                self::NAME   => 'PHP',
                self::PARENT => null,
            ],
            [
                self::NAME   => 'CSS',
                self::PARENT => null,
            ],
            [
                self::NAME   => 'Symfony',
                self::PARENT => 'PHP',
            ],
            [
                self::NAME   => 'Magento',
                self::PARENT => 'PHP',
            ],
            [
                self::NAME   => 'SCSS',
                self::PARENT => 'CSS',
            ],
        ];
    }
}
