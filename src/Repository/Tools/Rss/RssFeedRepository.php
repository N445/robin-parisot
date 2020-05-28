<?php

namespace App\Repository\Tools\Rss;

use App\Entity\Tools\Rss\RssFeed;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RssFeed|null find($id, $lockMode = null, $lockVersion = null)
 * @method RssFeed|null findOneBy(array $criteria, array $orderBy = null)
 * @method RssFeed[]    findAll()
 * @method RssFeed[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RssFeedRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RssFeed::class);
    }

    /**
     * @return RssFeed[]
     */
    public function getHome()
    {
        return $this->createQueryBuilder('r')
                    ->orderBy('r.title', 'ASC')
                    ->getQuery()
                    ->getResult()
            ;
    }

    /**
     * @return RssFeed[]
     */
    public function getAll()
    {
        return $this->createQueryBuilder('r')
                    ->orderBy('r.title', 'ASC')
                    ->getQuery()
                    ->getResult()
            ;
    }

    // /**
    //  * @return RssFeed[] Returns an array of RssFeed objects
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
    public function findOneBySomeField($value): ?RssFeed
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
