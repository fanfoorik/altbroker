import { connect } from 'react-redux';

import App from 'components/App/App';
import fetchInit from 'actions/fetchInitAction';

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchInit() {
      dispatch(fetchInit());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
