import { combineReducers } from "redux";

import login from "./reducers/loginReducer";
// import auth from "./reducers/authReducer";
import recoverEmail from "./reducers/recoverEmailReducer";
import recoverPassword from "./reducers/recoverPasswordReducer";

import auth from "./pages/auth/reducers";
import header from "./components/header/reducers/index.js";

// const authenticate = combineReducers({
// 	auth,
// 	login,
// 	recoverEmail,
// 	recoverPassword
// });

export default combineReducers({
	auth,
	header,
	// auth,
	// login,
	// recoverEmail,
	// recoverPassword
});