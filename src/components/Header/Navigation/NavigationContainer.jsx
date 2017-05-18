import { connect } from 'react-redux';

import Navigation from './Navigation';

function mapStateToProps(state) {
  return {
    nav: state.header.nav,
  };
}

export default connect(mapStateToProps)(Navigation);
