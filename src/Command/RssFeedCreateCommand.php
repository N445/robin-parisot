<?php

namespace App\Command;

use App\Entity\Tools\Rss\RssFeed;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class RssFeedCreateCommand extends Command
{
    protected static $defaultName = 'app:rss-feed:create';

    /**
     * @var EntityManagerInterface
     */
    private $entityManager;

    /**
     * @var ValidatorInterface
     */
    private $validator;

    /**
     * RssFeedCreateCommand constructor.
     * @param string|null            $name
     * @param EntityManagerInterface $entityManager
     * @param ValidatorInterface     $validator
     */
    public function __construct(
        string $name = null,
        EntityManagerInterface $entityManager,
        ValidatorInterface $validator
    )
    {
        parent::__construct($name);
        $this->entityManager = $entityManager;
        $this->validator     = $validator;
    }

    protected function configure()
    {
        $this
            ->setDescription('Créer un flux rss');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $helper = $this->getHelper('question');

        $question = new Question('Entrez le nom du flux : ');
        $question->setValidator(function ($answer) {
            if (null === $answer) {
                throw new \RuntimeException(
                    'Vous devez entrer un nom'
                );
            }

            return $answer;
        });
        $question->setMaxAttempts(2);
        $title = $helper->ask($input, $output, $question);

        $question = new Question('Entrez l\'url du flux : ');
        $question->setValidator(function ($answer) {
            if (null === $answer) {
                throw new \RuntimeException(
                    'Vous devez entrer une url'
                );
            }

            return $answer;
        });
        $question->setMaxAttempts(2);
        $url = $helper->ask($input, $output, $question);

        $rssFeed = (new RssFeed())
            ->setTitle($title)
            ->setUrl($url)
        ;

        $errors = $this->validator->validate($rssFeed);

        if (count($errors) > 0) {
            /*
             * Uses a __toString method on the $errors variable which is a
             * ConstraintViolationList object. This gives us a nice string
             * for debugging.
             */
            $errorsString = (string)$errors;

            throw new \RuntimeException($errorsString);
        }

        $this->entityManager->persist($rssFeed);
        $this->entityManager->flush();

        $io->success('Flux créé');

        return 0;
    }
}
