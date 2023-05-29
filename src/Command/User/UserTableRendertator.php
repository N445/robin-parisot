<?php

namespace App\Command\User;

use App\Entity\User;
use Symfony\Component\Console\Helper\Table;
use Symfony\Component\Console\Output\OutputInterface;

abstract class UserTableRendertator
{
    public static function render(OutputInterface $output, User $user): void
    {
        $table = new Table($output);
        $table
            ->setHeaders(['Email', 'Mot de passe', 'Roles'])
            ->setRows([
                [
                    $user->getEmail(),
                    $user->getPassword(),
                    implode(', ', $user->getRoles()),
                ],
            ]);
        $table->render();
    }
}