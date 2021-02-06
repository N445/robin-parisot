<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;
use voku\helper\EmailCheck;

class EmailValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        /* @var $constraint Email */

        if (null === $value || '' === $value) {
            return;
        }

        if (EmailCheck::isValid($value, true, true)) {
            return;
        }

        // TODO: implement the validation here
        $this->context->buildViolation($constraint->message)
                      ->setParameter('{{ value }}', $value)
                      ->addViolation()
        ;
    }
}
