import React from 'react';
import { connect } from 'react-redux';

import Work from '../components/Work/Work';

const WorkContainer = props => <Work {...props} />;

function mapStateToProps(state) {
  return {
    work: state.user.work,
  };
}

export default connect(mapStateToProps)(WorkContainer);
