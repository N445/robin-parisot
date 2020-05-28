<?php

namespace App\Command;

use App\Event\RssFeedEvent;
use App\Repository\Tools\Rss\RssFeedRepository;
use App\Service\Tools\Rss\RssParser;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

class RssImportCommand extends Command
{
    protected static $defaultName = 'app:rss:import';

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var RssFeedRepository
     */
    private $rssFeedRepository;

    /**
     * @var RssParser
     */
    private $rssParser;

    /**
     * RssRemoveNewCommand constructor.
     * @param string|null              $name
     * @param RssFeedRepository        $rssFeedRepository
     * @param EntityManagerInterface   $em
     * @param RssParser                $rssParser
     */
    public function __construct(
        string $name = null,
        RssFeedRepository $rssFeedRepository,
        EntityManagerInterface $em,
        RssParser $rssParser
    )
    {
        parent::__construct($name);
        $this->rssFeedRepository = $rssFeedRepository;
        $this->em                = $em;
        $this->rssParser         = $rssParser;
    }

    protected function configure()
    {
        $this->setDescription('Remove rss item new');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $i = 0;
        foreach ($this->rssFeedRepository->findAll() as $rssFeed) {
            $i += $this->rssParser->fluxToObject($rssFeed);
        }
        $this->em->flush();
        $io->success(sprintf('%d item ajouté', $i));

        return 0;
    }
}
