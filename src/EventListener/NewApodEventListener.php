<?php

namespace App\EventListener;

use App\Event\ApodEvent;
use App\Service\Tools\Apod\ApodDiscord;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class NewApodEventListener implements EventSubscriberInterface
{
    /**
     * @var ApodDiscord
     */
    private $apodDiscord;

    /**
     * NewApodEventListener constructor.
     * @param ApodDiscord $apodDiscord
     */
    public function __construct(ApodDiscord $apodDiscord)
    {
        $this->apodDiscord = $apodDiscord;
    }

    public static function getSubscribedEvents()
    {
        return [
            ApodEvent::APOD_NEW => 'sendDiscord',
        ];
    }

    public function sendDiscord(ApodEvent $apodEvent)
    {
        $this->apodDiscord->sendDiscord($apodEvent->getApod());
    }
}