import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import NavNotifications from './NavNotifications';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';

function mapStateToProps(state) {
  return {
    notifications: state.header.notifications,
  };
}

export default connect(mapStateToProps)(DropdownTriggerHOC(NavNotifications));
