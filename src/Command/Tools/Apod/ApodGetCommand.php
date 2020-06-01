<?php

namespace App\Command\Tools\Apod;

use App\Service\Tools\Apod\ApodProvider;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class ApodGetCommand extends Command
{
    protected static $defaultName = 'app:apod:get';

    /**
     * @var ApodProvider
     */
    private $apodProvider;

    /**
     * ApodGetCommand constructor.
     * @param string|null  $name
     * @param ApodProvider $apodProvider
     */
    public function __construct(string $name = null, ApodProvider $apodProvider)
    {
        parent::__construct($name);
        $this->apodProvider = $apodProvider;
    }

    protected function configure()
    {
        $this->setDescription('Get APOD');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->apodProvider->getApod();

        $io->success('APOD OK');

        return 0;
    }
}
