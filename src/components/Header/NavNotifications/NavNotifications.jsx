import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { triggerNotifications } from './actions/navNotificationsActions';
import NavNotifications from './components/NavNotifications';

function mapStateToProps(state) {
  return {
    notifications: state.header.notifications,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ triggerNotifications }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(NavNotifications);
