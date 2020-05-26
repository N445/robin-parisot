<?php

namespace App\Service\Tools\Apod;

use App\Event\ApodEvent;
use App\Helper\DiscordKey;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Footer;
use N445\EasyDiscord\Model\Image;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Service\DiscordSender;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

class ApodDiscord implements EventSubscriberInterface
{
    /**
     * @var ApodHelper
     */
    private $apodHelper;
    
    /**
     * ApodFlush constructor.
     * @param ApodHelper $apodHelper
     */
    public function __construct(
        ApodHelper $apodHelper
    )
    {
        $this->apodHelper = $apodHelper;
    }
    
    public static function getSubscribedEvents()
    {
        return [
            ApodEvent::APOD_NEW => 'sendDiscord',
        ];
    }
    
    public function sendDiscord(ApodEvent $apodEvent)
    {
        $apod = $apodEvent->getApod();
        
        if ($this->apodHelper->isApodExist($apod)) {
            return;
        }
        
        $message = (new Message())->setUsername('APOD');
        $footer = (new Footer())->setText($apod->getDate()->format('d/m/Y H:i:s'));
        $image = (new Image())->setUrl($apod->getHdurl());
        $embed = (new Embed())
            ->setTitle("Astronomy Picture of the Day")
            ->setColor(Colors::DARK_PURPLE)
            ->setDescription(
                sprintf(
                    "**Titre : ** %s \n**Description : ** %s"
                    , $apod->getTitle()
                    , $apod->getExplanation()
                )
            )
            ->setFooter($footer)
            ->setImage($image);
        $message->setEmbeds([$embed]);
        
        (new DiscordSender())->init(DiscordKey::APOD_ID, DiscordKey::APOD_TOKEN)
            ->send($message);
    }
}
