<?php

namespace App\Service\ContactSend;

use App\Entity\Contact;
use Doctrine\ORM\EntityManagerInterface;

class ContactDatabaseSave
{
    private EntityManagerInterface $em;

    public function __construct(
        EntityManagerInterface $em
    )
    {
        $this->em = $em;
    }

    public function save(Contact $contact): void
    {
        $this->em->persist($contact);
        $this->em->flush();
    }
}