<?php
/**
 * Created by PhpStorm.
 * User: Robin
 * Date: 29/09/2019
 * Time: 20:53
 */

namespace App\Service;

use App\Entity\Actualite;
use App\Entity\Actualite\Tags;
use App\Repository\Actualite\TagsRepository;

class TagsPopulator
{

    private $existingTags;

    private $tagsEntities = [];

    public function __construct(TagsRepository $tagsRepository)
    {
        $this->existingTags = $tagsRepository->getTagsNames();
    }

    /**
     * @param Actualite $actualite
     * @param Tags[]    $tags
     */
    public function populate(Actualite &$actualite, $tags)
    {
        $this->setTagsEntity($tags);
        foreach ($actualite->getTags() as $tag) {
            $actualite->;
        }
        foreach ($this->tagsEntities as $tag) {
            $actualite->addTag($tag);
        }
    }

    private function setTagsEntity($tags)
    {
        foreach ($tags as $tag) {
            $this->tagsEntities[] = (int)$tag > 0 ? $this->existingTags[(int)$tag] : $this->createTagEntity($tag);
        }
    }

    private function createTagEntity($tagName)
    {
        return new Tags($tagName);
    }
}