<?php

namespace App\Service\Tools\Apod;

use App\Event\ApodEvent;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ApodFlush implements EventSubscriberInterface
{

    /**
     * @var EntityManagerInterface
     */
    private $em;

    /**
     * @var ApodHelper
     */
    private $apodHelper;

    /**
     * ApodFlush constructor.
     * @param EntityManagerInterface $em
     * @param ApodHelper             $apodHelper
     */
    public function __construct(
        EntityManagerInterface $em,
        ApodHelper $apodHelper
    )
    {
        $this->em         = $em;
        $this->apodHelper = $apodHelper;
    }

    public static function getSubscribedEvents()
    {
        return [
            ApodEvent::APOD_NEW => 'flush',
        ];
    }

    public function flush(ApodEvent $apodEvent)
    {
//        $this->em->persist($apodEvent->getApod());
//        $this->em->flush();
    }
}