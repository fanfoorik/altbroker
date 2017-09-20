import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';
import { Link } from 'react-router';
import { indexUrl } from 'utils/urls';

import GBPaginator from './GBPaginator';
import GBTable from './GBTable';
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

  handleSort = (event) => {
    const { updateGBOptions, options: { SORT_CODE, SORT_METOD } } = this.props;
    const id = event.currentTarget.dataset.id;
    const isSortCodeActive = SORT_CODE[0] === id;
    let sortMethod = 'DESC';

    if (isSortCodeActive) {
      sortMethod = SORT_METOD[0] !== 'DESC' ? 'DESC' : 'ASC';
    }

    updateGBOptions({ SORT_CODE: [id], SORT_METOD: [sortMethod] });
  };

  render() {
    const {
      fetchGBListing,
      updateGBOptions,
      fetchGBfilter,
      filter,
      listing,
      pagination,
      options: { FILTER: filterState },
      loading,
    } = this.props;
    const { detailPageSettings } = this.state;

    const detailPageData = {
      id: detailPageSettings.id,
      closeDetailPage: this.closeDetailPage,
      getStatusColor,
    };

    const { SORT_CODE: sortCode, SORT_METOD: sortMethod } = this.props.options;

    return (
      <div>
        <div className="container">
          <div className="h1">Бизнесы <Link to={`${indexUrl}broker/gb/add/`} className="create-new-link">+ создать новый</Link></div>
          <GBFilter
            updateGBOptions={updateGBOptions}
            filter={filter}
            fetchGBfilter={fetchGBfilter}
            filterState={filterState}
          />

        </div>
        <StickyContainer className="table container listing-wrapper">
          <Sticky>
            <BrokerTableHeader
              handleSort={this.handleSort}
              sortCode={sortCode}
              sortMethod={sortMethod}
            />
          </Sticky>

          <GBTable
            fetchGBListing={fetchGBListing}
            listing={listing}
            openDetailPage={this.openDetailPage}
            getStatusColor={getStatusColor}
            updateGBOptions={updateGBOptions}
            loading={loading}
          />

          <GBPaginator
            updateGBOptions={updateGBOptions}
            itemsCount={listing && listing.length}
            pagination={pagination}
          />

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
  loading: PropTypes.bool.isRequired,
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
