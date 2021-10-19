import axios from "axios";
import {
  FETCH_ALL_PLAYLISTS_REQUEST,
  FETCH_ALL_PLAYLISTS_SUCCESS,
  FETCH_ALL_PLAYLISTS_FAILURE,
  ADD_PLAYLIST_REQUEST,
  ADD_PLAYLIST_SUCCESS,
  ADD_PLAYLIST_FAILURE,
  UPDATE_PLAYLIST_REQUEST,
  UPDATE_PLAYLIST_SUCCESS,
  UPDATE_PLAYLIST_FAILURE,
  DELETE_PLAYLIST_REQUEST,
  DELETE_PLAYLIST_SUCCESS,
  DELETE_PLAYLIST_FAILURE,
} from "./playlistTypes";

//SYNC ACTION CREATORS
export const fetchAllPlaylistsRequest = () => {
  return {
    type: FETCH_ALL_PLAYLISTS_REQUEST,
  };
};

export const fetchAllPlaylistsSuccess = (playlists) => {
  return {
    type: FETCH_ALL_PLAYLISTS_SUCCESS,
    payload: playlists,
  };
};

export const fetchAllPlaylistsFailure = (error) => {
  return {
    type: FETCH_ALL_PLAYLISTS_FAILURE,
    payload: error,
  };
};

export const addPlaylistRequest = () => {
  return {
    type: ADD_PLAYLIST_REQUEST,
  };
};

export const addPlaylistSuccess = (playlist) => {
  return {
    type: ADD_PLAYLIST_SUCCESS,
    payload: playlist,
  };
};

export const addPlaylistFailure = (error) => {
  return {
    type: ADD_PLAYLIST_FAILURE,
    payload: error,
  };
};

export const updatePlaylistRequest = () => {
  return {
    type: UPDATE_PLAYLIST_REQUEST,
  };
};

export const updatePlaylistSuccess = (playlist) => {
  return {
    type: UPDATE_PLAYLIST_SUCCESS,
    payload: playlist,
  };
};

export const updatePlaylistFailure = (error) => {
  return {
    type: UPDATE_PLAYLIST_FAILURE,
    payload: error,
  };
};

export const deletePlaylistRequest = () => {
  return {
    type: DELETE_PLAYLIST_REQUEST,
  };
};

export const deletePlaylistSuccess = (id) => {
  return {
    type: DELETE_PLAYLIST_SUCCESS,
    payload: id,
  };
};

export const deletePlaylistFailure = (error) => {
  return {
    type: DELETE_PLAYLIST_FAILURE,
    payload: error,
  };
};

//ASYNC ACTION CREATORS
export const getAllPlaylists = () => {
  return (dispatch) => {
    dispatch(fetchAllPlaylistsRequest());
    axios
      .get("https://listenify-player.herokuapp.com/playlists")
      .then((response) => {
        dispatch(fetchAllPlaylistsSuccess(response.data));
      })
      .catch((error) => dispatch(fetchAllPlaylistsFailure(error)));
  };
};

export const addPlaylist = (playlistData) => {
  return (dispatch) => {
    dispatch(addPlaylistRequest());
    axios
      .post("https://listenify-player.herokuapp.com/playlists", playlistData)
      .then((response) => {
        dispatch(addPlaylistSuccess(response.data));
      })
      .catch((error) => dispatch(addPlaylistFailure(error)));
  };
};

export const updatePlaylist = (id, playlist) => {
  return (dispatch) => {
    dispatch(updatePlaylistRequest());

    axios
      .put(`https://listenify-player.herokuapp.com/playlists/${id}`, playlist)
      .then((response) => {
        dispatch(updatePlaylistSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updatePlaylistFailure(error));
      });
  };
};

export const deletePlaylist = (id) => {
  console.log("reached delete playlist", id);
  return (dispatch) => {
    dispatch(deletePlaylistRequest());
    axios
      .delete(`https://listenify-player.herokuapp.com/playlists/${id}`)
      .then(() => {
        dispatch(deletePlaylistSuccess(id));
      })
      .catch((error) => {
        dispatch(deletePlaylistFailure(error));
      });
  };
};
