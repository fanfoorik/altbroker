import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';
import { hostUrl } from 'utils/urls';

// Panels
import DetailPage from './DetailPage/DetailPage';
import TablePrice from './Table/TablePrice';
import TableBroker from './Table/TableBroker';
import TableDealer from './Table/TableDealer';
import TableComments from './Table/TableComments';
import TableTask from './Table/TableTask';
import TableOptions from './Table/TableOptions';

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

export default class BrokerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingItems: props.listingItems || [],
      detailPageSettings: {
        active: false,
        id: '',
      },
    };

    this.pageIndex = this.props.query.PAGE || 0;
    this.itemsCount = this.props.query.COUNT || 15;
  }

  componentDidMount() {
    this.props.fetchListing(this.pageIndex, this.itemsCount);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ listingItems: nextProps.listingItems });
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
    function getImage(item) {
      return item.DETAIL_PICTURE_TEXT ?
        `${hostUrl}${item.DETAIL_PICTURE_TEXT}` :
        'http://via.placeholder.com/200?text=A';
    }

    const { refreshListingItem } = this.props;
    const { detailPageSettings } = this.state;
    const detailPageData = {
      id: detailPageSettings.id,
      closeDetailPage: this.closeDetailPage,
      getStatusColor,
    };

    return (
      <div>
        {this.state.listingItems.map((item) => {
          const {
            ID: id,
            COMMENT: comments,
            DATE_CREATE_TEXT: created,
            IBLOCK_SECTION_ID_TEXT: category,
            NAME: name,
            PROPERTY_ACTUAL_VALUE_TEXT: lastUpdate,
            PROPERTY_BROKER_VALUE_TEXT: broker,
            PROPERTY_GEO_ID_VALUE_TEXT: location,
            PROPERTY_KLIENT_FIO_VALUE: dealer,
            SCORE: likes,
            SHOW_COUNTER: viewed,
          } = item;
          const statusColor = getStatusColor(item.PROPERTY_STATUS_OBJ_ENUM_ID);
          const price = +item.PROPERTY_PRICE_BUSINESS_VALUE;
          const profit = formatNumber(item.PROPERTY_CHIST_PRIB_VALUE, '-');

          return (
            <div className="table-row" key={`table-item-${Math.floor(Date.now() * Math.random())}`}>
              <div className="table-cell table-col__checkbox">
                <label className="checkbox" htmlFor={`checkbox-${item.ID}`}>
                  <input id={`checkbox-${item.ID}`} type="checkbox" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="table-cell table-col__color no-padding">
                <span className={`table-status table-status_${statusColor}`} />
              </div>
              <div className="table-cell table-col__id">
                <div
                  className="table-cell__id"
                  onClick={() => this.openDetailPage(id)}
                  role="button"
                  tabIndex="0"
                >{item.ID}</div>
              </div>
              <div className="table-cell table-col__img no-padding">
                <div className="table-col__img">
                  <img className="table-cell__img table-tooltip" src={getImage(item)} alt={name} />
                  <span className="table-tooltip__content clearfix">
                    <img className="table-tooltip__content-img" src={getImage(item)} alt={name} />
                  </span>
                </div>
              </div>
              <div className="table-cell table-col__name">
                <span className="table-cell__span table-cell__name-text">{name}</span>
              </div>
              <div className="table-cell table-col__category">{category}</div>
              <div className="table-cell table-col__location no-padding">{location}</div>
              <div className="table-cell table-col__price align-right no-padding-left">
                <TablePrice
                  id={id}
                  price={price}
                  refreshListingItem={refreshListingItem}
                />
              </div>
              <div className="table-cell table-col__profit align-right no-padding-left">{profit}</div>
              <div className="table-cell table-col__broker no-padding-left">
                <TableBroker broker={broker} />
              </div>
              <div className="table-cell table-col__dealer no-padding-left">
                <TableDealer dealer={dealer} />
              </div>
              <div className="table-cell table-col__created no-padding-left">{created}</div>
              <div className="table-cell table-col__updated no-padding-left">{lastUpdate}</div>
              <div className="table-cell table-col__watched align-right no-padding-right">{viewed || '-'}</div>
              <div className="table-cell table-col__like align-right no-padding-right">{likes}</div>
              <div className="table-cell table-col__comments align-center no-padding-right">
                <TableComments id={id} comments={comments} />
              </div>
              <div className="table-cell table-col__actions no-padding">
                <div className="table-cell__actions">
                  <div className="table-cell__action-left">
                    <TableTask />
                  </div>
                  <div className="table-cell__action-right">
                    <TableOptions id={id} openDetailPage={this.openDetailPage} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {
          detailPageSettings.active &&
          <DetailPage {...detailPageData} />
        }
      </div>
    );
  }
}

BrokerTable.propTypes = {
  fetchListing: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.shape({
    COUNT: PropTypes.string,
    PAGE: PropTypes.string,
  }),
  refreshListingItem: PropTypes.func.isRequired,
};

BrokerTable.defaultProps = {
  listingItems: [],
  query: PropTypes.shape({
    COUNT: 15,
    PAGE: 0,
  }),
};
