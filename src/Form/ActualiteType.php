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
        $builder
            ->add('title')
            ->add('resume')
            ->add('content')
            ->add('is_active')
            ->add('image', ImageType::class)
            ->add('tags', EntityType::class, [
                'class'        => Tags::class,
                'choice_label' => 'name',
//                'choices'      => $this->getExistingTags(),
                'attr'         => [
                    'class' => 'tags-select2',
                ],
                'multiple'     => true,
                'required'     => false,
            ])
//            ->add('tags_select2', ChoiceType::class, [
//                'choices'  => $this->getExistingTags(),
//                'attr'     => [
//                    'class' => 'tags-select2',
//                ],
//                'multiple' => true,
//                'mapped'   => false,
//                'required' => false,
//            ])
        ;
        $builder->get('tags')->resetViewTransformers();
//        $builder->get('tags_select2')->resetViewTransformers();
    }

    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Actualite::class,
        ]);
    }

    public function getExistingTags()
    {
        $data = [];
        foreach ($this->tagsRepository->findAll() as $tags) {
            $data[$tags->getName()] = $tags->getName();
        }
        return $data;
    }
}
