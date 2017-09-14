import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GB from './GB';

import {
  fetchGBListing,
  updateGBOptions,
  fetchGBfilter,
} from 'actions/pages/GBActions';

function mapStateToProps(state) {
  return {
    filter: state.GB.filter,
    listing: state.GB.listing.listingItems,
    loading: state.GB.listing.loading,
    pagination: state.GB.listing.listingNav,
    options: state.GB.options,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchGBListing,
    updateGBOptions,
    fetchGBfilter,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GB);
