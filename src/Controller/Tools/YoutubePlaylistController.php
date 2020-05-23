<?php

namespace App\Controller\Tools;

use App\Entity\Tools\YoutubePlaylist;
use App\Form\Tools\YoutubePlaylistType;
use App\Repository\Tools\YoutubePlaylistRepository;
use App\Service\Tools\YoutubePlaylistPopulator;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/tools/youtube/playlist")
 */
class YoutubePlaylistController extends AbstractController
{
    const CURRENT_GROUP = 'TOOLS_GROUP';

    /**
     * @Route("/", name="TOOLS_YOUTUBE_PLAYLIST_INDEX", methods={"GET"})
     */
    public function index(YoutubePlaylistRepository $youtubePlaylistRepository): Response
    {
        return $this->render('tools/youtube_playlist/index.html.twig', [
            'youtube_playlists' => $youtubePlaylistRepository->findAll(),
            'current_group'     => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/new", name="TOOLS_YOUTUBE_PLAYLIST_NEW", methods={"GET","POST"})
     */
    public function new(
        Request $request,
        YoutubePlaylistPopulator $youtubePlaylistPopulator
    ): Response
    {
        $youtubePlaylist = new YoutubePlaylist();
        $form            = $this->createForm(YoutubePlaylistType::class, $youtubePlaylist);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $youtubePlaylistPopulator->populate($youtubePlaylist);
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($youtubePlaylist);
            $entityManager->flush();
            dump($youtubePlaylist);

//            return $this->redirectToRoute('TOOLS_YOUTUBE_PLAYLIST_INDEX');
        }

        return $this->render('tools/youtube_playlist/new.html.twig', [
            'youtube_playlist' => $youtubePlaylist,
            'form'             => $form->createView(),
            'current_group'    => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="TOOLS_YOUTUBE_PLAYLIST_SHOW", methods={"GET"})
     */
    public function show(YoutubePlaylist $youtubePlaylist): Response
    {
        return $this->render('tools/youtube_playlist/show.html.twig', [
            'youtube_playlist' => $youtubePlaylist,
            'current_group'    => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="TOOLS_YOUTUBE_PLAYLIST_EDIT", methods={"GET","POST"})
     */
    public function edit(Request $request, YoutubePlaylist $youtubePlaylist): Response
    {
        $form = $this->createForm(YoutubePlaylistType::class, $youtubePlaylist);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('TOOLS_YOUTUBE_PLAYLIST_INDEX');
        }

        return $this->render('tools/youtube_playlist/edit.html.twig', [
            'youtube_playlist' => $youtubePlaylist,
            'form'             => $form->createView(),
            'current_group'    => self::CURRENT_GROUP,
        ]);
    }

    /**
     * @Route("/{id}", name="TOOLS_YOUTUBE_PLAYLIST_DELETE", methods={"DELETE"})
     */
    public function delete(Request $request, YoutubePlaylist $youtubePlaylist): Response
    {
        if ($this->isCsrfTokenValid('delete' . $youtubePlaylist->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($youtubePlaylist);
            $entityManager->flush();
        }

        return $this->redirectToRoute('TOOLS_YOUTUBE_PLAYLIST_INDEX');
    }
}
