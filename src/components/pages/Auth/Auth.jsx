import React from 'react';
import { connect } from 'react-redux';

import { indexUrl } from 'utils/urls.js';
import Login from './Login/Login';
import RecoverEmail from './RecoverEmail/RecoverEmail';
import RecoverEmailSuccess from './RecoverEmailSuccess';
import RecoverPassword from './RecoverPassword/RecoverPassword';
import RecoverPasswordSuccess from './RecoverPasswordSuccess';
import UserCheckword from './UserCheckword/UserCheckword';
import userCheckword from './actions/userCheckwordAction';

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
        this.props.dispatchUserCheckword({
          USER_LOGIN: login,
          USER_CHECKWORD: checkword,
        });
      }
    }

    return (
      <div className="auth-page">
        <div className="auth-page__container">
          {
            auth.login && <Login />
          }

          {
            auth.recoverEmail && <RecoverEmail />
          }

          {
            auth.recoverEmailSuccess && <RecoverEmailSuccess />
          }

          {
            auth.recoverPassword && <RecoverPassword />
          }

          {
            auth.recoverPasswordSuccess && <RecoverPasswordSuccess />
          }

          {
            auth.userCheckword && <UserCheckword />
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.components,
    recoverPasswordUser: state.auth.recoverPassword.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchUserCheckword(checkword) {
      dispatch(userCheckword(checkword));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
