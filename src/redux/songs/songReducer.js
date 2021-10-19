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

const initialState = {
  loading: true,
  songs: [],
  //song: {},
  error: "",
};

let songs = [];

const songReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SONGS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SONGS_SUCCESS:
      return {
        loading: false,
        songs: action.payload,
        //song: {},
        error: "",
      };

    case GET_SONGS_FAILURE:
      return {
        loading: false,
        songs: [],
        //song: {},
        error: action.payload,
      };

    case ADD_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        songs: [],
        error: "",
      };

    case ADD_SONG_SUCCESS:
      songs = state.songs.concat(action.payload);
      console.log("Adding Songs", songs);
      return {
        ...state,
        loading: false,
        songs: songs,
        error: "",
      };

    case ADD_SONG_FAILURE:
      return {
        loading: false,
        songs: [],
        error: action.payload,
      };

    case DELETE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_SONG_SUCCESS:
      /* const ids = state.songs.map((song) => song.id);
      songs = state.songs.slice(0, ids.indexOf(action.payload));
      songs = songs.concat([
        ...state.songs.slice(ids.indexOf(action.payload) + 1),
      ]); */
      const ids = state.songs.map((song) => song.id);
      songs = state.songs.slice(0, ids.indexOf(action.payload));
      songs = songs.concat([
        ...state.songs.slice(ids.indexOf(action.payload) + 1),
      ]);

      return {
        loading: false,
        songs: songs,
        error: "",
      };

    case DELETE_SONG_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case UPDATE_SONG_REQUEST:
      return {
        ...state,
        loading: true,
        songs: songs,
      };

    case UPDATE_SONG_SUCCESS:
      return {
        ...state,
        loading: false,
        songs: songs,
        error: "",
      };

    case UPDATE_SONG_FAILURE:
      return {
        ...state,
        loading: false,
        songs: [],
        error: "",
      };

    default:
      return state;
  }
};

export default songReducer;
