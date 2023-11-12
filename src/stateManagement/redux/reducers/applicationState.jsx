/* eslint-disable no-debugger */
import { commonTypes } from "../actions/commonActions";

const initState = {
  isLoaded: false,
  testData: null,
};

export const ApplicationState = (state = initState, action = null) => {
  const { data } = action;
  switch (action.type) {
    case commonTypes.APPLICATION_LOADED:
      return {
        ...state,
        isLoaded: action.data.isLoaded,
      };
    case commonTypes.SET_TEST_DATA:
      return {
        ...state,
        testData: data,
      };
    default:
      return state;
  }
};
