<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210207114632 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE skill (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE skill_skill (skill_source INT NOT NULL, skill_target INT NOT NULL, INDEX IDX_7B15774B70C02B67 (skill_source), INDEX IDX_7B15774B69257BE8 (skill_target), PRIMARY KEY(skill_source, skill_target)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE tag (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(255) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE skill_skill ADD CONSTRAINT FK_7B15774B70C02B67 FOREIGN KEY (skill_source) REFERENCES skill (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE skill_skill ADD CONSTRAINT FK_7B15774B69257BE8 FOREIGN KEY (skill_target) REFERENCES skill (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE skill_skill DROP FOREIGN KEY FK_7B15774B70C02B67');
        $this->addSql('ALTER TABLE skill_skill DROP FOREIGN KEY FK_7B15774B69257BE8');
        $this->addSql('DROP TABLE skill');
        $this->addSql('DROP TABLE skill_skill');
        $this->addSql('DROP TABLE tag');
    }
}
