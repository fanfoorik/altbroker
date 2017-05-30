import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchListingData } from 'actions/pages/brokerActions';
import Broker from './Broker';

function mapStateToProps(state) {
  return {
    listingItems: state.listing.listingItems,
    listingNav: state.listing.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchListingData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Broker);
