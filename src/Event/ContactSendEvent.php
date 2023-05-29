<?php

namespace App\Event;

use App\Entity\Contact;
use Symfony\Contracts\EventDispatcher\Event;

class ContactSendEvent extends Event
{
    public const NAME = 'contact.send';

    public function __construct(
        protected Contact $contact
    )
    {
    }

    public function getContact(): Contact
    {
        return $this->contact;
    }
}