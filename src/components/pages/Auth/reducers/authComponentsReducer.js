const initialState = {
	"authenticated":false,
	"login":true,
	"recoverEmail":false,
	"recoverEmailSuccess":false,
	"recoverPassword":false,
	"recoverPasswordSuccess":false,
	"userCheckword":false
};

export default function(state = initialState, action){
	switch(action.type){

		case "AUTH_USER":
			return {
				...state,
				"authenticated":action.payload
			}

		case "LOGIN_PANEL":
			return {
				...state,
				"login":true,
				"recoverEmail":false,
				"recoverEmailSuccess":false,
				"recoverPassword":false,
				"recoverPasswordSuccess":false,
				"userCheckword":false
			}

		case "RECOVER_EMAIL_PANEL":
			return {
				...state,
				"login":false,
				"recoverEmail":true,
				"recoverEmailSuccess":false,
				"recoverPassword":false,
				"recoverPasswordSuccess":false,
				"userCheckword":false
			}

		case "RECOVER_EMAIL_SUCESS_PANEL":
			return {
				...state,
				"login":false,
				"recoverEmail":false,
				"recoverEmailSuccess":true,
				"recoverPassword":false,
				"recoverPasswordSuccess":false,
				"userCheckword":false
			}

		case "USER_CHECKWORD_PANEL":
			return {
				...state,
				"login":false,
				"recoverEmail":false,
				"recoverEmailSuccess":false,
				"recoverPassword":false,
				"recoverPasswordSuccess":false,
				"userCheckword":true
			}

		case "RECOVER_PASSWORD_PANEL":
			return {
				...state,
				"login":false,
				"recoverEmail":false,
				"recoverEmailSuccess":false,
				"recoverPassword":true,
				"recoverPasswordSuccess":false,
				"userCheckword":false
			}

		case "RECOVER_PASSWORD_SUCCESS_PANEL":
			return {
				...state,
				"login":false,
				"recoverEmail":false,
				"recoverEmailSuccess":false,
				"recoverPassword":false,
				"recoverPasswordSuccess":true,
				"userCheckword":false
			}

		default:
			return state;
	}
}