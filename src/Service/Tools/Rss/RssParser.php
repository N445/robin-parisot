<?php

namespace App\Service\Tools\Rss;

use App\Entity\Tools\Rss\RssFeed;
use App\Entity\Tools\Rss\RssItem;
use App\Repository\Tools\Rss\RssItemRepository;
use DOMDocument;
use DOMNode;

class RssParser
{
    /**
     *
     * @var DOMDocument
     */
    protected $doc;

    /**
     *
     * @var int
     */
    protected $items = 0;

    /**
     * @var RssFeed
     */
    private $rssFeed;

    /**
     * @var array
     */
    private $rssItemRepository;

    /**
     * RssParser constructor.
     * @param RssItemRepository $rssItemRepository
     */
    public function __construct(
        RssItemRepository $rssItemRepository
    )
    {
        $this->doc   = new DOMDocument();
        $this->guids = $rssItemRepository->getGuids();
    }

    public function fluxToObject(RssFeed &$rssFeed)
    {
        $this->rssFeed = $rssFeed;
        $this->load($this->rssFeed->getUrl());
        $this->setItems();
        return $this->items;
    }

    /**
     *
     * @param string $url
     * @return Rss_Parser
     */
    public function load($url)
    {
        $this->doc->load($url);
        return $this;
    }

    public function setItems()
    {
        $channel = $this->doc->getElementsByTagName('channel')->item(0);

        foreach ($channel->getElementsByTagName("item") as $domItem) {
            $this->setItem($domItem);
        }
    }


    /**
     * Parses an item
     * @param DOMNode $item
     * @return Rss_Item
     */
    protected function setItem(DOMNode $item)
    {
        $guid = md5($this->rssFeed->getTitle() . $item->getElementsByTagName("guid")->item(0)->firstChild->data);

        if (in_array($guid, $this->guids)) {
            return;
        }

        $title       = $item->getElementsByTagName("title")->item(0)->firstChild->data;
        $description = $item->getElementsByTagName("description")->item(0)->firstChild->data;
        $link        = $item->getElementsByTagName("link")->item(0)->firstChild->data;
        $pubdate     = \DateTime::createFromFormat(\DateTimeInterface::RFC1123, $item->getElementsByTagName("pubDate")->item(0)->firstChild->data);

        $rssItem = (new RssItem())
            ->setTitle($title)
            ->setDescription($description)
            ->setLink($link)
            ->setPubdate($pubdate)
            ->setGuid($guid)
        ;

        $this->rssFeed->addRssItem($rssItem);
        $this->items++;
    }
}