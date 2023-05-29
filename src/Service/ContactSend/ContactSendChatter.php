<?php

namespace App\Service\ContactSend;

use App\Entity\Contact;
use Symfony\Component\Notifier\Bridge\Discord\DiscordOptions;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordEmbed;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordFieldEmbedObject;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordFooterEmbedObject;
use Symfony\Component\Notifier\ChatterInterface;
use Symfony\Component\Notifier\Message\ChatMessage;

class ContactSendChatter
{
    public function __construct(
        private readonly ChatterInterface $chatter
    )
    {
    }

    public function send(Contact $contact)
    {
        $chatMessage = new ChatMessage('');

// Create Discord Embed
        $discordOptions = (new DiscordOptions())
            ->addEmbed((new DiscordEmbed())
                ->title('Nouveau message de contact')
                ->addField((new DiscordFieldEmbedObject())
                    ->name('Email')
                    ->value($contact->getEmail())
                )
                ->addField((new DiscordFieldEmbedObject())
                    ->name('Message')
                    ->value($contact->getMessage())
                )
                ->footer((new DiscordFooterEmbedObject())
                    ->text('Envoyé le : ' . $contact->getSendedAt()->format('d/m/Y H:i:s'))
                )
            );

// Add the custom options to the chat message and send the message
        $chatMessage->options($discordOptions);

        $this->chatter->send($chatMessage);
    }
}