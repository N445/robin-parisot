<?php

namespace App\Entity\Skill;

use App\Repository\Skill\SkillRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=SkillRepository::class)
 * @UniqueEntity("name")
 */
class Skill
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\ManyToMany(targetEntity=Skill::class, inversedBy="childrenSkills")
     */
    private $parentsSkills;

    /**
     * @ORM\ManyToMany(targetEntity=Skill::class, mappedBy="parentsSkills")
     */
    private $childrenSkills;

    public function __construct()
    {
        $this->parentsSkills  = new ArrayCollection();
        $this->childrenSkills = new ArrayCollection();
    }

    public function __toString()
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

    /**
     * @return Collection|self[]
     */
    public function getParentsSkills(): Collection
    {
        return $this->parentsSkills;
    }

    public function addParentSkill(self $parentSkill): self
    {
        if (!$this->parentsSkills->contains($parentSkill)) {
            $this->parentsSkills[] = $parentSkill;
        }

        return $this;
    }

    public function removeParentSkill(self $parentSkill): self
    {
        $this->parentsSkills->removeElement($parentSkill);

        return $this;
    }

    /**
     * @return Collection|self[]
     */
    public function getChildrenSkills(): Collection
    {
        return $this->childrenSkills;
    }

    public function addChildrenSkill(self $childrenSkills): self
    {
        if (!$this->childrenSkills->contains($childrenSkills)) {
            $this->childrenSkills[] = $childrenSkills;
            $childrenSkills->addParentSkill($this);
        }

        return $this;
    }

    public function removeChildrenSkill(self $childrenSkills): self
    {
        if ($this->childrenSkills->removeElement($childrenSkills)) {
            $childrenSkills->removeParentSkill($this);
        }

        return $this;
    }
}
