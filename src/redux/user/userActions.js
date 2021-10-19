import axios from "axios";
import {
  GET_USERS_REQUEST,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE,
  ADD_USER_REQUEST,
  ADD_USER_SUCCESS,
  ADD_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_FAILURE,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT_SUCCESS,
  DELETE_ALL_USERS,
  DELETE_CURRENT_USER,
} from "./userTypes";

//SYNCHRONOUS ACTION CALLS

export const getUsersRequest = () => {
  return {
    type: GET_USERS_REQUEST,
  };
};

export const getUsersSuccess = (users) => {
  return {
    type: GET_USERS_SUCCESS,
    payload: users,
  };
};

export const getUsersFailure = (error) => {
  return {
    type: GET_USERS_FAILURE,
    payload: error,
  };
};

export const addUserRequest = () => {
  return {
    type: ADD_USER_REQUEST,
  };
};

export const addUserSuccess = (users) => {
  return {
    type: ADD_USER_SUCCESS,
    payload: users,
  };
};

export const addUserFailure = (error) => {
  return {
    type: ADD_USER_FAILURE,
    payload: error,
  };
};

export const updateUserRequest = () => {
  return {
    type: UPDATE_USER_REQUEST,
  };
};

export const updateUserSuccess = (user) => {
  return {
    type: UPDATE_USER_SUCCESS,
    payload: user,
  };
};

export const updateUserFailure = (error) => {
  return {
    type: UPDATE_USER_FAILURE,
    payload: error,
  };
};

export const userLoginSuccess = (user) => {
  return {
    type: USER_LOGIN_SUCCESS,
    payload: user,
  };
};

export const userLogoutSuccess = () => {
  return {
    type: USER_LOGOUT_SUCCESS,
  };
};

export const deleteAllUsers = () => {
  return {
    type: DELETE_ALL_USERS,
  };
};

export const deleteCurrentUser = () => {
  return {
    type: DELETE_CURRENT_USER,
  };
};

//ASYNCHRONOUS ACTION CALLS

export const getUsers = () => {
  return (dispatch) => {
    dispatch(getUsersRequest());
    axios
      .get("https://listenify-player.herokuapp.com/users")
      .then((response) => {
        dispatch(getUsersSuccess(response.data));
      })
      .catch((error) => dispatch(getUsersFailure(error)));
  };
};

export const addUser = (users) => {
  return (dispatch) => {
    dispatch(addUserRequest());
    const url = "https://listenify-player.herokuapp.com/users";
    axios
      .post(url, users)
      .then((response) => {
        dispatch(addUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(addUserFailure(error));
      });
  };
};

export const updateUser = (id, user) => {
  return (dispatch) => {
    dispatch(updateUserRequest());
    axios
      .put(`https://listenify-player.herokuapp.com/users/${id}`, user)
      .then((response) => {
        dispatch(updateUserSuccess(response.data));
      })
      .catch((error) => {
        dispatch(updateUserFailure(error));
      });
  };
};
