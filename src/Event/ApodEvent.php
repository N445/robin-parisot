<?php

namespace App\Event;

use App\Entity\Tools\Apod\Apod;
use Symfony\Contracts\EventDispatcher\Event;

class ApodEvent extends Event
{
    const APOD_NEW = 'apod.new';

    /**
     * @var Apod
     */
    private $apod;

    /**
     * ApodEvent constructor.
     * @param Apod $apod
     */
    public function __construct(Apod $apod)
    {
        $this->apod = $apod;
    }

    /**
     * @return Apod
     */
    public function getApod(): Apod
    {
        return $this->apod;
    }

    /**
     * @param Apod $apod
     * @return ApodEvent
     */
    public function setApod(Apod $apod): ApodEvent
    {
        $this->apod = $apod;
        return $this;
    }


}