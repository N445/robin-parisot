<?php

namespace App\Entity\Actualite;

use App\Model\File\FileEntityInterface;
use App\Model\File\ImageCompressed;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Actualite\ImageRepository")
 * @ORM\HasLifecycleCallbacks()
 */
class Image extends ImageCompressed implements FileEntityInterface
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUploadDir()
    {
        return 'uploads/actualites';
    }
}
