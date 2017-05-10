import { combineReducers } from "redux";
import patchNotes from "../patchNotes/reducers/";
import user from "../User/reducers/";
import nav from "../Navigation/reducers/";

export default combineReducers({
	patchNotes,
	user,
	nav
});