
export default (value, confirm) => (dispatch) => {
    
    let password = {
        minLength: value.length > 5,
        lowerCase: !!value.match(/[a-z]/),
        upperCase:!!value.match(/[A-Z]/),
        digit: !!value.match(/[\d]/)
    };

    Object.defineProperty(password, "valid", {
        value: true,
        writable: true,
        enumerable: false
    });

    for( let result in password ){
        if( !password[result] ){
            password.valid = false;
            break;
        }
    }

    dispatch({
        type: "RECOVER_PASSWORD",
        payload:{
            "password":{
                "value":value,
                "minLength":password.minLength,
                "lowerCase":password.lowerCase,
                "upperCase":password.upperCase,
                "digit":password.digit,
                "valid":password.valid
            },
            "confirm":{
                "valid":value === confirm,
            }
        }
    });
}
