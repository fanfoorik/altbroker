import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from 'components/App/App';
import fetchInit from 'actions/fetchInitAction';

function mapStateToProps(state) {
  return { state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchInit }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
