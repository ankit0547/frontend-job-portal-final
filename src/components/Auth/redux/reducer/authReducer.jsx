/* eslint-disable no-debugger */
import { authActionTypes } from "../actions/AuthActionTypes";

const initState = {
  auth_token: "",
};

export const AuthState = (state = initState, action = null) => {
  const { data } = action;
  switch (action.type) {
    case authActionTypes.SET_AUTH_TOKEN:
      return {
        ...state,
        auth_token: data,
      };
    default:
      return state;
  }
};
