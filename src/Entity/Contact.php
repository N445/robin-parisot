<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass="App\Repository\ContactRepository")
 */
class Contact
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 3,
     *      max = 20,
     *      minMessage = "Votre prénom doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "Votre prénom ne peut pas dépasser {{ limit }} caractères"
     * )
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=20)
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 3,
     *      max = 20,
     *      minMessage = "Votre nom doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "Votre nom ne peut pas dépasser {{ limit }} caractères"
     * )
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=100)
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 4,
     *      max = 100,
     *      minMessage = "Votre email doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "Votre email ne peut pas dépasser {{ limit }} caractères"
     * )
     * @Assert\Email(
     *     message = "The email '{{ value }}' is not a valid email.",
     *     checkMX = true
     * )
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=150)
     * @Assert\NotBlank
     * @Assert\Length(
     *      min = 3,
     *      max = 150,
     *      minMessage = "L'objet doit comporter au moins {{ limit }} caractères",
     *      maxMessage = "L'objet ne peut pas dépasser {{ limit }} caractères"
     * )
     */
    private $subject;

    /**
     * @ORM\Column(type="text")
     * @Assert\NotBlank
     */
    private $message;

    /**
     * @ORM\Column(type="datetime")
     */
    private $send_at;

    /**
     * Contact constructor.
     */
    public function __construct()
    {
        $this->send_at = new \DateTime("NOW");
    }

    /**
     * @return int|null
     */
    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return null|string
     */
    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    /**
     * @param string $firstname
     * @return Contact
     */
    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    /**
     * @param string $lastname
     * @return Contact
     */
    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getEmail(): ?string
    {
        return $this->email;
    }

    /**
     * @param string $email
     * @return Contact
     */
    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getSubject(): ?string
    {
        return $this->subject;
    }

    /**
     * @param string $subject
     * @return Contact
     */
    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    /**
     * @return null|string
     */
    public function getMessage(): ?string
    {
        return $this->message;
    }

    /**
     * @param string $message
     * @return Contact
     */
    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    /**
     * @return \DateTimeInterface|null
     */
    public function getSendAt(): ?\DateTimeInterface
    {
        return $this->send_at;
    }

    /**
     * @param \DateTimeInterface $send_at
     * @return Contact
     */
    public function setSendAt(\DateTimeInterface $send_at): self
    {
        $this->send_at = $send_at;

        return $this;
    }
}
