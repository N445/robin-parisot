<?php

namespace App\Repository;

use App\Entity\Actualite;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Common\Persistence\ManagerRegistry;
use Doctrine\ORM\NonUniqueResultException;

/**
 * @method Actualite|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actualite|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actualite[]    findAll()
 * @method Actualite[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActualiteRepository extends ServiceEntityRepository
{
    /**
     * ActualiteRepository constructor.
     * @param ManagerRegistry $registry
     */
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, Actualite::class);
    }

    /**
     * @param $id
     * @return Actualite[]
     */
    public function getActualities()
    {
        return $this->getQuery()
                    ->getQuery()
                    ->getResult()
            ;
    }

    /**
     * @param $id
     * @return Actualite|null
     * @throws NonUniqueResultException
     */
    public function getActualityById($id)
    {
        return $this->getQuery()
                    ->andWhere('a.id = :id')
                    ->setParameter('id', $id)
                    ->getQuery()
                    ->getOneOrNullResult()
            ;
    }

    /**
     * @param int $limit
     * @return Actualites[]
     */
    public function getActualitiesWithLimit($limit = 3)
    {
        $ids = array_map(function ($id) {
            return $id['id'];
        }, $this->createQueryBuilder('a')
                ->select('a.id')
                ->setMaxResults($limit)
                ->where('a.is_active = true')
                ->orderBy('a.created_at', 'DESC')
                ->getQuery()
                ->getResult());

        return $this->getQuery()
                    ->where('a.id IN (:ids)')
                    ->setParameter('ids', $ids)
                    ->getQuery()
                    ->getResult()
            ;
    }

    private function getQuery()
    {
        return $this->createQueryBuilder('a')
                    ->addSelect('image', 'tags')
                    ->leftJoin('a.image', 'image')
                    ->leftJoin('a.tags', 'tags')
                    ->orderBy('a.created_at', 'DESC')
            ;
    }

    // /**
    //  * @return Actualite[] Returns an array of Actualite objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('a.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Actualite
    {
        return $this->createQueryBuilder('a')
            ->andWhere('a.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
