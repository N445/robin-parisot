<?php

namespace App\Service;

use App\Entity\Contact;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Footer;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Service\DiscordSender;

class ContactDiscord
{
    const ID = '713064446855217154';
    const TOKEN = 'lxtBE-mVlz9AWiiAk-fFI0RmDYi5Q3qXr3MooSy_BKKZvymmVSyuadUNNI5GNXysesTX';
    
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
        
        (new DiscordSender())->init(self::ID, self::TOKEN)
            ->send($message);
        
    }
}