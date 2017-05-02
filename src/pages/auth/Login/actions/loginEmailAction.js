import isEmail from 'validator/lib/isEmail';

export default value => (dispatch) => {
    
    if(isEmail(value)){
        dispatch({
            type:"LOGIN_SET_EMAIL",
            payload: {
                "value":value,
                "valid":true
            }
        });
        
    } else {

        dispatch({
            type:"LOGIN_SET_EMAIL",
            payload: {
                "value":value,
                "valid":false
            }
        });
    }
}
