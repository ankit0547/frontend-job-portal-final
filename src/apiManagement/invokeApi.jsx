/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { AXIOS } from "./http";

const updateEndPoint = (endPoint, pathParams, queryParms) => {
  let modifiedEndpoint = endPoint;
  if (pathParams) {
    for (const param in pathParams) {
      if (param != null) {
        modifiedEndpoint = modifiedEndpoint.replace(
          `@@${param}`,
          encodeURI(pathParams[param])
        );
      }
    }
  }
  if (queryParms) {
    for (const param in queryParms) {
      if (param != null) {
        modifiedEndpoint = modifiedEndpoint.replace(
          `@@${param}`,
          encodeURI(pathParams[param])
        );
      }
    }
  }
  return modifiedEndpoint;
};

export const invokeApi = async (
  apiOption,
  requestBody = null,
  pathParameters = null,
  queryParams = null,
  headers = {}
) => {
  const header = {};

  let config = { heders: { ...headers, ...header } };
  config = { ...config, ...apiOption };
  let response = null;
  switch (apiOption.type) {
    case "GET":
      response = AXIOS.get(
        updateEndPoint(apiOption.endpoint, pathParameters, queryParams)
      ).then();
      break;
    case "POST":
      response = AXIOS.post(
        updateEndPoint(apiOption.endpoint, pathParameters, queryParams),
        requestBody
      ).then();
      break;

    default:
      break;
  }
  return response
    .then((r) => r)
    .catch((e) => {
      throw e;
    });
};
