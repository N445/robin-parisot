<?php

namespace App\Repository\Tools;

use App\Entity\Tools\YoutubeSong;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method YoutubeSong|null find($id, $lockMode = null, $lockVersion = null)
 * @method YoutubeSong|null findOneBy(array $criteria, array $orderBy = null)
 * @method YoutubeSong[]    findAll()
 * @method YoutubeSong[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class YoutubeSongRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, YoutubeSong::class);
    }

    // /**
    //  * @return YoutubeSong[] Returns an array of YoutubeSong objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('y')
            ->andWhere('y.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('y.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?YoutubeSong
    {
        return $this->createQueryBuilder('y')
            ->andWhere('y.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
