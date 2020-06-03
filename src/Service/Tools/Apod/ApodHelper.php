<?php

namespace App\Service\Tools\Apod;

use App\Entity\Tools\Apod\Apod;
use App\Repository\Tools\ApodRepository;

class ApodHelper
{
    /**
     * @var ApodRepository
     */
    private $apodRepository;

    /**
     * ApodHelper constructor.
     * @param ApodRepository $apodRepository
     */
    public function __construct(ApodRepository $apodRepository)
    {
        $this->apodRepository = $apodRepository;
    }

    /**
     * @param Apod $apod
     * @return bool
     */
    public function isApodExist(Apod $apod)
    {
        return $this->apodRepository->getByDateId($apod->getDateId()) ? true : false;
    }
}