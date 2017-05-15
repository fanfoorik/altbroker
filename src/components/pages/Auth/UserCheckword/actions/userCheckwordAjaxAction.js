import ajax from 'utils/ajax';
import { apiUrl } from 'utils/urls.js';

export default (user_checkword) => (dispatch, getState) => {

    let { user } = getState().auth.recoverPassword;

    ajax.get(apiUrl+'user/user_change_pass/?USER_LOGIN='+user.login+'&USER_CHECKWORD='+user.checkword+'')
    .then(function(res){

        //from recoverPasswordReducer
        dispatch({type:"RECOVER_CHECKWORD_SUCCESS"});

        //from authReducer
        dispatch({type:"RECOVER_PASSWORD_PANEL"});

    })
    .catch(function(error){
        dispatch({type:"RECOVER_CHECKWORD_ERROR"});
    });

};
