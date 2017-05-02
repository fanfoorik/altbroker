
export default (value, password) => (dispatch) => {
    
    dispatch({
        type: "RECOVER_PASSWORD_CONFIRM",
        payload:{
            "value":value,
            "valid":value === password
        }
    });
};
