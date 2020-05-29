<?php

namespace App\Form\Tools;

use App\Model\Tools\YoutubeToDeezer\YoutubePlaylist;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class YoutubePlaylistType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('identifier', TextType::class, [
                'label' => 'Id de la playlist',
            ])
            ->add('name', TextType::class, [
                'label' => 'Nom de la playlist',
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => YoutubePlaylist::class,
        ]);
    }
}
