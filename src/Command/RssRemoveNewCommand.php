<?php

namespace App\Command;

use App\Entity\Tools\Rss\RssItem;
use App\Event\RssFeedEvent;
use App\Repository\Tools\Rss\RssItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class RssRemoveNewCommand extends Command
{
    protected static $defaultName = 'app:rss:remove-new';

    /**
     * @var RssItemRepository
     */
    private $rssItemRepository;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;

    /**
     * RssRemoveNewCommand constructor.
     * @param string|null              $name
     * @param RssItemRepository        $rssItemRepository
     * @param EntityManagerInterface   $em
     * @param EventDispatcherInterface $dispatcher
     */
    public function __construct(
        string $name = null,
        RssItemRepository $rssItemRepository,
        EntityManagerInterface $em,
        EventDispatcherInterface $dispatcher
    )
    {
        parent::__construct($name);
        $this->rssItemRepository = $rssItemRepository;
        $this->em                = $em;
        $this->dispatcher        = $dispatcher;
    }

    protected function configure()
    {
        $this->setDescription('Remove rss item new');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $limitDate = (new \DateTime("NOW"))->sub(new \DateInterval(sprintf('P%dD', RssItem::LIMIT_DAY_NEW)));
        $i         = 0;
        foreach ($this->rssItemRepository->getAllNew() as &$rssItem) {
            if (!$limitDate->diff($rssItem->getPubdate())->invert) {
                continue;
            }
            $i++;
            $rssItem->setNew(false);
        }
        $this->em->flush();
        $this->dispatcher->dispatch(new RssFeedEvent(), RssFeedEvent::RSSFEED_UPDATE);
        $io->success(sprintf('%d item modifié', $i));

        return 0;
    }
}
