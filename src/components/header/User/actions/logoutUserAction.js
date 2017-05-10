// import ajax from "js/ajax";

export const logoutUser = url => dispatch => {
	localStorage.setItem('login', null);
	localStorage.setItem('token', null);
	dispatch({type: "AUTH_USER", payload: false});
};

