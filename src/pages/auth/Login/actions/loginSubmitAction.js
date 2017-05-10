// import axios from 'axios';  
import ajax from 'js/ajax';  
import md5 from "md5";
import { api_url } from "path.js";

export default () => (dispatch, getState) => {

    let {login} = getState().auth;

    if(!login.form.touch) dispatch({type:"LOGIN_SUBMIT_TOUCH"});

    if(login.email.valid && login.password.valid){

        dispatch({type:"LOGIN_SUBMIT_START"});

        //Запрос на получение соли

        // axios.post(api_url+'http://alterainvest.ru:8080/api/v2/altbroker3/user/login/ ', {
        ajax.post(api_url+'user/login/ ', {
            LOGIN: login.email.value
        })
        .then(function(res){

            let salt =  res.data.ANSWER.SOLD;

            let loginData = {
                LOGIN: login.email.value,
                PASSWORD: salt + md5((salt+login.password.value))
            };

            if( login.captcha.active ){
                loginData.CAPTCHA_SID = login.captcha.sid;
                loginData.CAPTCHA_WORD = login.captcha.value;
            }

            //Запрос на авторизацию
            ajax.post(api_url+'user/login/', loginData)
            .then(function(response){

                if( response.data && response.data.ANSWER && response.data.ANSWER.CAPCHA_SID ){

                    let captcha = response.data.ANSWER;

                    dispatch({
                        type:"SET_CAPTCHA_ACTIVE",
                        payload:{
                            "sid":captcha.CAPCHA_SID,
                            "image":captcha.CAPCHA_URL
                        }
                    });

                    return;
                }

                let user = response.data.ANSWER.USER;
                let token = response.data.ANSWER.TOKEN;

                if(user && token){

                    localStorage.setItem('login', user.LOGIN);
                    localStorage.setItem('token', token);

                    dispatch({type:"LOGIN_SUBMIT_SUCCESS"});
                    dispatch({type: "AUTH_USER", payload: true});
                }
            })
            .catch(function (error) {

                //Ошибка авторизации
                handleSubmitError(error);
            });

        })
        .catch(function (error) {

            //Ошибка получения соли
            handleSubmitError(error);
        });
    }

    function handleSubmitError(error){
        if(error.response && error.response.data &&  error.response.data.ERRORS){
            
            let errors = error.response.data.ERRORS;
            
            dispatch({
                type:"LOGIN_SUBMIT_ERROR",
                payload:errors[0].MESSAGE
            });
            return;
        }

        dispatch({
            type:"LOGIN_SUBMIT_ERROR",
            payload:"Неизвестная ошибка."
        });
    }
};
