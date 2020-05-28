<?php

namespace App\Service\Tools\Rss;

use App\Entity\Tools\Rss\RssItem;
use App\Event\RssFeedEvent;
use App\Repository\Tools\Rss\RssFeedRepository;
use App\Repository\Tools\Rss\RssItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class RssUpdater implements EventSubscriberInterface
{

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var RssFeedRepository
     */
    private $rssFeedRepository;

    /**
     * @var RssItemRepository
     */
    private $rssItemRepository;

    /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;


    /**
     * RssUpdater constructor.
     * @param EntityManagerInterface $em
     * @param RssFeedRepository      $rssFeedRepository
     * @param RssItemRepository      $rssItemRepository
     * @param EventDispatcherInterface        $dispatcher
     */
    public function __construct(
        EntityManagerInterface $em,
        RssFeedRepository $rssFeedRepository,
        RssItemRepository $rssItemRepository,
        EventDispatcherInterface $dispatcher
    )
    {
        $this->em                = $em;
        $this->rssFeedRepository = $rssFeedRepository;
        $this->rssItemRepository = $rssItemRepository;
        $this->dispatcher        = $dispatcher;
    }

    public static function getSubscribedEvents()
    {
        return [
            RssFeedEvent::RSSFEED_IMPORT  => 'rssItemRemoveNew',
            RssFeedEvent::RSSFEEDS_UPDATE => 'rssFeedUpdate',
        ];
    }

    public function rssItemRemoveNew(RssFeedEvent $rssFeedEvent)
    {
        $limitDate = (new \DateTime("NOW"))->sub(new \DateInterval(sprintf('P%dD', RssItem::LIMIT_DAY_NEW)));
        foreach ($this->rssItemRepository->getAllNew() as &$rssItem) {
            if (!$limitDate->diff($rssItem->getPubdate())->invert) {
                continue;
            }
            $rssItem->setNew(false);
        }
        $this->em->flush();
        $this->dispatcher->dispatch(new RssFeedEvent(), RssFeedEvent::RSSFEEDS_UPDATE);
    }

    public function rssFeedUpdate(RssFeedEvent $rssFeedEvent)
    {
        foreach ($this->rssFeedRepository->findAll() as $rssFeed) {
            $rssFeed->setNbNew(count($this->rssItemRepository->getAllNewByRssFeed($rssFeed)));
        }
        $this->em->flush();
    }
}