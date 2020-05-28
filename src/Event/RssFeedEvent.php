<?php

namespace App\Event;

use Symfony\Contracts\EventDispatcher\Event;

class RssFeedEvent extends Event
{
    const RSSFEED_IMPORT  = 'rssfeed.import';
    const RSSFEEDS_UPDATE = 'rssfeeds.update';
}