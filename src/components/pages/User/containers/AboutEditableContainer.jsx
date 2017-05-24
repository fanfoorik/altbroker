import React from 'react';
import { connect } from 'react-redux';

import AboutEditable from '../components/About/AboutEditable';

const AboutContainer = props => <AboutEditable {...props} />;

function mapStateToProps(state) {
  return {
    user: state.user.data,
  };
}
export default connect(mapStateToProps)(AboutContainer);
