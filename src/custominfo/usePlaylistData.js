import axios from "axios";
import React, { useState, useEffect } from "react";

const usePlaylistData = (playlistID, songsObj) => {
  const [playlist, setPlaylist] = useState({});
  const [songsInPlaylist, setSongsInPlaylist] = useState([]);

  const fetchPlaylistData = (id) => {
    axios
      .get(`http://localhost:3007/playlists/${id}`)
      .then((response) => {
        setPlaylist(response.data);
        getSongsFromPlaylist(response.data);
      })
      .catch((error) => {
        console.log("WE HAVE GOT AN ERROR SAYING", error);
      });
  };

  const getSongsFromPlaylist = (playlist) => {
    console.log("ALL SONGS", songsObj);
    const playlistSongIDs = playlist.songIDs;
    console.log("Song IDs of Playlist", playlistSongIDs);
    const songsArr = songsObj.songs.map((song) => song.id);
    console.log("ARRAY OF SONGS", ...songsArr);
    let songIndexes = [];
    playlistSongIDs.forEach((id) => songIndexes.push(songsArr.indexOf(id)));
    console.log("POSITIONS OF SONGS IN PLAYLIST", songIndexes);
    setSongsInPlaylist([]);
    songIndexes.forEach((id) => {
      setSongsInPlaylist((myArr) => [...myArr, songsObj.songs[id]]);
    });
  };

  useEffect(() => {
    if (playlistID !== playlist.id) fetchPlaylistData(playlistID);
  }, [playlistID, playlist.id]);
  return [playlist, songsInPlaylist];
};

export default usePlaylistData;
