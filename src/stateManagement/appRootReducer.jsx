import { combineReducers } from "redux";
import { ApplicationState } from "./redux/reducers/applicationState";
import { AuthState } from "../components/Auth/redux/reducer/authReducer";

const AppRootReducer = combineReducers({
  ApplicationState,
  AuthState,
});

export default AppRootReducer;
