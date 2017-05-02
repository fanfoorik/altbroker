import { combineReducers } from "redux";

import login from "./reducers/loginReducer";
import auth from "./reducers/authReducer";
import recoverEmail from "./reducers/recoverEmailReducer";
import recoverPassword from "./reducers/recoverPasswordReducer";

import authenticate from "./pages/auth/reducers";

// const authenticate = combineReducers({
// 	auth,
// 	login,
// 	recoverEmail,
// 	recoverPassword
// });

export default combineReducers({
	authenticate,
	auth,
	login,
	recoverEmail,
	recoverPassword
});