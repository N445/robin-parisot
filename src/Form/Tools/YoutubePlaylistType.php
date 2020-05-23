<?php

namespace App\Form\Tools;

use App\Entity\Tools\YoutubePlaylist;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class YoutubePlaylistType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('identifier')
//            ->add('name')
//            ->add('channel')
//            ->add('created_at')
//            ->add('imported_at')
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => YoutubePlaylist::class,
        ]);
    }
}
