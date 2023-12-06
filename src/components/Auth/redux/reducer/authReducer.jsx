/* eslint-disable no-debugger */
import { authActionTypes } from "../actions/AuthActionTypes";

const initState = {
  auth_token: "",
  serverErrors: null,
};

export const AuthState = (state = initState, action = null) => {
  const { data } = action;
  debugger;
  switch (action.type) {
    case authActionTypes.SET_AUTH_TOKEN:
      return {
        ...state,
        auth_token: data,
      };
    case authActionTypes.SET_SERVER_ERRORS:
      return {
        ...state,
        serverErrors: data,
      };
    default:
      return state;
  }
};
