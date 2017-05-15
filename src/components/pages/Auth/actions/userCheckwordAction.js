
export default value => (dispatch, getState) => {

    // from recoverPasswordReducer
    dispatch({
        type:"RECOVER_CHECKWORD",
        payload:{
            "login":value.USER_LOGIN,
            "checkword":value.USER_CHECKWORD
        }
    });

    //from authReducer
    dispatch({type:"USER_CHECKWORD_PANEL"});

};
