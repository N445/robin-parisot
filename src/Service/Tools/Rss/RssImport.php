<?php

namespace App\Service\Tools\Rss;

use App\Event\RssFeedEvent;
use App\Repository\Tools\Rss\RssFeedRepository;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;

class RssImport
{
    /**
     * @var RssFeedRepository
     */
    private $rssFeedRepository;

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var RssParser
     */
    private $rssParser;

    /**
     * @var EventDispatcherInterface
     */
    private $dispatcher;

    /**
     * RssImport constructor.
     * @param RssFeedRepository      $rssFeedRepository
     * @param EntityManagerInterface $em
     * @param RssParser              $rssParser
     * @param EventDispatcherInterface        $dispatcher
     */
    public function __construct(
        RssFeedRepository $rssFeedRepository,
        EntityManagerInterface $em,
        RssParser $rssParser,
        EventDispatcherInterface $dispatcher
    )
    {
        $this->rssFeedRepository = $rssFeedRepository;
        $this->em                = $em;
        $this->rssParser         = $rssParser;
        $this->dispatcher        = $dispatcher;
    }

    public function import()
    {
        foreach ($this->rssFeedRepository->findAll() as $rssFeed) {
            $this->rssParser->fluxToObject($rssFeed);
        }
        $this->em->flush();
        $this->dispatcher->dispatch(new RssFeedEvent(), RssFeedEvent::RSSFEED_IMPORT);
    }
}