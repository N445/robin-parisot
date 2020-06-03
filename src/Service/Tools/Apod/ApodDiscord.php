<?php

namespace App\Service\Tools\Apod;

use App\Entity\Tools\Apod\Apod;
use App\Helper\DiscordKey;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Field;
use N445\EasyDiscord\Model\Footer;
use N445\EasyDiscord\Model\Image;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Service\DiscordSender;

class ApodDiscord
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

    public function sendDiscord(Apod $apod)
    {
        $message = (new Message())->setUsername('APOD');
        $footer  = (new Footer())->setText($apod->getDate()->format('d/m/Y H:i:s'));
        $embed   = (new Embed())
            ->setTitle("Astronomy Picture of the Day")
            ->setColor(Colors::DARK_PURPLE)
            ->setUrl('https://apod.nasa.gov/apod/astropix.html')
            ->setDescription(
                sprintf(
                    "**Titre : ** %s \n**Description : ** %s"
                    , $apod->getTitle()
                    , $apod->getExplanation()
                )
            )
            ->setFooter($footer)
        ;
        $this->setMediaToEmbed($apod, $embed);
        $message->addEmbed($embed);

        (new DiscordSender())
            ->addIdToken($_ENV["DISCORD_APOD_ID"], $_ENV["DISCORD_APOD_TOKEN"])
            ->send($message)
        ;
    }

    private function setMediaToEmbed(Apod $apod, Embed &$embed)
    {
        if ('video' === $apod->getMediatype()) {
            $embed->addField((new Field())
                ->setName('Vidéo')
                ->setValue($apod->getHdurl() ?: $apod->getUrl())
            );
            return;
        }
        $embed->setImage((new Image())->setUrl($apod->getHdurl() ?: $apod->getUrl()));
    }
}
