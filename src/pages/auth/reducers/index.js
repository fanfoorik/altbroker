import { combineReducers } from "redux";
import activeComponent from "./activeComponentReducer";

const authenticate = combineReducers({
	activeComponent
});

export default authenticate;