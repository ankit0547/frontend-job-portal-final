export const authActionTypes = {
  GET_SIGN_IN: "GET_SIGN_IN",
  SET_AUTH_TOKEN: "SET_AUTH_TOKEN",
  CLEAR_TOKEN: "CLEAR_TOKEN",
};

export const clearTokenAction = () => ({
  type: authActionTypes.CLEAR_TOKEN,
  data: { auth_token: "" },
});
