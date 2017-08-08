import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import BrokerActions from './BrokerActions';
import GBPaginator from './GBPaginator';
import BrokerTable from './BrokerTable';
import BrokerTableHeader from './BrokerTableHeader';

import GBFilter from 'components/Filter/GBFilter';

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

export default class GB extends React.Component {

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
      detailPageSettings: { active: true, id },
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
      fetchGBListing,
      updateGBOptions,
      fetchGBfilter,
      filter,
      listing,
      pagination,
      options,
    } = this.props;
    const { FILTER: filterState } = options;
    const { detailPageSettings } = this.state;

    const detailPageData = {
      id: detailPageSettings.id,
      closeDetailPage: this.closeDetailPage,
      getStatusColor,
    };

    return (
      <div>
        <div className="container">
          <ol className="breadcrumb breadcrumb-main">
            <li className="breadcrumb__item">Бизнесы</li>
            <li className="breadcrumb__item breadcrumb-active">
              <a className="breadcrumb__item_link" href="#">+ создать новый</a>
            </li>
          </ol>

          <GBFilter
            updateGBOptions={updateGBOptions}
            filter={filter}
            fetchGBfilter={fetchGBfilter}
            filterState={filterState}
          />

        </div>
        <StickyContainer className="table container listing-wrapper">
          <Sticky>
            <BrokerTableHeader />
          </Sticky>

          <BrokerTable
            fetchGBListing={fetchGBListing}
            listing={listing}
            query={query}
            openDetailPage={this.openDetailPage}
            getStatusColor={getStatusColor}
            updateGBOptions={updateGBOptions}
          />

          <GBPaginator
            updateGBOptions={updateGBOptions}
            itemsCount={listing && listing.length}
            pagination={pagination}
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

GB.propTypes = {
  fetchGBListing: PropTypes.func.isRequired,
  updateGBOptions: PropTypes.func.isRequired,
  listing: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.shape({
    ALL_BROKER: PropTypes.arrayOf(PropTypes.object),
    ALL_STATUS_OBJ: PropTypes.arrayOf(PropTypes.object),
    ALL_CITY: PropTypes.arrayOf(PropTypes.object),
    ALL_RAYONS: PropTypes.arrayOf(PropTypes.object),
    ALL_METRO: PropTypes.arrayOf(PropTypes.object),
    ALL_CATEGORY_GB_1: PropTypes.arrayOf(PropTypes.object),
    ALL_CATEGORY_GB_2: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  options: PropTypes.shape({
    SORT_CODE: PropTypes.arrayOf(PropTypes.string).isRequired,
    SORT_METOD: PropTypes.arrayOf(PropTypes.string).isRequired,
    PAGE: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    COUNT: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    FILTER: PropTypes.object.isRequired,
    SHOW_SHARED: PropTypes.string.isRequired,
    DEBUG: PropTypes.string.isRequired,
  }).isRequired,
  fetchGBfilter: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
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
};

GB.defaultProps = {
  listing: [],
  pagination: {},
};
