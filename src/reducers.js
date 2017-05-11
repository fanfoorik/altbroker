import { combineReducers } from "redux";

import login from "./reducers/loginReducer";
import recoverEmail from "./reducers/recoverEmailReducer";
import recoverPassword from "./reducers/recoverPasswordReducer";

import auth from "./pages/auth/reducers";
import header from "./components/header/reducers/index.js";


export default combineReducers({
	auth,
	header
});