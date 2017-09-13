import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PatchNotes from './PatchNotes';
import { fetchPatchNotes } from 'actions/header/patchNotesActions';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';

function mapStateToProps(state) {
  return {
    patchNotes: state.header.patchNotes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPatchNotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DropdownTriggerHOC(PatchNotes));
