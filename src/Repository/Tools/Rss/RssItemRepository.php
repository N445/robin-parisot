<?php

namespace App\Repository\Tools\Rss;

use App\Entity\Tools\Rss\RssFeed;
use App\Entity\Tools\Rss\RssItem;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method RssItem|null find($id, $lockMode = null, $lockVersion = null)
 * @method RssItem|null findOneBy(array $criteria, array $orderBy = null)
 * @method RssItem[]    findAll()
 * @method RssItem[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RssItemRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, RssItem::class);
    }

    /**
     * @return RssItem[]
     */
    public function getHome()
    {
        return $this->createQueryBuilder('r')
                    ->orderBy('r.pubdate', 'DESC')
                    ->where('r.new = true')
                    ->getQuery()
                    ->getResult()
            ;
    }

    /**
     * @return RssItem[]
     */
    public function getAllByDate()
    {
        return $this->createQueryBuilder('r')
                    ->orderBy('r.pubdate', 'DESC')
                    ->getQuery()
                    ->getResult()
            ;
    }

    public function getGuids()
    {
        return array_map(function ($item) {
            return $item['guid'];
        }, $this->createQueryBuilder('r')
                ->select('r.guid')
                ->getQuery()
                ->getResult()
        );
    }

    /**
     * @return RssItem[]
     */
    public function getAllNew()
    {
        return $this->createQueryBuilder('r')
                    ->where('r.new = true')
                    ->getQuery()
                    ->getResult()
            ;
    }

    /**
     * @return RssItem[]
     */
    public function getAllNewByRssFeed(RssFeed $rssFeed)
    {
        return $this->createQueryBuilder('r')
                    ->select('r.id')
                    ->where('r.new = true')
                    ->andWhere('r.rssFeed = :rssFeed')
                    ->setParameter('rssFeed', $rssFeed)
                    ->getQuery()
                    ->getResult()
            ;
    }

    // /**
    //  * @return RssItem[] Returns an array of RssItem objects
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
    public function findOneBySomeField($value): ?RssItem
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
