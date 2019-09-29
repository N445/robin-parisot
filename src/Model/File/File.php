<?php

namespace App\Model\File;

use App\Model\FileBase;
use Symfony\Component\Validator\Constraints as Assert;

abstract class File extends FileBase
{
    /**
     * @Assert\File(maxSize="15000000")
     */
    protected $file;
}