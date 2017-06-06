import ajax from 'utils/ajax';
import md5 from 'md5';
import {
  AUTH_USER,
  LOGIN_SUBMIT_ERROR,
  LOGIN_SUBMIT_TOUCH,
  LOGIN_SUBMIT_START,
  LOGIN_SUBMIT_SUCCESS,
  SET_CAPTCHA_ACTIVE,
} from 'constants/authTypes';
import { apiUrl } from 'utils/urls.js';

export default () => (dispatch, getState) => {
  function handleSubmitError(error) {
    if (error.response && error.response.data && error.response.data.ERRORS) {
      const errors = error.response.data.ERRORS;

      dispatch({
        type: LOGIN_SUBMIT_ERROR,
        payload: errors[0].MESSAGE,
      });
      return;
    }

    dispatch({
      type: LOGIN_SUBMIT_ERROR,
      payload: 'Неизвестная ошибка.',
    });
  }

  const { login } = getState().auth;

  if (!login.form.touch) dispatch({ type: LOGIN_SUBMIT_TOUCH });

  if (login.email.valid && login.password.valid) {
    dispatch({ type: LOGIN_SUBMIT_START });

    // Запрос на получение соли
    ajax.post(`${apiUrl}user/login/`,
      { LOGIN: login.email.value })
      .then((resp) => {
        const salt = resp.data.ANSWER.SOLD;

        const loginData = {
          LOGIN: login.email.value,
          PASSWORD: salt + md5((salt + login.password.value)),
        };

        if (login.captcha.active) {
          loginData.CAPTCHA_SID = login.captcha.sid;
          loginData.CAPTCHA_WORD = login.captcha.value;
        }

        // Запрос на авторизацию
        ajax.post(`${apiUrl}user/login/`, loginData)
          .then((response) => {
            if (response.data && response.data.ANSWER && response.data.ANSWER.CAPCHA_SID) {
              const captcha = response.data.ANSWER;

              dispatch({
                type: SET_CAPTCHA_ACTIVE,
                payload: {
                  sid: captcha.CAPCHA_SID,
                  image: captcha.CAPCHA_URL,
                },
              });

              return;
            }

            const user = response.data.ANSWER.USER;
            const token = response.data.ANSWER.TOKEN;

            if (user && token) {
              localStorage.setItem('login', user.LOGIN);
              localStorage.setItem('token', token);

              dispatch({ type: LOGIN_SUBMIT_SUCCESS });
              dispatch({ type: AUTH_USER, payload: true });
            }
          })
          // Ошибка авторизации
          .catch(error => handleSubmitError(error));
      })
      // Ошибка получения соли
      .catch(error => handleSubmitError(error));
  }
};
