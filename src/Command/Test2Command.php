<?php

namespace App\Command;

use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;
use N445\EasyDiscord\Helper\Colors;
use N445\EasyDiscord\Model\Author;
use N445\EasyDiscord\Model\Embed;
use N445\EasyDiscord\Model\Field;
use N445\EasyDiscord\Model\Footer;
use N445\EasyDiscord\Model\Image;
use N445\EasyDiscord\Model\Message;
use N445\EasyDiscord\Model\Provider;
use N445\EasyDiscord\Model\Thumbnail;
use N445\EasyDiscord\Service\DiscordSender;

class Test2Command extends Command
{
    protected static $defaultName = 'test2';

    protected function configure()
    {
        $this
            ->setDescription('Add a short description for your command')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        // Init one embed
        $embed = (new Embed())
            ->setTitle('n445')
            ->setDescription('My wonderful message')
            ->setUrl('https://github.com/N445') // optional
            ->setColor(Colors::GREEN) // optional
        ;

// Add author optional
        $author = (new Author())
            ->setName('NAAS 22')
            ->setUrl('https://github.com/N445')
            ->setIconUrl('https://avatars0.githubusercontent.com/u/25900291?s=460&v=4')
        ;
        $embed->setAuthor($author);

// Add image optional
        $image = (new Image())
            ->setUrl('https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80');
        $embed->setImage($image);

// Add thumbnail optional
        $thumbnail = (new Thumbnail())
            ->setUrl('https://images.unsplash.com/photo-1517976384346-3136801d605d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80');
        $embed->setThumbnail($thumbnail);

// Add footer optional
        $footer = (new Footer())
            ->setText('Footer !');
        $embed->setFooter($footer);

// Add fields optional
        $field1 = (new Field())
            ->setName('field 1')
            ->setValue('value field 1')
            ->setInline(true)
        ;

        $field2 = (new Field())
            ->setName('field 2')
            ->setValue('value field 2')
            ->setInline(true)
        ;

        $field3 = (new Field())
            ->setName('field 3')
            ->setValue('value field 3')
        ;

        $embed->addField($field1);
        $embed->addField($field2);
        $embed->addField($field3);
//or
        $embed->setFields([
            $field1,
            $field2,
            $field3,
        ]);


// Init one embed
        $embed2 = (new Embed())
            ->setTitle('other title')
            ->setDescription('My wonderful message 2')
        ;

// You can add multiple embed
        $message = (new Message())
            ->setUsername('My super bot')
            ->addEmbed($embed)
            ->addEmbed($embed2)
        ;

        $id    = $_ENV["DISCORD_CONTACT_ID"];
        $token = $_ENV["DISCORD_CONTACT_TOKEN"];

        (new DiscordSender($id, $token))
            ->send($message);

        $io->success('You have a new command! Now make it your own! Pass --help to see your options.');

        return 0;
    }
}
