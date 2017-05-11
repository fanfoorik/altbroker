import ajax from "js/ajax";
import handleError from "js/handleError";

export const fetchPatchNotes = url => dispatch => {

    ajax.get(url, {
    	headers:{
			"login": localStorage.getItem('login'),
			"token": localStorage.getItem('token')    
		}
    })
		.then(res => res.data)
		.then(data => {
			
			let patchNotes = data.ANSWER;

			dispatch({
				type: "SET_PATCH_NOTES",
				payload:patchNotes
			});
		})
		.catch(function(error){
			handleError(error, dispatch);
		});
};

export const triggerPatchNotes = () => {
	return {type: "TRIGGER_PATCH_NOTES"}
};
