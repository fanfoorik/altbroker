import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Broker from './Broker';
import { fetchListing, refreshListingItem } from 'actions/pages/brokerActions';

function mapStateToProps(state) {
  return {
    listingItems: state.listing.listingItems,
    listingNav: state.listing.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchListing, refreshListingItem }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Broker);
