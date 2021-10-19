import axios from "axios";
import {
  ADD_SONG_SUCCESS,
  ADD_SONG_REQUEST,
  ADD_SONG_FAILURE,
  DELETE_SONG_FAILURE,
  DELETE_SONG_REQUEST,
  DELETE_SONG_SUCCESS,
  GET_SONGS_FAILURE,
  GET_SONGS_REQUEST,
  GET_SONGS_SUCCESS,
  UPDATE_SONG_FAILURE,
  UPDATE_SONG_REQUEST,
  UPDATE_SONG_SUCCESS,
} from "./songTypes";

//SYNCHRONOUS CALLS

export const getSongsRequest = () => {
  return {
    type: GET_SONGS_REQUEST,
  };
};

export const getSongsSuccess = (songs) => {
  return {
    type: GET_SONGS_SUCCESS,
    payload: songs,
  };
};
export const getSongsFailure = (error) => {
  return {
    type: GET_SONGS_FAILURE,
    payload: error,
  };
};
export const addSongRequest = () => {
  return {
    type: ADD_SONG_REQUEST,
  };
};

export const addSongSuccess = (song) => {
  return {
    type: ADD_SONG_SUCCESS,
    payload: song,
  };
};

export const addSongFailure = (error) => {
  return {
    type: ADD_SONG_FAILURE,
    payload: error,
  };
};

export const updateSongRequest = () => {
  return {
    type: UPDATE_SONG_REQUEST,
  };
};

export const updateSongSuccess = (song) => {
  return {
    type: UPDATE_SONG_SUCCESS,
    payload: song,
  };
};

export const updateSongFailure = (error) => {
  return {
    type: UPDATE_SONG_FAILURE,
    payload: error,
  };
};

export const deleteSongRequest = () => {
  return {
    type: DELETE_SONG_REQUEST,
  };
};

export const deleteSongSuccess = (id) => {
  return {
    type: DELETE_SONG_SUCCESS,
    payload: id,
  };
};

export const deleteSongFailure = (error) => {
  return {
    type: DELETE_SONG_FAILURE,
    payload: error,
  };
};

//ASYNCHRONOUS CALLS

export const getSongs = () => {
  return (dispatch) => {
    dispatch(getSongsRequest());
    const url = "https://listenify-player.herokuapp.com/songs";
    axios
      .get(url)
      .then((response) => {
        const songs = response.data;
        dispatch(getSongsSuccess(songs));
      })
      .catch((error) => {
        dispatch(getSongsFailure(error));
      });
  };
};

export const addSong = (song) => {
  return (dispatch) => {
    console.log("REACHED SONG ", song);
    dispatch(addSongRequest());
    const url = "https://listenify-player.herokuapp.com/songs";
    axios
      .post(url, song)
      .then((response) => {
        const songData = response.data;
        dispatch({
          type: ADD_SONG_SUCCESS,
          payload: songData,
        });
      })
      .catch((error) => {
        dispatch(addSongFailure(error));
      });
  };
};

export const updateSong = (id, song) => {
  return (dispatch) => {
    dispatch(updateSongRequest());
    axios
      .put(`https://listenify-player.herokuapp.com/songs/${id}`, song)
      .then((response) => {
        dispatch(updateSongSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateSongFailure(error));
      });
  };
};

export const deleteSong = (id) => {
  return (dispatch) => {
    dispatch(deleteSongRequest());
    axios
      .delete(`https://listenify-player.herokuapp.com/songs/${id}`)
      .then(() => {
        dispatch(deleteSongSuccess(id));
      })
      .catch((error) => {
        dispatch(deleteSongFailure(error));
      });
  };
};
