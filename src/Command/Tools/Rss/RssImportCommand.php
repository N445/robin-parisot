<?php

namespace App\Command\Tools\Rss;

use App\Service\Tools\Rss\RssImport;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class RssImportCommand extends Command
{
    protected static $defaultName = 'app:rss:import';

    /**
     * @var RssImport
     */
    private $rssImport;

    /**
     * RssRemoveNewCommand constructor.
     * @param string|null $name
     * @param RssImport   $rssImport
     */
    public function __construct(
        string $name = null,
    RssImport $rssImport
    )
    {
        parent::__construct($name);
        $this->rssImport = $rssImport;
    }

    protected function configure()
    {
        $this->setDescription('Remove rss item new');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $this->rssImport->import();
        $io->success('item ajouté');

        return 0;
    }
}
