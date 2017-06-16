import ajax from 'utils/ajax';

export const setCaptchaValue = value => (dispatch) => {
  dispatch({
    type: 'SET_CAPTCHA_VALUE',
    payload: value,
  });
};

export const refreshCaptcha = () => (dispatch, getState) => {
  const login = getState().auth.login.email.value;

  dispatch({ type: 'CAPTCHA_REFRESH_START' });

  // Запрос на получение картинки каптчи, через ошибку отправляемых данных
  ajax.post('user/login/', {
    LOGIN: login,
    PASSWORD: '*',
  })
    .then((data) => {
      const sid = data.ANSWER.CAPCHA_SID;
      const image = data.ANSWER.CAPCHA_URL;

      dispatch({
        type: 'CAPTCHA_REFRESH_END',
        payload: {
          sid,
          image,
        },
      });
    })
    .catch(() => {
      dispatch({
        type: 'LOGIN_SUBMIT_ERROR',
        payload: 'Ошибка обновления каптчи',
      });

      dispatch({
        type: 'CAPTCHA_REFRESH_END',
        payload: {
          sid: '',
          image: '',
        },
      });
    });
};
