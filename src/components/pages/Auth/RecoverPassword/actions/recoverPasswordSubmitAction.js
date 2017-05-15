import ajax from 'utils/ajax';
import { apiUrl } from 'utils/urls.js';


export default () => (dispatch, getState) => {

    let { password } = getState().auth.recoverPassword;
    let { confirm } = getState().auth.recoverPassword;
    let { form } = getState().auth.recoverPassword;
    let { user } = getState().auth.recoverPassword;

    if(!form.touch) dispatch({type:"RECOVER_PASSWORD_SUBMIT_TOUCH"})

    if( password.valid && confirm.valid ){

    	dispatch({type:"RECOVER_PASSWORD_SUBMIT_START"});

    	ajax.post(apiUrl+'user/user_change_pass/', {
			"USER_LOGIN":user.login,
			"USER_CHECKWORD":user.checkword,
			"USER_PASS":password.value
		})
		.then(function(res){
			
			let message = res.data.ANSWER.MESSAGE;

			dispatch({
				type:"RECOVER_PASSWORD_SUBMIT_SUCCESS",
				payload:message
			});
			
			//from authReducer
			dispatch({
				type:"RECOVER_PASSWORD_SUCCESS_PANEL",
				payload:message
			});
		})
		.catch(function(error){

			if(error.response.data.ERRORS){

				let message = error.response.data.ERRORS[0].MESSAGE;

				dispatch({
					type:"RECOVER_PASSWORD_SUBMIT_ERROR",
					payload:message
				});

				return;
			}

			let message = error.response.statusText;

			dispatch({
				type:"RECOVER_PASSWORD_SUBMIT_ERROR",
				payload:message
			});

		});		
    }
}
