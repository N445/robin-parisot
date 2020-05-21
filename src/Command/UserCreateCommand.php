<?php

namespace App\Command;

use App\Entity\User;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class UserCreateCommand extends Command
{
    protected static $defaultName = 'app:user:create';

    /**
     * @var UserPasswordEncoderInterface
     */
    private $passwordEncoder;

    /**
     * @var EntityManagerInterface
     */
    private $em;


    public function __construct($name = null, UserPasswordEncoderInterface $passwordEncoder, EntityManagerInterface $em)
    {
        $this->passwordEncoder = $passwordEncoder;
        $this->em              = $em;
        parent::__construct($name);
    }

    protected function configure()
    {
        $this
            ->setDescription('Créer le user');
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $io = new SymfonyStyle($input, $output);

        $user = new User();
        $user->setUsername('robin')
             ->setRoles(['ROLE_ADMIN'])
             ->setPassword($this->passwordEncoder->encodePassword($user, 'robin'))
        ;

        $this->em->persist($user);
        $this->em->flush();

        $io->success('Le user Robin est crée');
    }
}
