<?php

namespace App\Service;

class Recaptcha
{
    const RECAPTCHA_KEY         = '6LcoNboUAAAAAKh1x_luwQhYqyW4CfiIM0icpFdS';
    const RECAPTCHA_SECRET      = '6LcoNboUAAAAAA1ITMQ_86fnZ4HybXpF2mUgCvUe';

    public static function checkToken($token)
    {
        $postdata   = http_build_query(
            [
                "secret"   => self::RECAPTCHA_SECRET,
                "response" => $token,
            ]
        );
        $opts       = [
            'http' =>
                [
                    'method'  => 'POST',
                    'header'  => 'Content-type: application/x-www-form-urlencoded',
                    'content' => $postdata,
                ],
        ];
        $context    = stream_context_create($opts);
        $rawRresult = file_get_contents('https://www.google.com/recaptcha/api/siteverify', false, $context);
        $check = json_decode($rawRresult);
        return $check->success;
    }
}
