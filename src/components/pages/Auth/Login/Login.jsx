import React from 'react';

import AuthPanel from '../components/AuthPanel';
import AuthError from '../components/AuthError';
import AuthButton from '../components/AuthButton';
import CaptchaContainer from '../components/CaptchaContainer';
import LoginEmail from '../components/LoginEmail';
import LoginPassword from '../components/LoginPassword';

export default class Login extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.dispatchLoginSubmit();
  };

  render() {
    const { login } = this.props;

    return (
      <AuthPanel>
        <div className="auth-pane__title">Вход</div>
        <form onSubmit={this.handleSubmit}>
          <div className="auth-pane__error">
            <AuthError error={login.form.error} message={login.form.message} />
            <AuthError
              error={login.form.touch && !login.email.valid}
              message={login.email.message}
            />
            <AuthError
              error={login.form.touch && !login.password.valid}
              message={login.password.message}
            />
          </div>

          <div className="auth-pane__row">
            <LoginEmail
              error={login.form.touch && !login.email.valid}
              value={login.email.value}
              changeHandler={event => this.props.dispatchLoginEmail(event.target.value)}
            />
          </div>

          <div className="auth-pane__row mb-36">
            <LoginPassword
              error={login.form.touch && !login.password.valid}
              value={login.password.value}
              changeHandler={event => this.props.dispatchLoginPassword(event.target.value)}
            />
          </div>

          {login.captcha.active && <CaptchaContainer />}

          <div className="mb-12">
            <AuthButton
              className="btn btn-primary btn-lg btn-block"
              loading={login.form.loading}
              type="submit"
            >Войти</AuthButton>
          </div>

          <div className="align-center">
            <span onClick={this.props.dispatchToRecoverEmail} className="auth-pane__footlink">Я забыл пароль</span>
          </div>
        </form>
      </AuthPanel>
    );
  }
}
