<?php

namespace App\Entity;

use App\Repository\ActualityRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\UploadedFile;
use Vich\UploaderBundle\Mapping\Annotation as Vich;
use Symfony\Component\HttpFoundation\File\File;

#[ORM\Entity(repositoryClass: ActualityRepository::class)]
#[Vich\Uploadable]
class Actuality
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    private ?string $title = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $resume = null;

    #[ORM\Column(type: Types::TEXT)]
    private ?string $content = null;

    #[ORM\Column]
    private ?\DateTimeImmutable $created_at = null;

    #[ORM\Column(nullable: true)]
    private ?\DateTimeImmutable $edited_at = null;

    private ?\DateTimeImmutable $edited_at_file = null;

    #[ORM\ManyToOne(inversedBy: 'main_actualities')]
    private ?Tag $main_tag = null;

    #[ORM\ManyToMany(targetEntity: Tag::class, inversedBy: 'sub_actualities')]
    private Collection $sub_tags;

    #[Vich\UploadableField(mapping: 'actualities', fileNameProperty: 'imageName')]
    private ?File $imageFile = null;

    #[ORM\Column(nullable: true)]
    private ?string $imageName = null;

    #[ORM\Column(length: 255)]
    private ?string $type = null;

    #[ORM\Column]
    private ?bool $is_edited = null;

    public function __construct()
    {
        $this->sub_tags = new ArrayCollection();
        $this->created_at = new \DateTimeImmutable();
        $this->edited_at = new \DateTimeImmutable();
    }

    public function __toString(): string
    {
        return $this->getTitle();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getResume(): ?string
    {
        return $this->resume;
    }

    public function setResume(string $resume): self
    {
        $this->resume = $resume;

        return $this;
    }

    public function getContent(): ?string
    {
        return $this->content;
    }

    public function setContent(string $content): self
    {
        $this->content = $content;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeImmutable $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getEditedAt(): ?\DateTimeImmutable
    {
        return $this->edited_at;
    }

    public function setEditedAt(?\DateTimeImmutable $edited_at): self
    {
        $this->edited_at = $edited_at;

        return $this;
    }

    public function getMainTag(): ?Tag
    {
        return $this->main_tag;
    }

    public function setMainTag(?Tag $main_tag): self
    {
        $this->main_tag = $main_tag;

        return $this;
    }

    /**
     * @return Collection<int, Tag>
     */
    public function getSubTags(): Collection
    {
        return $this->sub_tags;
    }

    public function addSubTag(Tag $subTag): self
    {
        if (!$this->sub_tags->contains($subTag)) {
            $this->sub_tags->add($subTag);
        }

        return $this;
    }

    public function removeSubTag(Tag $subTag): self
    {
        $this->sub_tags->removeElement($subTag);

        return $this;
    }

    /**
     * @param File|UploadedFile|null $imageFile
     */
    public function setImageFile(File|UploadedFile|null $imageFile = null): self
    {
        $this->imageFile = $imageFile;

        if (null !== $imageFile) {
            $this->edited_at_file = new \DateTimeImmutable();
        }

        return $this;
    }

    public function getImageFile(): ?File
    {
        return $this->imageFile;
    }

    public function setImageName(?string $imageName): self
    {
        $this->imageName = $imageName;

        return $this;
    }

    public function getImageName(): ?string
    {
        return $this->imageName;
    }

    public function getType(): ?string
    {
        return $this->type;
    }

    public function setType(string $type): self
    {
        $this->type = $type;

        return $this;
    }

    public function isIsEdited(): ?bool
    {
        return $this->is_edited;
    }

    public function setIsEdited(bool $is_edited): self
    {
        $this->is_edited = $is_edited;

        return $this;
    }
}
