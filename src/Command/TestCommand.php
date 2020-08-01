<?php

namespace App\Command;

use App\Service\Tools\Apod\ApodProvider;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Author;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Field;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Service\DiscordSender;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Validator\Validator\ValidatorInterface;

class TestCommand extends Command
{
    protected static $defaultName = 'test';

    /**
     * @var ValidatorInterface
     */
    private $validator;

    /**
     * @var DiscordSender
     */
    private $discordSender;

    /**
     * @var ApodProvider
     */
    private $apodProvider;

    /**
     * TestCommand constructor.
     * @param string|null   $name
     * @param DiscordSender $discordSender
     * @param ApodProvider  $apodProvider
     */
    public function __construct(string $name = null, DiscordSender $discordSender, ApodProvider $apodProvider)
    {
        parent::__construct($name);
        $this->discordSender = $discordSender;
        $this->apodProvider = $apodProvider;
    }

//    public function __construct(string $name = null, ValidatorInterface $validator)
//    {
//        parent::__construct($name);
//        $this->validator = $validator;
//    }

    protected function configure()
    {
        $this
            ->setDescription('Test');
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);
        $this->apodProvider->getApod(new \DateTime("2020-06-02"));
//
//        $embed = (new Embed())
//            ->setTitle('My embed from EasyDiscord')
//            ->setDescription('https://www.youtube.com/watch?v=axGn6qeJHcM')
//        ;
//        $message = (new Message())
//            ->setUsername('APOD')
//            ->setAvatarUrl('https://apod.nasa.gov/apod/apod.gif')
//            ->setTts(true)
//            ->addEmbed($embed)
//        ;
//
//        $id    = $_ENV['DISCORD_CONTACT_ID'];
//        $token = $_ENV['DISCORD_CONTACT_TOKEN'];
//
////        (new DiscordSender($id, $token, $this->validator))
////            ->send($message);
//
//        $this->discordSender->addIdToken($id, $token)->send($message);

        $io->success('Test ok.');

        return 0;
    }
}
