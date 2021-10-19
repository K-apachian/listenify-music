import { combineReducers } from "redux";
import songReducer from "./songs/songReducer";
import userReducer from "./user/userReducer";
import playlistReducer from "./playlist/playlistReducer";

const rootReducer = combineReducers({
  user: userReducer,
  song: songReducer,
  playlist: playlistReducer,
});

export default rootReducer;
