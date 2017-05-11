import { combineReducers } from "redux";
import patchNotes from "../patchNotes/reducers/";
import usertop from "../User/reducers/";
import nav from "../Navigation/reducers/";
import stickers from "../Stickers/reducers/";

export default combineReducers({
	patchNotes,
	nav,
	stickers,
	usertop
});