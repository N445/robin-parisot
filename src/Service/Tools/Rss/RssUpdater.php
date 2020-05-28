<?php

namespace App\Service\Tools\Rss;

use App\Event\RssFeedEvent;
use App\Repository\Tools\Rss\RssFeedRepository;
use App\Repository\Tools\Rss\RssItemRepository;
use Doctrine\ORM\EntityManagerInterface;
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
     * RssUpdater constructor.
     * @param EntityManagerInterface $em
     * @param RssFeedRepository      $rssFeedRepository
     * @param RssItemRepository      $rssItemRepository
     */
    public function __construct(
        EntityManagerInterface $em,
        RssFeedRepository $rssFeedRepository,
        RssItemRepository $rssItemRepository
    )
    {
        $this->em                = $em;
        $this->rssFeedRepository = $rssFeedRepository;
        $this->rssItemRepository = $rssItemRepository;
    }

    public static function getSubscribedEvents()
    {
        return [
            RssFeedEvent::RSSFEED_UPDATE => 'rssFeedUpdate',
        ];
    }

    public function rssFeedUpdate(RssFeedEvent $rssFeedEvent)
    {
        foreach ($this->rssFeedRepository->findAll() as $rssFeed) {
            $rssFeed->setNbNew(count($this->rssItemRepository->getAllNewByRssFeed($rssFeed)));
        }
        $this->em->flush();
    }
}