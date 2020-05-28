<?php

namespace App\Entity\Tools\Rss;

use App\Repository\Tools\Rss\RssItemRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=RssItemRepository::class)
 * @UniqueEntity("guid")
 */
class RssItem
{
    const LIMIT_DAY_NEW = 2;

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
     * @ORM\Column(type="string", length=255)
     */
    private $link;

    /**
     * @ORM\Column(type="datetime")
     */
    private $pubdate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="boolean")
     */
    private $new;

    /**
     * @ORM\Column(type="string")
     */
    private $guid;

    /**
     * @ORM\Column(type="text")
     */
    private $description;

    /**
     * @ORM\ManyToOne(targetEntity=RssFeed::class, inversedBy="rssItems")
     */
    private $rssFeed;

    public function __construct()
    {
        $this->createdAt = new \DateTime("NOW");
        $this->new       = true;
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

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getPubdate(): ?\DateTime
    {
        return $this->pubdate;
    }

    public function setPubdate(\DateTime $pubdate): self
    {
        $this->pubdate = $pubdate;

        return $this;
    }

    /**
     * @return mixed
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * @param mixed $createdAt
     * @return RssItem
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getNew()
    {
        return $this->new;
    }

    /**
     * @param mixed $new
     * @return RssItem
     */
    public function setNew($new)
    {
        $this->new = $new;
        return $this;
    }

    /**
     * @return mixed
     */
    public function getGuid()
    {
        return $this->guid;
    }

    /**
     * @param mixed $guid
     * @return RssItem
     */
    public function setGuid($guid)
    {
        $this->guid = $guid;
        return $this;
    }

    public function getShortDescription()
    {
        return substr(
                preg_replace("/\s+/", " ",
                    preg_replace("/\r|\n/", "",
                        trim(
                            strip_tags(
                                $this->getDescription()
                            )
                        )
                    )
                ), 0, 100
            ) . ' ...';
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getRssFeed(): ?RssFeed
    {
        return $this->rssFeed;
    }

    public function setRssFeed(?RssFeed $rssFeed): self
    {
        $this->rssFeed = $rssFeed;

        return $this;
    }
}
