<?php

namespace App\Entity\Tools\Apod;

use App\Repository\Tools\ApodRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ApodRepository::class)
 * @ORM\HasLifecycleCallbacks()
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
     * @ORM\Column(type="string", length=255,nullable=true)
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

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Unique
     */
    private $dateId;

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return string|null
     */
    public function getTitle(): ?string
    {
        return $this->title;
    }

    /**
     * @param string $title
     * @return $this
     */
    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getExplanation(): ?string
    {
        return $this->explanation;
    }

    /**
     * @param string $explanation
     * @return $this
     */
    public function setExplanation(string $explanation): self
    {
        $this->explanation = $explanation;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getHdurl(): ?string
    {
        return $this->hdurl;
    }

    /**
     * @param string|null $hdurl
     * @return $this
     */
    public function setHdurl(?string $hdurl): self
    {
        $this->hdurl = $hdurl;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getUrl(): ?string
    {
        return $this->url;
    }

    /**
     * @param string $url
     * @return $this
     */
    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getMediatype(): ?string
    {
        return $this->mediatype;
    }

    /**
     * @param string $mediatype
     * @return $this
     */
    public function setMediatype(string $mediatype): self
    {
        $this->mediatype = $mediatype;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getServiceVersion(): ?string
    {
        return $this->serviceVersion;
    }

    /**
     * @param string $serviceVersion
     * @return $this
     */
    public function setServiceVersion(string $serviceVersion): self
    {
        $this->serviceVersion = $serviceVersion;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getDate(): ?\DateTimeInterface
    {
        return $this->date;
    }

    /**
     * @param \DateTimeInterface $date
     * @return $this
     */
    public function setDate(\DateTimeInterface $date): self
    {
        $this->date = $date;

        return $this;
    }

    /**
     * @return string|null
     */
    public function getDateId(): ?string
    {
        return $this->dateId;
    }

    /**
     * @param string $dateId
     * @return $this
     */
    public function setDateId(string $dateId): self
    {
        $this->dateId = $dateId;

        return $this;
    }
}
