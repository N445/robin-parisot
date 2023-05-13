<?php

namespace App\Entity;

use App\Repository\TagRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: TagRepository::class)]
class Tag
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $name = null;

    #[ORM\Column(length: 255)]
    private ?string $color = null;

    #[ORM\OneToMany(mappedBy: 'main_tag', targetEntity: Actuality::class)]
    private Collection $main_actualities;

    #[ORM\ManyToMany(targetEntity: Actuality::class, mappedBy: 'sub_tags')]
    private Collection $sub_actualities;

    public function __construct()
    {
        $this->main_actualities = new ArrayCollection();
        $this->sub_actualities = new ArrayCollection();
        $this->color = '#' . str_pad(dechex(mt_rand(0, 0xFFFFFF)), 6, '0', STR_PAD_LEFT);
    }

    public function __toString(): string
    {
        return $this->getName();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

    public function getColor(): ?string
    {
        return $this->color;
    }

    public function setColor(string $color): self
    {
        $this->color = $color;

        return $this;
    }

    /**
     * @return Collection<int, Actuality>
     */
    public function getMainActualities(): Collection
    {
        return $this->main_actualities;
    }

    public function addMainActuality(Actuality $mainActuality): self
    {
        if (!$this->main_actualities->contains($mainActuality)) {
            $this->main_actualities->add($mainActuality);
            $mainActuality->setMainTag($this);
        }

        return $this;
    }

    public function removeMainActuality(Actuality $mainActuality): self
    {
        if ($this->main_actualities->removeElement($mainActuality)) {
            // set the owning side to null (unless already changed)
            if ($mainActuality->getMainTag() === $this) {
                $mainActuality->setMainTag(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection<int, Actuality>
     */
    public function getSubActualities(): Collection
    {
        return $this->sub_actualities;
    }

    public function addSubActuality(Actuality $subActuality): self
    {
        if (!$this->sub_actualities->contains($subActuality)) {
            $this->sub_actualities->add($subActuality);
            $subActuality->addSubTag($this);
        }

        return $this;
    }

    public function removeSubActuality(Actuality $subActuality): self
    {
        if ($this->sub_actualities->removeElement($subActuality)) {
            $subActuality->removeSubTag($this);
        }

        return $this;
    }
}
