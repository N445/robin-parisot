<?php

namespace App\Service\Tools;

use App\Entity\Tools\YoutubePlaylist;
use App\Entity\Tools\YoutubeSong;
use Google_Client;
use Google_Service_YouTube;
use Google_Service_YouTube_PlaylistItem;
use Google_Service_YouTube_PlaylistItemListResponse;

class YoutubePlaylistPopulator
{
    /**
     * @var YoutubePlaylist
     */
    private $youtubePlaylist;

    /**
     * @var YoutubeSong[]
     */
    private $videos;

    /**
     * @var Google_Service_YouTube
     */
    private $youtube;

    public function populate(YoutubePlaylist &$youtubePlaylist)
    {
        $this->youtubePlaylist = $youtubePlaylist;

        $this->init();
        $this->action();

        dump($youtubePlaylist);
    }

    private function init()
    {
        $client = new Google_Client();
        $client->setApplicationName("Tools");
        $client->setDeveloperKey("AIzaSyA4MAzjh3AebBAb4uXMBnM224F_x1GJft8");

        $this->youtube = new Google_Service_YouTube($client);
    }

    private function action()
    {
        /** @var Google_Service_YouTube_PlaylistItemListResponse $playlist */
        $playlist = $this->youtube->playlistItems->listPlaylistItems('snippet', [
            'playlistId' => $this->youtubePlaylist->getIdentifier(),
            'maxResults' => 10,
        ]);
        array_map(function ($item) {
            return $this->setVideos($item);
        }, $playlist->getItems());

        while ($playlist->getNextPageToken() ?? null) {
            $playlist = $this->youtube->playlistItems->listPlaylistItems('snippet', [
                'playlistId' => $this->youtubePlaylist->getIdentifier(),
                'maxResults' => 10,
                'pageToken'  => $playlist->getNextPageToken(),
            ]);
            array_map(function ($item) {
                return $this->setVideos($item);
            }, $playlist->getItems());
        }
    }

    private
    function setVideos(Google_Service_YouTube_PlaylistItem $playlistItem)
    {
        $song = (new YoutubeSong())
            ->setName($playlistItem->getSnippet()->getTitle())
            ->setIdentifier($playlistItem->getSnippet()->getResourceId()->getVideoId())
        ;
        $this->youtubePlaylist->addSong($song);
    }
}