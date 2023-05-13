<?php

namespace App\Repository;

use App\Entity\Actuality;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\ORM\Query\Expr;
use Doctrine\ORM\Tools\Pagination\Paginator;
use Doctrine\Persistence\ManagerRegistry;
use Knp\Component\Pager\Pagination\PaginationInterface;
use Knp\Component\Pager\PaginatorInterface;

/**
 * @extends ServiceEntityRepository<Actuality>
 *
 * @method Actuality|null find($id, $lockMode = null, $lockVersion = null)
 * @method Actuality|null findOneBy(array $criteria, array $orderBy = null)
 * @method Actuality[]    findAll()
 * @method Actuality[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ActualityRepository extends ServiceEntityRepository
{
    public function __construct(
        ManagerRegistry                     $registry,
        private readonly PaginatorInterface $paginator
    )
    {
        parent::__construct($registry, Actuality::class);
    }

    public function getPaginated(?int $page = 1, ?int $limit = 10, ?string $tagName = null): PaginationInterface
    {
        $query = $this->createQueryBuilder('a')
            ->addSelect('amt', 'ast')
            ->leftJoin('a.main_tag', 'amt')
            ->leftJoin('a.sub_tags', 'ast')
            ->setFirstResult(0)
            ->setMaxResults(100)
            ->addOrderBy('a.edited_at', 'DESC');

        if ($tagName) {
            $query->andWhere('amt.name = :tagName')
                ->setParameter('tagName', $tagName);
        }

        return $this->paginator->paginate(
            $query,
            $page,
            $limit
        );
    }

    public function findPreviousAndNextActualite(Actuality $actuality)
    {
        $qb = $this->createQueryBuilder('a')
            ->andWhere('a.edited_at < :edited_at')
            ->orWhere('a.edited_at > :edited_at')
            ->setParameter('edited_at', $actuality->getEditedAt())
            ->orderBy('a.edited_at', 'ASC');

        // Charge l'actualité précédente
        $qbPrevious = clone $qb;
        $qbPrevious->setMaxResults(1)
            ->andWhere('a.edited_at < :edited_at')
            ->orderBy('a.edited_at', 'DESC');
        $previous = $qbPrevious->getQuery()->getOneOrNullResult();

        // Charge l'actualité suivante
        $qbNext = clone $qb;
        $qbNext->setMaxResults(1)
            ->andWhere('a.edited_at > :edited_at');
        $next = $qbNext->getQuery()->getOneOrNullResult();

        return [
            'previous' => $previous,
            'next' => $next,
        ];
    }

    public function save(Actuality $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(Actuality $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return ActualityFixtures[] Returns an array of ActualityFixtures objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('a.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?ActualityFixtures
//    {
//        return $this->createQueryBuilder('a')
//            ->andWhere('a.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
