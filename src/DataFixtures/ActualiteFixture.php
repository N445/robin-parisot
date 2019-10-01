<?php

namespace App\DataFixtures;

use App\DataFixtures\Actualite\TagsFixture;
use App\Entity\Actualite;
use App\Entity\Actualite\Image;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Common\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ActualiteFixture extends Fixture implements DependentFixtureInterface
{
    const LOOP = 20;

    public function load(ObjectManager $manager)
    {
        $faker = Factory::create('fr');
        for ($i = 0; $i < self::LOOP; $i++) {
            $actualite = new Actualite();
            $actualite->setTitle($faker->realText(60))
                      ->setResume($faker->realText(200))
                      ->setContent($faker->realText(600))
                      ->setIsActive($faker->boolean(70))
                      ->setCreatedAt($faker->dateTimeBetween('-30 days', 'now'))
            ;
            $this->addImage($actualite, $i);
            for ($k = 0; $k < rand(1, 6); $k++) {
                $actualite->addTag($this->getReference(sprintf(TagsFixture::REF, rand(0, TagsFixture::LOOP - 1))));
            }
            $manager->persist($actualite);
        }

        $manager->flush();
    }

    private function addImage(Actualite &$actualite, $i)
    {
        $fs = new Filesystem();

        $srcImage  = __DIR__ . "/img/unsplash.jpg";
        $destImage = sprintf(__DIR__ . '/img/copy-%s.jpg', $i);

        file_put_contents($srcImage, file_get_contents("https://source.unsplash.com/random/1920x1080"));
        $fs->copy($srcImage, $destImage);

        $uploadedFile = new UploadedFile($destImage, sprintf(__DIR__ . 'copy-%s.jpg', $i), $mimeType = null, $error = null, $test = true);
        $image        = new Image();
        $image->setFile($uploadedFile);
        $actualite->setImage($image);
    }

    /**
     * This method must return an array of fixtures classes
     * on which the implementing class depends on
     *
     * @return array
     */
    public function getDependencies()
    {
        return [
            TagsFixture::class,
        ];
    }
}
