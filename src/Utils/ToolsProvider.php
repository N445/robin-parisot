<?php

namespace App\Utils;

class ToolsProvider
{
    const NAME      = 'name';
    const LINK      = 'link';
    const IMAGE     = 'image';
    const VERSIONS   = 'versions';
    const BASE_PATH = 'images/tools/';

    /**
     * @return array
     */
    public static function getToolsFront()
    {
        return [
            [
                self::NAME    => 'Bootsrap',
                self::LINK    => '//getbootstrap.com',
                self::VERSIONS => ['3', '4'],
                self::IMAGE   => self::BASE_PATH . 'bootstrap.png',
            ],
            [
                self::NAME  => 'Grunt',
                self::LINK  => '//gruntjs.com',
                self::IMAGE => self::BASE_PATH . 'grunt.png',
            ],
            [
                self::NAME  => 'Webpack',
                self::LINK  => '//webpack.js.org',
                self::IMAGE => self::BASE_PATH . 'webpack.png',
            ],
            [
                self::NAME  => 'SASS',
                self::LINK  => '//sass-lang.com',
                self::IMAGE => self::BASE_PATH . 'sass.png',
            ],
            [
                self::NAME  => 'Javascript',
                self::IMAGE => self::BASE_PATH . 'javascript.png',
            ],
            [
                self::NAME  => 'jQuery',
                self::LINK  => '//jquery.com',
                self::IMAGE => self::BASE_PATH . 'jquery.png',
            ],
        ];
    }

    /**
     * @return array
     */
    public static function getToolsBack()
    {
        return [
            [
                self::NAME  => 'Symfony',
                self::LINK  => '//symfony.com',
                self::IMAGE => self::BASE_PATH . 'symfony.png',
            ],
        ];
    }

    /**
     * @return array
     */
    public static function getToolsOther()
    {
        return [
            [
                self::NAME  => 'GIT',
                self::LINK  => '//git-scm.com',
                self::IMAGE => self::BASE_PATH . 'git.png',
            ],
        ];
    }
}