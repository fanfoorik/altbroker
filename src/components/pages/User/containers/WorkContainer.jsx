import { connect } from 'react-redux';
import React from 'react';

import Work from '../components/Work/Work';

function WorkContainer(props) {
  const data = {
    user: props.user,
    work: props.work,
  };

  return (
    <Work data={data} />
  );
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    work: state.user.work,
  };
}

export default connect(mapStateToProps)(WorkContainer);
