import React from 'react';
import { connect } from 'react-redux';

import About from '../components/About/About';

function AboutContainer() {
  return (
    <About data="props" />
  );
}

function mapStateToProps(state) {
  return {
    notifications: state.header.notifications,
  };
}

export default connect(mapStateToProps)(AboutContainer);
