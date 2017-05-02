
export default value => (dispatch) => {
    
    if(value.length < 5){
        
        dispatch({
            type:"LOGIN_SET_PASSWORD",
            payload: {
                "value":value,
                "valid":false
            }
        });
        
    } else {

        dispatch({
            type:"LOGIN_SET_PASSWORD",
            payload: {
                "value":value,
                "valid":true
            }
        });
    }
}
