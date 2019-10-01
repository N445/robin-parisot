<?php

namespace App\Form;

use App\Entity\Actualite;
use App\Entity\Actualite\Tags;
use App\Form\Actuality\ImageType;
use App\Repository\Actualite\TagsRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ActualiteType extends AbstractType
{

    /**
     * @var TagsRepository
     */
    private $tagsRepository;

    /**
     * ActualiteType constructor.
     * @param TagsRepository $tagsRepository
     */
    public function __construct(TagsRepository $tagsRepository)
    {
        $this->tagsRepository = $tagsRepository;
    }

    /**
     * @param FormBuilderInterface $builder
     * @param array                $options
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
            ->add('title', TextType::class, [
                'label' => 'Titre',
            ])
            ->add('resume', TextareaType::class, [
                'label' => 'Résumé',
                'attr'  => [
                    'class' => 'redactor',
                ],
            ])
            ->add('content', TextareaType::class, [
                'label' => 'Contenu',
                'attr'  => [
                    'class' => 'redactor',
                ],
            ])
            ->add('is_active', CheckboxType::class, [
                'label'    => 'Activer',
                'required' => false,
            ])
            ->add('image', ImageType::class, [
                'label'    => 'Image',
                'required' => $builder->getData()->getImage()->getId() ? false : true,
            ])
            ->add('tags_select2', ChoiceType::class, [
                'label'    => 'Tags',
                'choices'  => $this->getExistingTags(),
                'attr'     => [
                    'class'                 => 'tags-select2',
                    'data-selected-choices' => json_encode(array_map(function (Tags $tags) {
                        return $tags->getName();
                    }, $builder->getData()->getTags()->toArray())),
                ],
                'multiple' => true,
                'mapped'   => false,
                'required' => false,
            ])
        ;
        $builder->get('tags_select2')->resetViewTransformers();
    }

    /**
     * @param OptionsResolver $resolver
     */
    public function configureOptions(OptionsResolver $resolver)
    {
        $resolver->setDefaults([
            'data_class' => Actualite::class,
        ]);
    }

    /**
     * @return array
     */
    public function getExistingTags()
    {
        $data = [];
        foreach ($this->tagsRepository->findAll() as $tags) {
            $data[$tags->getName()] = $tags->getName();
        }
        return $data;
    }
}
