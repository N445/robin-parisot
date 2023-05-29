<?php

namespace App\Validator;

use Symfony\Component\Validator\Constraint;
use Symfony\Component\Validator\ConstraintValidator;

class ContactCaptchaValidator extends ConstraintValidator
{
    public function validate($value, Constraint $constraint)
    {
        /* @var App\Validator\ContactCaptcha $constraint */
        if(null === $value || '' === $value){
            // TODO: implement the validation here
            $this->context->buildViolation($constraint->message)
                ->addViolation();
        }


    }
}
