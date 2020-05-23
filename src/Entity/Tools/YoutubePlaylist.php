<?php

namespace App\Entity\Tools;

use App\Repository\Tools\YoutubePlaylistRepository;
use DateTime;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=YoutubePlaylistRepository::class)
 */
class YoutubePlaylist
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
     * @ORM\OneToMany(targetEntity=YoutubeSong::class, mappedBy="youtubePlaylist", orphanRemoval=true, cascade={"persist","remove"})
     */
    private $songs;

    /**
     * @ORM\Column(type="datetime")
     */
    private $created_at;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $imported_at;

    public function __construct()
    {
        $this->songs      = new ArrayCollection();
        $this->created_at = new DateTime("NOW");
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

    /**
     * @return Collection|YoutubeSong[]
     */
    public function getSongs(): Collection
    {
        return $this->songs;
    }

    public function addSong(YoutubeSong $song): self
    {
        if (!$this->songs->contains($song)) {
            $this->songs[] = $song;
            $song->setYoutubePlaylist($this);
        }

        return $this;
    }

    public function removeSong(YoutubeSong $song): self
    {
        if ($this->songs->contains($song)) {
            $this->songs->removeElement($song);
            // set the owning side to null (unless already changed)
            if ($song->getYoutubePlaylist() === $this) {
                $song->setYoutubePlaylist(null);
            }
        }

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->created_at;
    }

    public function setCreatedAt(\DateTimeInterface $created_at): self
    {
        $this->created_at = $created_at;

        return $this;
    }

    public function getImportedAt(): ?\DateTimeInterface
    {
        return $this->imported_at;
    }

    public function setImportedAt(?\DateTimeInterface $imported_at): self
    {
        $this->imported_at = $imported_at;

        return $this;
    }
}
