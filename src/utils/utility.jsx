/* eslint-disable no-undef */
// get path from public folder
export const getPublicPath = (path) => {
  return `${process.env.PUBLIC_URL}${path}`;
};

// get Dev environment

export const getEnvironment = () => {
  return process.env.REACT_DEV_HOST ? process.env.REACT_DEV_HOST : "";
};
