<?php

namespace App\Service;

use App\Entity\Contact;
use App\Helper\DiscordKey;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Footer;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Service\DiscordSender;

class ContactDiscord
{
    public function send(Contact $contact)
    {
        $message = (new Message())->setUsername('Bot du site');
        $footer = (new Footer())
            ->setText(sprintf(
                "%s\n%s",
                $contact->getEmail(),
                $contact->getSendAt()->format('d/m/Y H:i:s')
            ));
        $embed = (new Embed())
            ->setTitle(sprintf(
                "Contact de %s %s",
                $contact->getFirstname(),
                $contact->getLastname()))
            ->setColor(Colors::GREEN)
            ->setDescription(sprintf(
                "**Objet : ** %s \n**Message : ** %s",
                $contact->getSubject(),
                $contact->getMessage()))
            ->setFooter($footer);
        $message->setEmbeds([$embed]);

        (new DiscordSender($_ENV["DISCORD_CONTACT_ID"], $_ENV["DISCORD_CONTACT_TOKEN"]))
            ->send($message);
        
    }
}