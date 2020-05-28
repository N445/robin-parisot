<?php

namespace App\Repository\Tools\Rss;

use App\Entity\Tools\Rss\RssCategory;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RssCategory|null find($id, $lockMode = null, $lockVersion = null)
 * @method RssCategory|null findOneBy(array $criteria, array $orderBy = null)
 * @method RssCategory[]    findAll()
 * @method RssCategory[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RssCategoryRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RssCategory::class);
    }

    // /**
    //  * @return RssCategory[] Returns an array of RssCategory objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?RssCategory
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
