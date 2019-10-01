<?php

namespace App\Entity\Actualite;

use App\Entity\Actualite;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass="App\Repository\Actualite\TagsRepository")
 */
class Tags
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity="App\Entity\Actualite", mappedBy="tags")
     */
    private $actualites;

    /**
     * Tags constructor.
     * @param null $name
     */
    public function __construct($name = null)
    {
        $this->name       = $name;
        $this->actualites = new ArrayCollection();
    }

    /**
     * @return null|string
     */
    public function __toString()
    {
        return $this->getName();
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return null|string
     */
    public function getName(): ?string
    {
        return $this->name;
    }

    /**
     * @param string $name
     * @return Tags
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    /**
     * @return Collection|Actualite[]
     */
    public function getActualites(): Collection
    {
        return $this->actualites;
    }

    /**
     * @param Actualite $actualite
     * @return Tags
     */
    public function addActualite(Actualite $actualite): self
    {
        if (!$this->actualites->contains($actualite)) {
            $this->actualites[] = $actualite;
            $actualite->addTag($this);
        }

        return $this;
    }

    /**
     * @param Actualite $actualite
     * @return Tags
     */
    public function removeActualite(Actualite $actualite): self
    {
        if ($this->actualites->contains($actualite)) {
            $this->actualites->removeElement($actualite);
            $actualite->removeTag($this);
        }

        return $this;
    }
}
