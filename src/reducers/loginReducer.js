const initialState = {
	"form":{
		"loading": false,
		"touch":false,
		"error":false,
		"message":""
	},
	"email":{
		"value":"",
		"valid":false,
		"message":"Введите корректрый E-mail"
	},
	"password":{
		"value":"",
		"valid":false,
		"message":"Введите пароль (мин. 5 символов)"
	},
	"captcha":{
		"active":false,
		"loading":false,
		"value":"",
		"sid":"",
		"image":""
	}
};

export default function(state = initialState, action){
	switch(action.type){

		//email
		case "LOGIN_SET_EMAIL":
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

		//password
		case "LOGIN_SET_PASSWORD":
			return {
				...state,
				"password":{
					...state.password,
					"value":action.payload.value,
					"valid":action.payload.valid
				},
				"form":{
					...state.form,
					"error":false
				}
			}

		//captcha
		case "SET_CAPTCHA_VALUE":
			return {
				...state,
				"captcha":{
					...state.captcha,
					"value": action.payload
				}
			}

		case "SET_CAPTCHA_ACTIVE":
			return {
				...state,
				"captcha":{
					...state.captcha,
					"active":true,
					"value":"",
					"sid":action.payload.sid,
					"image":action.payload.image
				},
				"form":{
					...state.form,
					"loading": false,
				}
			}

		case "CAPTCHA_REFRESH_START":
			return {
				...state,
				"captcha":{
					...state.captcha,
					"loading":true
				}
			}

		case "CAPTCHA_REFRESH_END":

			return {
				...state,
				"captcha":{
					...state.captcha,
					"loading":false,
					"value":"",
					"sid":action.payload.sid,
					"image":action.payload.image
				}
			}

		//form submit
		case "LOGIN_SUBMIT_TOUCH":
			return {
				...state,
				"form":{
					...state.form,
					"touch":true,
				}
			}

		case "LOGIN_SUBMIT_START":
			return {
				...state,
				"form":{
					...state.form,
					"loading":true,
					"error":false
				}
			}

		case "LOGIN_SUBMIT_ERROR":
			return {
				...state,
				"form":{
					...state.form,
					"loading":false,
					"error":true,
					"message":action.payload
				}
			}

		case "LOGIN_SUBMIT_SUCCESS":
			return {
				...state,
				"form":{
					...state.form,
					"touch":false,
					"loading":false,
					"error":false,
					"message":""
				},
				"password":{
					...state.password,
					"value":"",
					"valid":false,
				},
				"captcha":{
					...state.captcha,
					"active":false,
					"value":"",
					"sid":"",
					"image":""
				}
			}

		default:
			return state;
	}
}