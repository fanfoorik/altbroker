import ajax from 'utils/ajax';

export default () => (dispatch, getState) => {
  const {
    password,
    confirm,
    form,
    user,
  } = getState().auth.recoverPassword;

  if (!form.touch) dispatch({ type: 'RECOVER_PASSWORD_SUBMIT_TOUCH' });

  if (password.valid && confirm.valid) {
    dispatch({ type: 'RECOVER_PASSWORD_SUBMIT_START' });

    ajax.post('user/user_change_pass/', {
      USER_LOGIN: user.login,
      USER_CHECKWORD: user.checkword,
      USER_PASS: password.value,
    })
      .then((data) => {
        const message = data.ANSWER.MESSAGE;

        dispatch({
          type: 'RECOVER_PASSWORD_SUBMIT_SUCCESS',
          payload: message,
        });

        // from authReducer
        dispatch({
          type: 'RECOVER_PASSWORD_SUCCESS_PANEL',
          payload: message,
        });
      })
      .catch((error) => {
        if (error.response.data.ERRORS) {
          const message = error.response.data.ERRORS[0].MESSAGE;

          dispatch({
            type: 'RECOVER_PASSWORD_SUBMIT_ERROR',
            payload: message,
          });
          return;
        }

        const message = error.response.statusText;

        dispatch({
          type: 'RECOVER_PASSWORD_SUBMIT_ERROR',
          payload: message,
        });
      });
  }
};
