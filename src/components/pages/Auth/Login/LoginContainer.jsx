import { connect } from 'react-redux';

import Login from './Login';
import loginEmailAction from './actions/loginEmailAction';
import loginPasswordAction from './actions/loginPasswordAction';
import loginSubmitAction from './actions/loginSubmitAction';
import { RECOVER_EMAIL_PANEL } from 'constants/authTypes';

function mapStateToProps(state) {
  return {
    login: state.auth.login,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchLoginSubmit() {
      dispatch(loginSubmitAction());
    },

    dispatchLoginEmail(value) {
      dispatch(loginEmailAction(value));
    },

    dispatchLoginPassword(value) {
      dispatch(loginPasswordAction(value));
    },

    dispatchToRecoverEmail() {
      dispatch({ type: RECOVER_EMAIL_PANEL });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
