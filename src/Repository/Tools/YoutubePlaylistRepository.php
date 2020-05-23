<?php

namespace App\Repository\Tools;

use App\Entity\Tools\YoutubePlaylist;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method YoutubePlaylist|null find($id, $lockMode = null, $lockVersion = null)
 * @method YoutubePlaylist|null findOneBy(array $criteria, array $orderBy = null)
 * @method YoutubePlaylist[]    findAll()
 * @method YoutubePlaylist[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class YoutubePlaylistRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, YoutubePlaylist::class);
    }

    // /**
    //  * @return YoutubePlaylist[] Returns an array of YoutubePlaylist objects
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
    public function findOneBySomeField($value): ?YoutubePlaylist
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
