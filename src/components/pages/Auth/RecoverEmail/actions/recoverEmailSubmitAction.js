import ajax from 'utils/ajax';

export default () => (dispatch, getState) => {
  const { recoverEmail } = getState().auth;
  const { email } = recoverEmail;

  if (!recoverEmail.form.touch) {
    dispatch({ type: 'RECOVER_EMAIL_SUBMIT_TOUCH' });
  }

  if (email.valid) {
    dispatch({ type: 'RECOVER_EMAIL_SUBMIT_START' });

    // Отправление эмейл для смены пароля
    ajax.post('user/user_send_checkword/', {
      USER_LOGIN: email.value,
    })
      .then((data) => {
        const message = data.ANSWER.MESSAGE;

        dispatch({
          type: 'RECOVER_EMAIL_SUBMIT_SUCCESS',
          payload: message,
        });

        // from authReducer
        dispatch({ type: 'RECOVER_EMAIL_SUCESS_PANEL' });
      })
      .catch((error) => {
        if (error.response && error.response.data && error.response.data.ERRORS) {
          const errors = error.response.data.ERRORS;

          dispatch({
            type: 'RECOVER_EMAIL_SUBMIT_ERROR',
            payload: errors[0].MESSAGE,
          });
          return;
        }

        dispatch({
          type: 'RECOVER_EMAIL_SUBMIT_ERROR',
          payload: 'Неизвестная ошибка.',
        });
      });
  }
};
