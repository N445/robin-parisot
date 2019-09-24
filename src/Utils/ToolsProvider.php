<?php

namespace App\Utils;

class ToolsProvider
{
    const NAME      = 'name';
    const LINK      = 'link';
    const IMAGE     = 'image';
    const VERSIONS  = 'versions';
    const LEVEL     = 'level';
    const BASE_PATH = 'images/tools/';

    /**
     * @return array
     */
    public static function getToolsFront()
    {
        $data = [
            [
                self::NAME     => 'Bootsrap',
                self::LINK     => '//getbootstrap.com',
                self::LEVEL    => '80',
                self::VERSIONS => ['3', '4'],
                self::IMAGE    => self::BASE_PATH . 'bootstrap.png',
            ],
            [
                self::NAME  => 'Grunt',
                self::LINK  => '//gruntjs.com',
                self::LEVEL => '20',
                self::IMAGE => self::BASE_PATH . 'grunt.png',
            ],
            [
                self::NAME  => 'Webpack',
                self::LINK  => '//webpack.js.org',
                self::LEVEL => '30',
                self::IMAGE => self::BASE_PATH . 'webpack.png',
            ],
            [
                self::NAME  => 'SASS',
                self::LINK  => '//sass-lang.com',
                self::LEVEL => '50',
                self::IMAGE => self::BASE_PATH . 'sass.png',
            ],
            [
                self::NAME  => 'Javascript',
                self::LEVEL => '50',
                self::IMAGE => self::BASE_PATH . 'javascript.png',
            ],
            [
                self::NAME  => 'jQuery',
                self::LINK  => '//jquery.com',
                self::LEVEL => '60',
                self::IMAGE => self::BASE_PATH . 'jquery.png',
            ],
        ];
        usort($data, [self::class, 'sort']);
        return $data;
    }

    /**
     * @return array
     */
    public static function getToolsBack()
    {
        $data = [
            [
                self::NAME     => 'Symfony',
                self::LINK     => '//symfony.com',
                self::LEVEL    => '60',
                self::VERSIONS => ['3', '4'],
                self::IMAGE    => self::BASE_PATH . 'symfony.png',
            ],
            [
                self::NAME     => 'Magento',
                self::LINK     => '//magento.com',
                self::LEVEL    => '40',
                self::VERSIONS => ['2'],
                self::IMAGE    => self::BASE_PATH . 'magento.png',
            ],
            [
                self::NAME  => 'Elasticsearch',
                self::LINK  => '//www.elastic.co/fr/',
                self::LEVEL    => '10',
                self::IMAGE => self::BASE_PATH . 'elasticsearch.png',
            ],
        ];
        usort($data, [self::class, 'sort']);
        return $data;
    }

    /**
     * @return array
     */
    public static function getToolsOther()
    {
        $data = [
            [
                self::NAME  => 'GIT',
                self::LINK  => '//git-scm.com',
                self::LEVEL    => '50',
                self::IMAGE => self::BASE_PATH . 'git.png',
            ],
            [
                self::NAME  => 'Google Analytics',
                self::LINK  => '//analytics.google.com',
                self::LEVEL    => '30',
                self::IMAGE => self::BASE_PATH . 'google-analytics.png',
            ],
            [
                self::NAME  => 'Docker',
                self::LINK  => '//www.docker.com',
                self::LEVEL    => '20',
                self::IMAGE => self::BASE_PATH . 'docker.png',
            ],
            [
                self::NAME  => 'Bash',
                self::LEVEL    => '20',
                self::IMAGE => self::BASE_PATH . 'bash.png',
            ],
            [
                self::NAME  => 'Linux <br>(client & serveur)',
                self::LEVEL    => '60',
                self::IMAGE => self::BASE_PATH . 'linux.png',
            ],
        ];
        usort($data, [self::class, 'sort']);
        return $data;
    }

    public static function sort($a, $b)
    {
        return $a[self::LEVEL] < $b[self::LEVEL];
//        return strcmp($a[self::NAME], $b[self::NAME]);
    }
}