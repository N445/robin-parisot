<?php

namespace App\EventSubscriber;

use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class VichSubscriber implements EventSubscriberInterface
{
    public function onVichUploaderPreUpload($event): void
    {
     dump($event);
     die;
    }

    public static function getSubscribedEvents(): array
    {
        return [
            'vich_uploader.pre_upload' => 'onVichUploaderPreUpload',
        ];
    }
}
