import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { fetchListing } from 'actions/pages/brokerActions';
import Broker from './Broker';

function mapStateToProps(state) {
  return {
    listingItems: state.listing.listingItems,
    listingNav: state.listing.nav,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchListing }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Broker);
