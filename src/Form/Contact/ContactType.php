<?php

namespace App\Form\Contact;

use App\Entity\Contact\Contact;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('firstname', TextType::class, [
                'label'    => 'Prénom',
                'required' => false,
                'attr'     => [
                    'placeholder' => 'John',
                ],
            ])
            ->add('lastname', TextType::class, [
                'label'    => 'Nom',
                'required' => false,
                'attr'     => [
                    'placeholder' => 'DOE',
                ],
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email',
                'attr'  => [
                    'placeholder' => 'john.doe@gmail.com',
                ],
            ])
            ->add('subject', TextType::class, [
                'label' => 'Objet',
                'attr'  => [
                    'placeholder' => 'Projet de site web',
                ],
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Message',
                'attr'  => [
                    'placeholder' => 'Bonjour, ...',
                ],
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
        ]);
    }
}
