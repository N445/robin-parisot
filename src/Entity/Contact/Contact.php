<?php

namespace App\Entity\Contact;

use App\Repository\Contact\ContactRepository;
use Doctrine\ORM\Mapping as ORM;
use App\Validator as CustomValidator;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * @ORM\Entity(repositoryClass=ContactRepository::class)
 */
class Contact
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     minMessage = "Votre prénom doit comporter au moins {{ limit }} caractères",
     *     maxMessage = "Votre prénom ne peut pas comporter plus de {{ limit }} caractères"
     * )
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     minMessage = "Votre prénom doit comporter au moins {{ limit }} caractères",
     *     maxMessage = "Votre prénom ne peut pas comporter plus de {{ limit }} caractères"
     * )
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     minMessage = "Votre prénom doit comporter au moins {{ limit }} caractères",
     *     maxMessage = "Votre prénom ne peut pas comporter plus de {{ limit }} caractères"
     * )
     * @Assert\Email()
     * @CustomValidator\Email()
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\Length(
     *     min=2,
     *     max=255,
     *     minMessage = "Votre prénom doit comporter au moins {{ limit }} caractères",
     *     maxMessage = "Votre prénom ne peut pas comporter plus de {{ limit }} caractères"
     * )
     */
    private $subject;

    /**
     * @ORM\Column(type="text")
     */
    private $message;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    public function __construct()
    {
        $this->setCreatedAt(new \DateTime("NOW"));
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getSubject(): ?string
    {
        return $this->subject;
    }

    public function setSubject(string $subject): self
    {
        $this->subject = $subject;

        return $this;
    }

    public function getMessage(): ?string
    {
        return $this->message;
    }

    public function setMessage(string $message): self
    {
        $this->message = $message;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }
}
