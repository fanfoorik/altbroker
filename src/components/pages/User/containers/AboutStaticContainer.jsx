import React from 'react';
import { connect } from 'react-redux';

import AboutStatic from '../components/About/AboutStatic';

const AboutContainer = props => <AboutStatic {...props} />;

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}

export default connect(mapStateToProps)(AboutContainer);
