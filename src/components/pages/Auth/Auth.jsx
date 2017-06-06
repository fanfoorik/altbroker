import React from 'react';

import LoginContainer from './Login/LoginContainer';
import RecoverEmail from './RecoverEmail/RecoverEmail';
import RecoverEmailSuccess from './RecoverEmailSuccess';
import RecoverPassword from './RecoverPassword/RecoverPassword';
import RecoverPasswordSuccess from './RecoverPasswordSuccess';
import UserCheckword from './UserCheckword/UserCheckword';
import { indexUrl } from 'utils/urls.js';

class Auth extends React.Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth.authenticated) {
      const state = this.props.location.state;
      const nextPath = (state && state.location) || indexUrl;
      this.props.router.replace(nextPath);
    }
  }

  render() {
    const { auth, recoverPasswordUser } = this.props;
    const { USER_CHECKWORD: checkword, USER_LOGIN: login } = this.props.location.query;

    if (checkword && login) {
      if (recoverPasswordUser.checkword !== checkword && recoverPasswordUser.login !== login) {
        this.props.userCheckword({
          USER_LOGIN: login,
          USER_CHECKWORD: checkword,
        });
      }
    }

    return (
      <div className="auth-page">
        <div className="auth-page__container">
          {auth.login && <LoginContainer />}
          {auth.recoverEmail && <RecoverEmail />}
          {auth.recoverEmailSuccess && <RecoverEmailSuccess />}
          {auth.recoverPassword && <RecoverPassword />}
          {auth.recoverPasswordSuccess && <RecoverPasswordSuccess />}
          {auth.userCheckword && <UserCheckword />}
        </div>
      </div>
    );
  }
}

export default Auth;
