<?php

namespace App\Provider;

use App\Entity\Tools\Rss\RssFeed;
use App\Entity\Tools\Rss\RssItem;
use App\Repository\Tools\Rss\RssFeedRepository;
use App\Repository\Tools\Rss\RssItemRepository;
use Psr\Cache\InvalidArgumentException;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\HttpKernel\KernelInterface;
use Symfony\Contracts\Cache\ItemInterface;

class RssProvider
{
    const RSS_FEEDS = 'rssFeeds2';
    const RSS_ITEMS = 'rssItems2';

    /**
     * @var RssFeedRepository
     */
    private $rssFeedRepository;

    /**
     * @var RssItemRepository
     */
    private $rssItemRepository;

    /**
     * @var FilesystemAdapter
     */
    private $cache;

    /**
     * @var KernelInterface
     */
    private $kernel;

    /**
     * RssProvider constructor.
     * @param RssFeedRepository $rssFeedRepository
     * @param RssItemRepository $rssItemRepository
     * @param KernelInterface   $kernel
     */
    public function __construct(
        RssFeedRepository $rssFeedRepository,
        RssItemRepository $rssItemRepository,
        KernelInterface $kernel
    )
    {
        $this->rssFeedRepository = $rssFeedRepository;
        $this->rssItemRepository = $rssItemRepository;
        $this->cache             = new FilesystemAdapter();
        $this->kernel            = $kernel;
    }

    /**
     * @return RssFeed[]
     * @throws InvalidArgumentException
     */
    public function getHomeRssFeeds()
    {
        return $this->rssFeedRepository->getHome();
        /*if ($this->kernel->isDebug()) {
            return $this->rssFeedRepository->getHome();
        }
        return $this->cache->get(self::RSS_FEEDS, function (ItemInterface $item) {
            $item->expiresAfter(3600);
            return $this->rssFeedRepository->getHome();
        });*/
    }

    /**
     * @return RssItem[]
     * @throws InvalidArgumentException
     */
    public function getHomeRssItems()
    {
        return $this->rssItemRepository->getHome();
        /*if ($this->kernel->isDebug()) {
            return $this->rssItemRepository->getHome();
        }
        return $this->cache->get(self::RSS_ITEMS, function (ItemInterface $item) {
            $item->expiresAfter(3600);
            return $this->rssItemRepository->getHome();
        });*/
    }
}