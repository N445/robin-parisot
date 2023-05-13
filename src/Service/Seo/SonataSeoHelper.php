<?php

namespace App\Service\Seo;

use Sonata\SeoBundle\Seo\SeoPageInterface;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\KernelInterface;

class SonataSeoHelper
{
    public function __construct(
        private readonly SeoPageInterface $seoPage,
        private readonly RequestStack     $requestStack,
        private readonly KernelInterface  $kernel
    )
    {
    }

    public function setAutoValues()
    {
        $mainRequest = $this->requestStack->getMainRequest();
        $this->seoPage
            ->addMeta('property', 'og:url', $mainRequest->getUri())
            ->addMeta('property', 'og:image', $mainRequest->getSchemeAndHttpHost() . '/logo/banner.jpg');
    }

    public function setTitle(?string $text = null): self
    {
        if (!$text) {
            return $this;
        }


        $this->seoPage
            ->addTitlePrefix($text)
            ->removeMeta('property', 'og:title')
            ->addMeta('property', 'og:title', $text);

        $this->setAutoValues();

        return $this;
    }

    public function setDescription(?string $text = null): self
    {
        if (!$text) {
            return $this;
        }

        $this->seoPage
            ->removeMeta('name', 'description')
            ->addMeta('name', 'description', $text)
            ->removeMeta('property', 'og:description')
            ->addMeta('property', 'og:description', $text);


        return $this;
    }

    public function setImage(?string $text = null, ?bool $isRelative = false): self
    {
        if (!$text) {
            return $this;
        }

        if ($isRelative) {
            $text = $this->requestStack->getMainRequest()->getSchemeAndHttpHost() . $text;
        }

        $this->seoPage
            ->removeMeta('property', 'og:image')
            ->addMeta('property', 'og:image', $text);


        return $this;
    }
}