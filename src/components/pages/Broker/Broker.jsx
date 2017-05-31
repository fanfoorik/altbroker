import PropTypes from 'prop-types';
import React from 'react';

import BrokerActions from './BrokerActions';
import BrokerPaginator from './BrokerPaginator';
import BrokerTable from './BrokerTable';

export default function Broker(props) {
  const { fetchListingData, listingItems, listingNav } = props;

  return (
    <div className="container">
      <BrokerTable fetchListingData={fetchListingData} listingItems={listingItems} />
      <BrokerPaginator listingNav={listingNav} itemsCount={listingItems && listingItems.length} />
      <BrokerActions />
    </div>
  );
}

Broker.propTypes = {
  fetchListingData: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),
  listingNav: PropTypes.shape({
    COUNT_OBJ: PropTypes.number,
    COUNT_HREF: PropTypes.number,
    PREV_GAGE: PropTypes.string,
    CUR_GAGE: PropTypes.string,
    NEXT_GAGE: PropTypes.string,
    NAV_HREF: PropTypes.array,
  }),
};

Broker.defaultProps = {
  listingItems: [],
  listingNav: {},
};
