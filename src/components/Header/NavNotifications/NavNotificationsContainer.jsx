import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavNotifications from './NavNotifications';
import { triggerNotifications } from 'actions/header/navNotificationsActions';

function mapStateToProps(state) {
  return {
    notifications: state.header.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerNotifications }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavNotifications);
