<?php

namespace App\Entity\Tools;

use App\Repository\Tools\YoutubeSongRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=YoutubeSongRepository::class)
 */
class YoutubeSong
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $identifier;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $name;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_in_deezer;

    /**
     * @ORM\Column(type="boolean")
     */
    private $is_imported_deezer;

    /**
     * @ORM\ManyToOne(targetEntity=YoutubePlaylist::class, inversedBy="songs")
     * @ORM\JoinColumn(nullable=false)
     */
    private $youtubePlaylist;

    public function __construct()
    {
        $this->is_in_deezer       = false;
        $this->is_imported_deezer = false;
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getIdentifier(): ?string
    {
        return $this->identifier;
    }

    public function setIdentifier(string $identifier): self
    {
        $this->identifier = $identifier;

        return $this;
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

    public function getIsInDeezer(): ?bool
    {
        return $this->is_in_deezer;
    }

    public function setIsInDeezer(bool $is_in_deezer): self
    {
        $this->is_in_deezer = $is_in_deezer;

        return $this;
    }

    public function getIsImportedDeezer(): ?bool
    {
        return $this->is_imported_deezer;
    }

    public function setIsImportedDeezer(bool $is_imported_deezer): self
    {
        $this->is_imported_deezer = $is_imported_deezer;

        return $this;
    }

    public function getYoutubePlaylist(): ?YoutubePlaylist
    {
        return $this->youtubePlaylist;
    }

    public function setYoutubePlaylist(?YoutubePlaylist $youtubePlaylist): self
    {
        $this->youtubePlaylist = $youtubePlaylist;

        return $this;
    }
}
