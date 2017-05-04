import ajax from "js/ajax";

export const fetchPatchNotes = url => dispatch => {

    ajax.get(url)
		.then(res => res.data)
		.then(data => {
			
			let patchNotes = data.ANSWER;

			dispatch({
				type: "SET_PATCH_NOTES",
				payload:patchNotes
			});
		})
		.catch(function(error){
			console.log('fetch init error -',error);
		});
};

export const triggerPatchNotes = () => {
	return {type: "TRIGGER_PATCH_NOTES"}
};
