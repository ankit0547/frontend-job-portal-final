import { combineReducers } from "redux";
import { ApplicationState } from "./redux/reducers/applicationState";

const AppRootReducer = combineReducers({
  ApplicationState,
});

export default AppRootReducer;
