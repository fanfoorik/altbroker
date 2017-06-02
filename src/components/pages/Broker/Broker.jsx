import PropTypes from 'prop-types';
import React from 'react';

import BrokerActions from './BrokerActions';
import BrokerPaginator from './BrokerPaginator';
import BrokerTable from './BrokerTable';

export default function Broker(props) {
  const {
    fetchListing,
    listingItems,
    listingNav,
  } = props;
  const query = props.location.query;

  return (
    <div className="container">
      <BrokerTable fetchListing={fetchListing} listingItems={listingItems} query={query} />
      <BrokerPaginator
        fetchListing={fetchListing}
        itemsCount={listingItems && listingItems.length}
        listingNav={listingNav}
      />
      <BrokerActions />
    </div>
  );
}

Broker.propTypes = {
  fetchListing: PropTypes.func.isRequired,
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
