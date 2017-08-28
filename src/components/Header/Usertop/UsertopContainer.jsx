import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Usertop from './Usertop';
import { logoutUser } from 'actions/userActions';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';

function mapStateToProps(state) {
  return {
    usertop: state.header.usertop,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logoutUser }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownTriggerHOC(Usertop));
