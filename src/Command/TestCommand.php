<?php

namespace App\Command;

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

    public function __construct(string $name = null, DiscordSender $discordSender)
    {
        parent::__construct($name);
        $this->discordSender = $discordSender;
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



        $author = (new Author())
            ->setName('APOD')
            ->setIconUrl('https://apod.nasa.gov/apod/apod.gif')
        ;
        $embed = (new Embed())
            ->setTitle('My embed from EasyDiscord')
            ->setDescription('https://www.youtube.com/watch?v=axGn6qeJHcM')
            ->setAuthor($author)
        ;
        $message = (new Message())
            ->setUsername('My super bot')
            ->addEmbed($embed)
        ;

        $id    = $_ENV['DISCORD_CONTACT_ID'];
        $token = $_ENV['DISCORD_CONTACT_TOKEN'];

//        (new DiscordSender($id, $token, $this->validator))
//            ->send($message);

        $this->discordSender->addIdToken($id, $token)->send($message);

        $io->success('Test ok.');

        return 0;
    }
}
