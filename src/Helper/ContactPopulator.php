<?php

namespace App\Helper;

use App\Entity\Contact;

class ContactPopulator
{
    public static function populate($data)
    {
        $contact = new Contact();
        $contact->setFirstname($data['firstname'])
                ->setLastname($data['lastname'])
                ->setEmail($data['email'])
                ->setSubject($data['subject'])
                ->setMessage($data['message'])
        ;
        return $contact;
    }
}