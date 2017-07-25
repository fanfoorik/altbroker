import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import BrokerActions from './BrokerActions';
import BrokerPaginator from './BrokerPaginator';
import BrokerTable from './BrokerTable';
import BrokerTableHeader from './BrokerTableHeader';

import BusinessFilter from 'components/Filter/BusinessFilter';

import DetailPage from './DetailPage/DetailPage';

const statusColors = {
  '': 'posted',
  17519: 'draft',
  18709: 'moderation',
  18710: 'rejected',
  18711: 'preparatory',
  14115: 'sold',
  14116: 'withdrawn',
};

function getStatusColor(value) {
  return statusColors[value] || 'posted';
}

export default class Broker extends React.Component {

  constructor() {
    super();
    this.state = {
      detailPageSettings: {
        active: false,
          id: '',
      },
    };
  }

  openDetailPage = (id) => {
    this.setState({
      detailPageSettings: {
        active: true,
        id,
      },
    });
  };

  closeDetailPage = () => {
    this.setState({
      detailPageSettings: { active: false },
    });
  };

  render() {
    const query = this.props.location.query;
    const {
      fetchListing,
      listingItems,
      listingNav,
      refreshListingItem,
      filterChange,
      filterListing,
      page,
    } = this.props;

    const { detailPageSettings } = this.state;

    const detailPageData = {
      id: detailPageSettings.id,
      closeDetailPage: this.closeDetailPage,
      getStatusColor,
    };

    const options = [
      { value: 'one', label: 'One' },
      { value: 'two', label: 'Two2' },
    ];

    return (
      <div>
        <div className="container">
          <div className="h1">Бизнесы</div>
          <BusinessFilter
            filterChange={filterChange}
            filterListing={filterListing}
            filter={page.FILTER}
          />
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
            openDetailPage={this.openDetailPage}
            getStatusColor={getStatusColor}
          />

          <BrokerPaginator
            fetchListing={fetchListing}
            itemsCount={listingItems && listingItems.length}
            listingNav={listingNav}
          />

          <BrokerActions />
        </StickyContainer>

        {
          detailPageSettings.active &&
          <DetailPage {...detailPageData} />
        }
      </div>
    );
  }
}

Broker.propTypes = {
  fetchListing: PropTypes.func.isRequired,
  filterListing: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),
  page: PropTypes.shape({
    SORT_CODE: PropTypes.array,
    SORT_METOD: PropTypes.array,
    PAGE: PropTypes.string,
    COUNT: PropTypes.string,
    FILTER: PropTypes.object,
    SHOW_SHARED: PropTypes.string,
    DEBUG: PropTypes.string,
  }).isRequired,
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
