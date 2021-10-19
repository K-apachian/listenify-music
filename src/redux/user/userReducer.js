import {
  ADD_USER_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  DELETE_ALL_USERS,
  DELETE_CURRENT_USER,
  GET_USERS_FAILURE,
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
} from "./userTypes";

const initialState = {
  isLoggedIn: false,
  loading: true,
  users: [],
  user: {},
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        users: [],
        user: {},
        error: "",
        isLoggedIn: false,
      };
    case GET_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        users: [],
        user: {},
        error: action.payload,
        isLoggedIn: false,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        user: {},
        error: "",
        isLoggedIn: false,
      };
    case ADD_USER_REQUEST:
      return {
        loading: true,
        users: [],
        user: {},
        error: "",
        isLoggedIn: false,
      };

    case ADD_USER_SUCCESS:
      const users = state.users.concat(action.payload);
      return {
        loading: false,
        users: users,
        user: action.payload,
        error: "",
        isLoggedIn: false,
      };

    case ADD_USER_FAILURE:
      return {
        loading: false,
        users: [],
        user: {},
        error: action.payload,
        isLoggedIn: false,
      };

    case UPDATE_USER_REQUEST:
      return {
        loading: true,
        users: [],
        user: {},
        error: "",
        isLoggedIn: true,
      };

    case UPDATE_USER_SUCCESS:
      return {
        loading: false,
        users: [],
        user: action.payload,
        error: "",
        isLoggedIn: true,
      };

    case UPDATE_USER_FAILURE:
      return {
        loading: false,
        users: [],
        user: {},
        error: action.payload,
        isLoggedIn: true,
      };
    case USER_LOGIN_SUCCESS:
      return {
        loading: false,
        users: [],
        user: action.payload,
        error: "",
        isLoggedIn: true,
      };

    case USER_LOGOUT_SUCCESS:
      return {
        loading: false,
        users: [],
        user: {},
        error: "",
        isLoggedIn: false,
      };

    case DELETE_CURRENT_USER:
      return {
        loading: false,
        users: [],
        user: {},
        error: "",
        isLoggedIn: false,
      };

    case DELETE_ALL_USERS:
      return {
        ...state,
        users: [],
      };

    default:
      return state;
  }
};

export default userReducer;
