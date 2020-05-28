<?php

namespace App\Event;

use Symfony\Contracts\EventDispatcher\Event;

class RssFeedEvent extends Event
{
    const RSSFEED_UPDATE = 'rssfeed.update';
}