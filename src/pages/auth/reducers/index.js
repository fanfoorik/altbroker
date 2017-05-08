import { combineReducers } from "redux";
import auth from "./authReducer";
import login from "../Login/reducers";
import recoverEmail from "../recoverEmail/reducers";
import recoverPassword from "../RecoverPassword/reducers";

const authenticate = combineReducers({
	auth,
	login,
	recoverEmail,
	recoverPassword
});

export default authenticate;