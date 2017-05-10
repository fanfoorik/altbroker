import ajax from 'js/ajax';  
import { api_url } from "path.js";


export default () => (dispatch, getState) => {

    let { recoverEmail } = getState().auth;
    let { email } = recoverEmail;

    ( recoverEmail.form.touch || dispatch({type:"RECOVER_EMAIL_SUBMIT_TOUCH"}) )

    if( email.valid ){

        dispatch({type:"RECOVER_EMAIL_SUBMIT_START"});

        //Отправление эмейл для смены пароля
        ajax.post(api_url+'user/user_send_checkword/', {
            "USER_LOGIN":email.value
        })
        .then( res => {

            let message = res.data.ANSWER.MESSAGE;

            dispatch({
                type:"RECOVER_EMAIL_SUBMIT_SUCCESS",
                payload:message
            });
            
            //from authReducer
            dispatch({type:"RECOVER_EMAIL_SUCESS_PANEL"});

        })
        .catch(function(error){

            if(error.response && error.response.data &&  error.response.data.ERRORS){
            
                let errors = error.response.data.ERRORS;
                
                dispatch({
                    type:"RECOVER_EMAIL_SUBMIT_ERROR",
                    payload:errors[0].MESSAGE
                });

                return;
            }

            dispatch({
                type:"RECOVER_EMAIL_SUBMIT_ERROR",
                payload:"Неизвестная ошибка."
            });
        });

    }

}
