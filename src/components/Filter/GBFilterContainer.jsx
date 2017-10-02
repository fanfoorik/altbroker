import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GBFilter from './GBFilter';

import {
  updateGBOptions,
  fetchGBfilter,
} from 'actions/pages/GBActions';

function mapStateToProps(state) {
  return {
    filter: state.GB.filter,
    filterState: state.GB.options.FILTER,
    options: state.GB.options,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    updateGBOptions,
    fetchGBfilter,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GBFilter);
