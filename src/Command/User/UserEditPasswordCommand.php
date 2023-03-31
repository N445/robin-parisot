<?php

namespace App\Command\User;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Question\ConfirmationQuestion;
use Symfony\Component\Console\Question\Question;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;

#[AsCommand(
    name: 'app:user:edit-password',
    description: 'Permet de modifier le mot de passe d\'un user',
)]
class UserEditPasswordCommand extends Command
{
    public function __construct(
        private readonly UserPasswordHasherInterface $userPasswordHasher,
        private readonly UserRepository              $userRepository
    )
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $helper = $this->getHelper('question');
        $question = new ConfirmationQuestion('Créer un admin ? (Y/n)', true);

        $isAdmin = $helper->ask($input, $output, $question);


        $question = new Question('Entrer son email : ');
        $email = $helper->ask($input, $output, $question);

        if (!$user = $this->userRepository->findByIdentifier($email)) {
            $io->error('Utilisateur non trouvé');
            return Command::FAILURE;
        }

        $question = new Question('Entrer son mot de passe : ');
        $question->setHidden(true);
        $question->setHiddenFallback(false);
        $password = $helper->ask($input, $output, $question);

        $user->setPassword($password);

        dump($user);

        $question = new ConfirmationQuestion('Confirmer la création ? (Y/n)', true);

        if ($helper->ask($input, $output, $question)) {
            $user->setPassword($this->userPasswordHasher->hashPassword($user, $user->getPassword()));
            $this->userRepository->save($user, true);
            $io->success('Utilisateur modifié avec succès');
            return Command::SUCCESS;

        }

        $io->error('La création a été annulé');
        return Command::FAILURE;
    }
}
