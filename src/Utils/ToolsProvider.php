<?php

namespace App\Utils;

class ToolsProvider
{
    const NAME = 'name';

    /**
     * @return array
     */
    public static function getToolsFront()
    {
        return [
            [
                self::NAME => 'Bootsrap',
            ],
            [
                self::NAME => 'Grunt',
            ],
            [
                self::NAME => 'Webpack',
            ],
            [
                self::NAME => 'SASS',
            ],
            [
                self::NAME => 'Javascript',
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
                self::NAME => 'Symfony',
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
                self::NAME => 'GIT',
            ],
        ];
    }
}