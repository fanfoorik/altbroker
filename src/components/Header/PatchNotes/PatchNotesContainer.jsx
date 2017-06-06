import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import PatchNotes from './PatchNotes';
import { fetchPatchNotes, triggerPatchNotes } from 'actions/header/patchNotesActions';

function mapStateToProps(state) {
  return {
    patchNotes: state.header.patchNotes,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchPatchNotes, triggerPatchNotes }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PatchNotes);
