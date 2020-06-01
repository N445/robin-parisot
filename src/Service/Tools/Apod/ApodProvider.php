<?php

namespace App\Service\Tools\Apod;

use App\Client\ApodClient;
use App\Entity\Tools\Apod;
use App\Event\ApodEvent;
use DateInterval;
use DateTime;
use GuzzleHttp\Psr7\Response;
use Psr\Cache\InvalidArgumentException as InvalidArgumentExceptionAlias;
use Symfony\Component\Cache\Adapter\FilesystemAdapter;
use Symfony\Component\EventDispatcher\EventDispatcherInterface;
use Symfony\Contracts\Cache\ItemInterface;

class ApodProvider
{
//    const URL     = 'https://apod.nasa.gov/apod/astropix.html';
    const URL          = '/planetary/apod';
    const API_KEY      = 'lRbS02ibzUTkPp15RlefUh38W6uF49L1FUDbOplU';
    const RESPONSE_KEY = '3apod_%s';
    const DATE_FORMAT  = 'Y-m-d';

    /**
     * @var ApodClient
     */
    private $apodClient;

    /**
     * @var string
     */
    private $now;

    /**
     * @var EventDispatcher
     */
    private $dispatcher;

    /**
     * @var ApodHelper
     */
    private $apodHelper;

    /**
     * ApodProvider constructor.
     * @param ApodClient               $apodClient
     * @param EventDispatcherInterface $dispatcher
     * @param ApodHelper               $apodHelper
     */
    public function __construct(
        ApodClient $apodClient,
        EventDispatcherInterface $dispatcher,
        ApodHelper $apodHelper
    )
    {
        $this->apodClient = $apodClient;
        $this->dispatcher = $dispatcher;
        $this->apodHelper = $apodHelper;
    }

    /**
     * @param DateTime|null $dateTime
     * @throws InvalidArgumentExceptionAlias
     */
    public function getApod(?DateTime $dateTime = null)
    {
        $this->setDate($dateTime);

        $cache = new FilesystemAdapter();
        $apod  = $cache->get(sprintf(self::RESPONSE_KEY, $this->now->format('Y-m-d')), function (ItemInterface $item) {
            $item->expiresAfter(3600);
            return $this->rawToObject();
        });

        if (!$this->apodHelper->isApodExist($apod)) {
            $this->dispatcher->dispatch(new ApodEvent($apod), ApodEvent::APOD_NEW);
        }
    }

    /**
     * @param DateTime|null $dateTime
     */
    private function setDate(?DateTime $dateTime = null)
    {
        $this->now = $dateTime ?? new DateTime("NOW");
        if ((int)$this->now->format('H') < 6) {
            $this->now->sub(new DateInterval('P1D'));
        }
    }

    /**
     * @return Apod
     */
    public function rawToObject()
    {
        $response = json_decode($this->getResponse()->getBody()->getContents(), true);
        $date     = DateTime::createFromFormat('Y-m-d', $response['date']);
        return (new Apod())
            ->setDate($date)
            ->setExplanation($response['explanation'])
            ->setHdurl($response['hdurl'])
            ->setMediatype($response['media_type'])
            ->setServiceVersion($response['service_version'])
            ->setTitle($response['title'])
            ->setUrl($response['url'])
            ->setDateId($date->format(self::DATE_FORMAT))
            ;
    }

    /**
     * @return Response
     */
    private function getResponse()
    {
        return $this->apodClient->get(self::URL, [
            'query' => [
                'api_key' => self::API_KEY,
                'date'    => $this->now->format('Y-m-d'),
            ],
        ]);
    }
}