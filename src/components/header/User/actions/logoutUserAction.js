import ajax from "js/ajax";
import getHeaders from "js/getHeaders";
import { api_url } from "path.js";

export const logoutUser = url => dispatch => {

	ajax.post(api_url+"user/logout/",{
		LOGIN:""
	},
	{
    	headers:getHeaders()
    })
	.then(res => {
		localStorage.removeItem('login');
		localStorage.removeItem('token');
		dispatch({type: "AUTH_USER", payload: false});
	})
	.catch(function(error){
		console.log("logout error");
	});

	// localStorage.removeItem('login');
	// localStorage.removeItem('token');
	// dispatch({type: "AUTH_USER", payload: false});
};
