<?php

namespace App\Entity\Tools;

use App\Repository\Tools\ApodRepository;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=ApodRepository::class)
 */
class Apod
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
    private $title;

    /**
     * @ORM\Column(type="text")
     */
    private $explanation;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hdurl;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $mediatype;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $serviceVersion;

    /**
     * @ORM\Column(type="datetime")
     */
    private $date;

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

    public function getExplanation(): ?string
    {
        return $this->explanation;
    }

    public function setExplanation(string $explanation): self
    {
        $this->explanation = $explanation;

        return $this;
    }

    public function getHdurl(): ?string
    {
        return $this->hdurl;
    }

    public function setHdurl(string $hdurl): self
    {
        $this->hdurl = $hdurl;

        return $this;
    }

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    public function getMediatype(): ?string
    {
        return $this->mediatype;
    }

    public function setMediatype(string $mediatype): self
    {
        $this->mediatype = $mediatype;

        return $this;
    }

    public function getServiceVersion(): ?string
    {
        return $this->serviceVersion;
    }

    public function setServiceVersion(string $serviceVersion): self
    {
        $this->serviceVersion = $serviceVersion;

        return $this;
    }

    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }
}
