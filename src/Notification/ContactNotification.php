<?php

namespace App\Notification;

use App\Entity\Contact;
use Symfony\Component\Notifier\Bridge\Discord\DiscordOptions;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordEmbed;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordFieldEmbedObject;
use Symfony\Component\Notifier\Bridge\Discord\Embeds\DiscordFooterEmbedObject;
use Symfony\Component\Notifier\Message\ChatMessage;
use Symfony\Component\Notifier\Message\EmailMessage;
use Symfony\Component\Notifier\Notification\ChatNotificationInterface;
use Symfony\Component\Notifier\Notification\EmailNotificationInterface;
use Symfony\Component\Notifier\Notification\Notification;
use Symfony\Component\Notifier\Recipient\EmailRecipientInterface;
use Symfony\Component\Notifier\Recipient\Recipient;
use Symfony\Component\Notifier\Recipient\RecipientInterface;

class ContactNotification extends Notification implements ChatNotificationInterface, EmailNotificationInterface
{

    public function __construct(
        private Contact $contact,
    )
    {
        $this->subject(
            sprintf('Nouveau contact de %s %s.',
                    $this->contact->getFirstname(),
                    $this->contact->getLastname()
            )
        );
    }

    public function asChatMessage(RecipientInterface $recipient, string $transport = null): ?ChatMessage
    {
        if('discord' !== $transport){
            return null;
        }

        $chatMessage = new ChatMessage($this->getSubject());

// Create Discord Embed
        $discordOptions = (new DiscordOptions())
            ->addEmbed((new DiscordEmbed())
                           ->title('Nouveau message de contact')
                           ->addField((new DiscordFieldEmbedObject())
                                          ->name('Email')
                                          ->value($this->contact->getEmail()),
                           )
                           ->addField((new DiscordFieldEmbedObject())
                                          ->name('Message')
                                          ->value($this->contact->getMessage()),
                           )
                           ->footer((new DiscordFooterEmbedObject())
                                        ->text('Envoyé le : ' . $this->contact->getSendedAt()->format('d/m/Y H:i:s')),
                           ),
            )
        ;

        // Add the custom options to the chat message and send the message
        $chatMessage->options($discordOptions);

        return $chatMessage;
    }

    public function asEmailMessage(EmailRecipientInterface $recipient, string $transport = null): ?EmailMessage
    {
        $content = <<<END
      Nouveau message de contact
      Prénom NOM : {$this->contact->getFirstname()} {$this->contact->getFirstname()}
      Email : {$this->contact->getEmail()}
      Message : {$this->contact->getMessage()}
\n
END;

        $this->subject($this->getSubject());
        $this->content($content);

        return EmailMessage::fromNotification($this, $recipient);
    }

    public function getChannels(RecipientInterface $recipient): array
    {
        return ['email', 'chat/discord'];
    }
}