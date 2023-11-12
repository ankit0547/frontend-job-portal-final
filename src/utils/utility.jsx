/* eslint-disable no-undef */
// get path from public folder
export const getPublicPath = (path) => {
  return `${process.env.PUBLIC_URL}${path}`;
};

// get Dev environment

export const getEnvironment = () => {
  return process.env.REACT_DEV_HOST ? process.env.REACT_DEV_HOST : "";
};

export const getAuthToken = () => {
  const token = localStorage.getItem("auth-token");
  return token;
};
export const clearAuthToken = () => {
  const token = localStorage.removeItem("auth-token");
  return token;
};
