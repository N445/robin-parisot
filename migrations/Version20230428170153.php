<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20230428170153 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE actuality (id INT AUTO_INCREMENT NOT NULL, main_tag_id INT DEFAULT NULL, title VARCHAR(255) NOT NULL, resume LONGTEXT NOT NULL, content LONGTEXT NOT NULL, created_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', edited_at DATETIME DEFAULT NULL COMMENT \'(DC2Type:datetime_immutable)\', image_name VARCHAR(255) DEFAULT NULL, type VARCHAR(255) NOT NULL, is_edited TINYINT(1) NOT NULL, INDEX IDX_4093DDD825CEDB07 (main_tag_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE actuality_tag (actuality_id INT NOT NULL, tag_id INT NOT NULL, INDEX IDX_4E30125B84BD854 (actuality_id), INDEX IDX_4E30125BAD26311 (tag_id), PRIMARY KEY(actuality_id, tag_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE contact (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(255) NOT NULL, lastname VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, message LONGTEXT NOT NULL, sended_at DATETIME NOT NULL COMMENT \'(DC2Type:datetime_immutable)\', PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, color VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE `user` (id INT AUTO_INCREMENT NOT NULL, email VARCHAR(180) NOT NULL, roles JSON NOT NULL, password VARCHAR(255) NOT NULL, UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE actuality ADD CONSTRAINT FK_4093DDD825CEDB07 FOREIGN KEY (main_tag_id) REFERENCES tag (id)');
        $this->addSql('ALTER TABLE actuality_tag ADD CONSTRAINT FK_4E30125B84BD854 FOREIGN KEY (actuality_id) REFERENCES actuality (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE actuality_tag ADD CONSTRAINT FK_4E30125BAD26311 FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE actuality DROP FOREIGN KEY FK_4093DDD825CEDB07');
        $this->addSql('ALTER TABLE actuality_tag DROP FOREIGN KEY FK_4E30125B84BD854');
        $this->addSql('ALTER TABLE actuality_tag DROP FOREIGN KEY FK_4E30125BAD26311');
        $this->addSql('DROP TABLE actuality');
        $this->addSql('DROP TABLE actuality_tag');
        $this->addSql('DROP TABLE contact');
        $this->addSql('DROP TABLE tag');
        $this->addSql('DROP TABLE `user`');
    }
}
