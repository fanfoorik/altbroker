import isEmail from 'validator/lib/isEmail';

export default value => (dispatch, getState) => {

    if(isEmail(value)){

        dispatch({
            type:"RECOVER_EMAIL",
            payload: {
                "value":value,
                "valid":true
            }
        });

    } else {

        dispatch({
            type:"RECOVER_EMAIL",
            payload: {
                "value":value,
                "valid":false
            }
        });
    }
}
