import React from 'react';
import { connect } from 'react-redux';

import { LOGIN_PANEL } from 'constants/authTypes';
import AuthPanel from '../components/AuthPanel';
import AuthButton from '../components/AuthButton';
import AuthError from '../components/AuthError';
import LoginEmail from '../components/LoginEmail';
import recoverEmail from './actions/recoverEmailAction';
import recoverEmailSubmit from './actions/recoverEmailSubmitAction';

const RecoverEmail = (props) => {
  const {
    dispatchRecoverEmail,
    dispatchRecoverEmailSubmit,
    dispatchToLogin,
    recoverEmail,
  } = props;

  const recoverEmailSubmit = (event) => {
    event.preventDefault();
    dispatchRecoverEmailSubmit();
  };

  return (
    <AuthPanel>
      <form onSubmit={recoverEmailSubmit}>
        <div className="auth-pane__subtitle">Забыли пароль?</div>

        <div className="auth-pane__text">
          Введите свой адрес электронной почты и мы вышлем вам ссылку для изменения пароля.
        </div>

        <div className="mb_24">
          <AuthError error={recoverEmail.form.error} message={recoverEmail.form.message} />
          <AuthError error={recoverEmail.form.touch && !recoverEmail.email.valid} message={recoverEmail.email.message} />
        </div>

        <div className="auth-pane__row mb_24">
          <LoginEmail
            error={recoverEmail.form.touch && !recoverEmail.email.valid}
            value={recoverEmail.email.value}
            changeHandler={event => dispatchRecoverEmail(event.target.value)}
          />
        </div>

        <div className="mb_12">
          <AuthButton
            loading={recoverEmail.form.loading}
            type="submit"
            className="btn btn-primary btn-lg btn-block"
          >Отправить</AuthButton>
        </div>

        <div className="text-center">
          <span onClick={dispatchToLogin} className="auth-pane__footlink">Вспомнил пароль, войти</span>
        </div>
      </form>
    </AuthPanel>
  );
};

const mapStateToProps = (state) => {
  return {
    recoverEmail: state.auth.recoverEmail,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchRecoverEmailSubmit() {
      dispatch(recoverEmailSubmit());
    },

    dispatchRecoverEmail(value) {
      dispatch(recoverEmail(value));
    },

    dispatchToLogin() {
      dispatch({ type: LOGIN_PANEL });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RecoverEmail);
