const initialState = {
	"form":{
		"touch":false,
		"loading": false,
		"successMessage":"",
		"error":false,
		"message":""
	},
	"email":{
		"value":"",
		"valid":false,
		"message":"Введите корректрый E-mail"
	}
};

export default function(state = initialState, action){
	switch(action.type){

		//email
		case "RECOVER_EMAIL":
			return {
				...state,
				"email":{
					...state.email,
					"value":action.payload.value,
					"valid":action.payload.valid
				},
				"form":{
					...state.form,
					"error":false
				}
			}

		//form
		case "RECOVER_EMAIL_SUBMIT_TOUCH":
			return {
				...state,
				"form":{
					...state.form,
					"touch":true
				}
			}

		case "RECOVER_EMAIL_SUBMIT_START":
			return {
				...state,
				"form":{
					...state.form,
					"loading":true,
					"successMessage":"",
					"error":false,
				}
			}

		case "RECOVER_EMAIL_SUBMIT_ERROR":

			return {
				...state,
				"form":{
					...state.form,
					"loading":false,
					"error":true,
					"message":action.payload
				}
			}

		case "RECOVER_EMAIL_SUBMIT_SUCCESS":
			return {
				...state,
				"form":{
					...state.form,
					"touch":false,
					"loading":false,
					"error":false,
					"message":"",
					"successMessage":action.payload,
				}
			}

		default:
			return state;
	}
}