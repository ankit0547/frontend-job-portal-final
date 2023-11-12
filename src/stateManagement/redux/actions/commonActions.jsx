export const commonTypes = {
  APPLICATION_LOAD_REQ: "APPLICATION_LOAD_REQ",
  APPLICATION_LOADED: "APPLICATION_LOADED",
  PROCESSING_INITIATED: "START_PROCESSING",
  PROCESSING_COMPLETED: "PROCESSING_FINISHED",
  GET_TEST: "GET_TEST",
  SET_TEST_DATA: "GET_TEST_DATA",
};

export const applicationLoadedSucessfully = () => ({
  type: commonTypes.APPLICATION_LOADED,
  data: { isLoaded: true },
});
export const applicationFailedToLoad = () => ({
  type: commonTypes.APPLICATION_LOADED,
  data: { isLoaded: false },
});
export const processingStarted = () => ({
  type: commonTypes.PROCESSING_INITIATED,
  data: {},
});
export const processingCompleted = () => ({
  type: commonTypes.PROCESSING_COMPLETED,
  data: {},
});
