import { combineReducers } from "redux";
import patchNotes from "../patchNotes/reducers/";
import user from "../User/reducers/";

export default combineReducers({
	patchNotes,
	user
});