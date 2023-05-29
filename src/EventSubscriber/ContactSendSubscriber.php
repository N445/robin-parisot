<?php

namespace App\EventSubscriber;

use App\Event\ContactSendEvent;
use App\Service\ContactSend\ContactDatabaseSave;
use App\Service\ContactSend\ContactSendChatter;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ContactSendSubscriber implements EventSubscriberInterface
{
    private ContactDatabaseSave $contactDatabaseSave;
    private ContactSendChatter $contactSendChatter;

    public function __construct(
        ContactDatabaseSave $contactDatabaseSave,
        ContactSendChatter  $contactSendChatter
    )
    {
        $this->contactDatabaseSave = $contactDatabaseSave;
        $this->contactSendChatter = $contactSendChatter;
    }

    public function onContactSend(ContactSendEvent $event): void
    {
        $contact = $event->getContact();
        $this->contactDatabaseSave->save($contact);
        $this->contactSendChatter->send($contact);
    }

    public static function getSubscribedEvents(): array
    {
        return [
            ContactSendEvent::NAME => 'onContactSend',
        ];
    }
}
