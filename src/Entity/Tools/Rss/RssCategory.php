<?php

namespace App\Entity\Tools\Rss;

use App\Repository\Tools\Rss\RssCategoryRepository;
use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=RssCategoryRepository::class)
 * @UniqueEntity("title")
 */
class RssCategory
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
     * @ORM\ManyToMany(targetEntity=RssFeed::class, inversedBy="rssCategories")
     */
    private $rssFeeds;

    public function __construct()
    {
        $this->rssFeeds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getSlug()
    {
        return (new Slugify())->slugify($this->getTitle());
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

    /**
     * @return Collection|RssFeed[]
     */
    public function getRssFeeds(): Collection
    {
        return $this->rssFeeds;
    }

    public function addRssFeed(RssFeed $rssFeed): self
    {
        if (!$this->rssFeeds->contains($rssFeed)) {
            $this->rssFeeds[] = $rssFeed;
        }

        return $this;
    }

    public function removeRssFeed(RssFeed $rssFeed): self
    {
        if ($this->rssFeeds->contains($rssFeed)) {
            $this->rssFeeds->removeElement($rssFeed);
        }

        return $this;
    }
}
