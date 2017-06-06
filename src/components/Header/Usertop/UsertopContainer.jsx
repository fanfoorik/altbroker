import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Usertop from './Usertop';
import { logoutUser, triggerUser as triggerUserAction } from 'actions/userActions';

function mapStateToProps(state) {
  return {
    usertop: state.header.usertop,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerUser: triggerUserAction, logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Usertop);
