<?php

namespace App\Entity\Tools\Rss;

use App\Repository\Tools\Rss\RssFeedRepository;
use Cocur\Slugify\Slugify;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;

/**
 * @ORM\Entity(repositoryClass=RssFeedRepository::class)
 * @UniqueEntity("title")
 */
class RssFeed
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
     * @ORM\Column(type="string", length=255)
     */
    private $url;

    /**
     * @ORM\ManyToMany(targetEntity=RssCategory::class, mappedBy="rssFeeds")
     */
    private $rssCategories;

    /**
     * @ORM\OneToMany(targetEntity=RssItem::class, mappedBy="rssFeed",cascade={"persist"})
     */
    private $rssItems = 0;

    /**
     * @ORM\Column(type="integer")
     */
    private $nbNew;

    public function __construct()
    {
        $this->rssCategories = new ArrayCollection();
        $this->rssItems      = new ArrayCollection();
    }

    public function getSlug()
    {
        return (new Slugify())->slugify($this->getTitle());
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

    public function getUrl(): ?string
    {
        return $this->url;
    }

    public function setUrl(string $url): self
    {
        $this->url = $url;

        return $this;
    }

    /**
     * @return Collection|RssCategory[]
     */
    public function getRssCategories(): Collection
    {
        return $this->rssCategories;
    }

    public function addRssCategory(RssCategory $rssCategory): self
    {
        if (!$this->rssCategories->contains($rssCategory)) {
            $this->rssCategories[] = $rssCategory;
            $rssCategory->addRssFeed($this);
        }

        return $this;
    }

    public function removeRssCategory(RssCategory $rssCategory): self
    {
        if ($this->rssCategories->contains($rssCategory)) {
            $this->rssCategories->removeElement($rssCategory);
            $rssCategory->removeRssFeed($this);
        }

        return $this;
    }

    /**
     * @return Collection|RssItem[]
     */
    public function getRssItems(): Collection
    {
        return $this->rssItems;
    }

    public function addRssItem(RssItem $rssItem): self
    {
        if (!$this->rssItems->contains($rssItem)) {
            $this->rssItems[] = $rssItem;
            $rssItem->setRssFeed($this);
        }

        return $this;
    }

    public function removeRssItem(RssItem $rssItem): self
    {
        if ($this->rssItems->contains($rssItem)) {
            $this->rssItems->removeElement($rssItem);
            // set the owning side to null (unless already changed)
            if ($rssItem->getRssFeed() === $this) {
                $rssItem->setRssFeed(null);
            }
        }

        return $this;
    }

    public function getNbNew(): ?int
    {
        return $this->nbNew;
    }

    public function setNbNew(int $nbNew): self
    {
        $this->nbNew = $nbNew;

        return $this;
    }
}
