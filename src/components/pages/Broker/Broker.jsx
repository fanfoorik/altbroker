import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import BrokerActions from './BrokerActions';
import BrokerPaginator from './BrokerPaginator';
import BrokerTable from './BrokerTable';
import BrokerTableHeader from './BrokerTableHeader';

import BusinessFilter from 'components/Filter/BusinessFilter';

export default function Broker(props) {
  const query = props.location.query;
  const {
    fetchListing,
    listingItems,
    listingNav,
    refreshListingItem,
  } = props;

  return (
    <div>
      <div className="container">
        <div className="h1">Бизнесы</div>
        <BusinessFilter />
      </div>
      <StickyContainer className="table container listing-wrapper">
        <Sticky>
          <BrokerTableHeader />
        </Sticky>

        <BrokerTable
          fetchListing={fetchListing}
          listingItems={listingItems}
          query={query}
          refreshListingItem={refreshListingItem}
        />

        <BrokerPaginator
          fetchListing={fetchListing}
          itemsCount={listingItems && listingItems.length}
          listingNav={listingNav}
        />

        <BrokerActions />
      </StickyContainer>
    </div>
  );
}

Broker.propTypes = {
  fetchListing: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),
  listingNav: PropTypes.shape({
    COUNT_OBJ: PropTypes.number,
    CUR_GAGE: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    NAV_HREF: PropTypes.array,
    NEXT_GAGE: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
    PREV_GAGE: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object,
    ]),
  }),
  refreshListingItem: PropTypes.func.isRequired,
};

Broker.defaultProps = {
  listingItems: [],
  listingNav: {},
};
