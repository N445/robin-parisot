<?php

namespace App\Form;

use App\Entity\Actualite;
use App\Entity\Actualite\Tags;
use App\Form\Actuality\ImageType;
use App\Repository\Actualite\TagsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActualiteType extends AbstractType
{

    /**
     * @var TagsRepository
     */
    private $tagsRepository;

    public function __construct(TagsRepository $tagsRepository)
    {
        $this->tagsRepository = $tagsRepository;
    }

    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        dump($this->getExistingTags());
        $builder
            ->add('title')
            ->add('resume')
            ->add('content')
            ->add('is_active')
            ->add('image', ImageType::class)
            ->add('tags_select2', ChoiceType::class, [
                'choices'      => $this->getExistingTags(),
                'attr'         => [
                    'class' => 'tags-select2',
                ],
                'mapped'       => false,
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Actualite::class,
        ]);
    }

    public function getExistingTags()
    {
        return array_flip(array_map(function (Tags $tags) {
            return $tags->getName();
        }, $this->tagsRepository->findAll()));
    }
}
