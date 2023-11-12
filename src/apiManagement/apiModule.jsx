const apiModule = {
  GET_TEST_API: {
    apiKey: "GET_TEST_API",
    endpoint: "https://gorest.co.in/public/v2/users",
    type: "GET",
    authorizationRequired: false,
    showLoading: false,
  },
  GET_USER_SIGN_IN: {
    apiKey: "GET_USER_SIGN_IN",
    endpoint: "http://localhost:5000/api/v1/auth/login",
    type: "POST",
    authorizationRequired: false,
    showLoading: false,
  },
};

export default apiModule;
