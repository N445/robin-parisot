<?php

namespace App\DataFixtures;

use App\Entity\Actuality;
use App\Service\Actuality\TypeEnum;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\DataFixtures\DependentFixtureInterface;
use Doctrine\Persistence\ObjectManager;
use Faker\Factory;
use Symfony\Component\Filesystem\Filesystem;
use Symfony\Component\Finder\Finder;
use Symfony\Component\Finder\SplFileInfo;
use Symfony\Component\HttpFoundation\File\UploadedFile;

class ActualityFixtures extends Fixture implements DependentFixtureInterface
{
    public const REFERENCE = 'contact_%d';
    public const LOOP = 15;
    private Filesystem $filesystem;
    private Finder $finder;
    private \Faker\Generator $faker;

    /**
     * @throws \Exception
     */
    public function load(ObjectManager $manager): void
    {
        $this->faker = Factory::create('fr_FR');
        $this->filesystem = new Filesystem();
        $this->finder = new Finder();

        foreach (range(1, self::LOOP) as $i) {


            $randomImage = $this->getRandomImage();

            $mainTag = $this->getReference(sprintf(TagFixtures::REFERENCE, rand(1, TagFixtures::LOOP)));

            $actuality = (new Actuality())
                ->setTitle($this->faker->realText(40))
                ->setResume($this->faker->realText(150))
                ->setContent($this->faker->realText(2000))
                ->setCreatedAt(
                    new \DateTimeImmutable($this->faker->dateTimeBetween('-3 years', 'now')->format(DATE_ATOM))
                )
                ->setEditedAt(
                    new \DateTimeImmutable($this->faker->dateTimeBetween('-3 years', 'now')->format(DATE_ATOM))
                )
                ->setIsEdited($this->faker->boolean())
                ->setType($this->faker->randomElement(TypeEnum::cases())->name)
                ->setMainTag($mainTag)
                ->setImageFile($randomImage);
            $manager->persist($actuality);
        }

        $manager->flush();
    }

    private function getRandomImage(): UploadedFile
    {
        $fakeImagesDir = __DIR__ . '/images/';
        $fakeImagesDirCopy = __DIR__ . '/copy/';
        $files = iterator_to_array($this->finder->in($fakeImagesDir)->name(['*.jpg']));
        /** @var SplFileInfo $file */
        $file = $this->faker->randomElement($files);
        $fileCopy = $fakeImagesDirCopy . uniqid() . '-' . $file->getFilename();
        $this->filesystem->copy($file, $fileCopy);

        return new UploadedFile($fileCopy, $file->getFilename(), test: true);
    }

    public function getDependencies()
    {
        return [
            TagFixtures::class
        ];
    }
}
