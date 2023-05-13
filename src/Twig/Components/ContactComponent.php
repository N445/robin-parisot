<?php

namespace App\Twig\Components;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Repository\ContactRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Form\FormInterface;
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
    public Contact $contact;

    public function __construct(
        private readonly ContactRepository $contactRepository
    )
    {
        $this->site_key = $_ENV['RECAPTCHA3_KEY'];
    }

    protected function instantiateForm(): FormInterface
    {
        return $this->createForm(ContactType::class, $this->contact);
    }


    #[LiveAction]
    public function save(): void
    {
        $this->submitForm();

        $form = $this->getFormInstance();

        /** @var Contact $contact */
        $contact = $form->getData();
        $this->contactRepository->save($contact, true);
        $this->isSuccessful = true;
    }
}
