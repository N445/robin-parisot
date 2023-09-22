<?php

namespace App\Twig\Components;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notification\ContactNotification;
use App\Service\ContactSend\ContactDatabaseSave;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Notifier\NotifierInterface;
use Symfony\Component\Notifier\Recipient\Recipient;
use Symfony\Contracts\EventDispatcher\EventDispatcherInterface;
use Symfony\UX\LiveComponent\Attribute\AsLiveComponent;
use Symfony\UX\LiveComponent\Attribute\LiveAction;
use Symfony\UX\LiveComponent\Attribute\LiveProp;
use Symfony\UX\LiveComponent\ComponentWithFormTrait;
use Symfony\UX\LiveComponent\DefaultActionTrait;

#[AsLiveComponent('contact')]
final class ContactComponent extends AbstractController
{
    use DefaultActionTrait;
    use ComponentWithFormTrait;

    #[LiveProp]
    public bool $isSuccessful = false;

    #[LiveProp]
    public string $site_key;

    #[LiveProp(fieldName: 'data')]
    public Contact $initialFormData;

    public function __construct(
        private readonly EventDispatcherInterface $eventDispatcher,
        private readonly ContactDatabaseSave      $contactDatabaseSave,
        private readonly NotifierInterface        $notifier,
    )
    {
        $this->site_key = $_ENV['RECAPTCHA3_KEY'];
    }

    protected function instantiateForm(): FormInterface
    {
        // we can extend AbstractController to get the normal shortcuts
        return $this->createForm(ContactType::class, $this->initialFormData);
    }


    #[LiveAction]
    public function save(): void
    {
        $this->submitForm();

        /** @var Contact $contact */
        $contact = $this->getForm()->getData();

        $this->contactDatabaseSave->save($contact);


        $notification = (new ContactNotification($contact));

        // The receiver of the Notification
        $recipient = new Recipient(
            'contact@robin-parisot.fr',
        );

        // Send the notification to the recipient
        $this->notifier->send($notification, $recipient);

        $this->isSuccessful = true;
    }
}
