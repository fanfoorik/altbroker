import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import GB from './GB';

import {
  fetchListing,
  refreshListingItem,
  filterChange,
  filterListing,
} from 'actions/pages/GBActions';

import { fetchGBfilter } from 'actions/GBFilterActions';

function mapStateToProps(state) {
  return {
    listingItems: state.listing.listingItems,
    listingNav: state.listing.nav,
    page: state.listing.page,
    filter: state.filter.gb,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchListing,
    refreshListingItem,
    filterChange,
    filterListing,
    fetchGBfilter,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GB);
