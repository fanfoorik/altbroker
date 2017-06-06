import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Auth from './Auth';
import userCheckword from './actions/userCheckwordAction';

function mapStateToProps(state) {
  return {
    auth: state.auth.components,
    recoverPasswordUser: state.auth.recoverPassword.user,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ userCheckword }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
