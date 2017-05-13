import { combineReducers } from "redux";
import patchNotes from "../patchNotes/reducers/";
import usertop from "../User/reducers/";
import nav from "../Navigation/reducers/";
import stickers from "../StickersTrigger/reducers/";
import notifications from "../Notifications/reducers/";

export default combineReducers({
	patchNotes,
	nav,
	notifications,
	stickers,
	usertop
});