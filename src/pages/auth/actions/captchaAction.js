import ajax from 'js/ajax'; 
import { api_url } from "path.js";

export const setCaptchaValue = value => (dispatch) => {
    dispatch({
        type: "SET_CAPTCHA_VALUE",
        payload: value
    });
};

export const refreshCaptcha = () => (dispatch, getState) => {
    
    let login = getState().auth.login.email.value;

    dispatch({type: "CAPTCHA_REFRESH_START"});

    //Запрос на получение картинки каптчи, через ошибку отправляемых данных
    ajax.post(api_url+'user/login/', {
    	LOGIN:login,
    	PASSWORD:"*"
    })
    .then(function(res){
        
    	let sid = res.data.ANSWER.CAPCHA_SID;
    	let image = res.data.ANSWER.CAPCHA_URL;

    	dispatch({
	        type: "CAPTCHA_REFRESH_END",
	        payload: {
				"sid":sid,
				"image":image
	        }
	    });
    })
    .catch(function(error){

		dispatch({
            type:"LOGIN_SUBMIT_ERROR",
            payload:"Ошибка обновления каптчи"
        });

        dispatch({
	        type: "CAPTCHA_REFRESH_END",
	        payload: {
				"sid":"",
				"image":""
	        }
	    });
    });
};
