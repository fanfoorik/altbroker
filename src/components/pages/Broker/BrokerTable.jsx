import PropTypes from 'prop-types';
import React from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import BrokerTableHeader from './BrokerTableHeader';
import CommentsPopover from 'components/popovers/CommentsPopover';
import DealPopover from 'components/popovers/DealPopover';
import DelegatePopover from 'components/popovers/DelegatePopover';
import DealerPopover from 'components/popovers/DealerPopover';
import Icon from 'components/Icon';
import PricePopover from 'components/popovers/PricePopover';
import TaskPopover from 'components/popovers/TaskPopover';
import { formatNumber } from 'utils/formaters';
import { hostUrl } from 'utils/urls';

const colors = {
  0: '#e1e5e9',
  1: '#ffd900',
  2: '#8b572a',
  3: '#4da1ff',
  4: '#6dd100',
};

function getColor(value) {
  return colors[value] || '';
}

export default class BrokerTable extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      listingItems: props.listingItems || [],
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

  render() {
    function getImage(item) {
      return item.DETAIL_PICTURE_TEXT ?
        `${hostUrl}${item.DETAIL_PICTURE_TEXT}` :
        'http://via.placeholder.com/200?text=A';
    }

    return (
      <div>
        {this.state.listingItems.map((item) => {
          const {
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
          const color = getColor(item.PROPERTY_STATUS_OBJ_VALUE);
          const price = parseInt(item.PROPERTY_PRICE_BUSINESS_VALUE, 10);
          const formattedPrice = formatNumber(price, '-');
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
                <span className="table-color" style={{ backgroundColor: color }} />
              </div>
              <div className="table-cell table-col__id">
                <div className="table-cell__id">{item.ID}</div>
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
              <div className="table-cell no-padding table-col__location">{location}</div>
              <div className="table-cell table-col__price align-right no-padding-left popover-parent">
                <span className="table-cell__price-text">{formattedPrice}</span>
                <PricePopover value={price} />
              </div>
              <div className="table-cell table-col__profit align-right no-padding-left">{profit}</div>
              <div className="table-cell table-col__broker popover-parent no-padding-left">
                <span className="table-cell__broker">{broker}</span>
                <DelegatePopover />
              </div>
              <div className="table-cell table-col__dealer popover-parent no-padding-left">
                <span className="table-cell__dealer">{dealer}</span>
                <DealerPopover />
              </div>
              <div className="table-cell no-padding-left">
                <span className="table-cell__created">{created}</span>
              </div>
              <div className="table-cell table-col__updated no-padding-left">{lastUpdate}</div>
              <div className="table-cell table-col__watched align-right no-padding-right">{viewed || '-'}</div>
              <div className="table-cell table-col__like align-right no-padding-right">{likes}</div>
              <div className="table-cell table-col__comments align-center no-padding-right popover-parent">
                <span className="table-cell__comments">{comments}</span>
                <CommentsPopover />
              </div>
              <div className="table-cell table-col__actions no-padding">
                <div className="table-cell__actions">
                  <div className="table-cell__action-left popover-parent">
                    <Icon className="table-cell__list" icon="list" width={18} height={18} />
                    <TaskPopover />
                  </div>
                  <div className="table-cell__action-right popover-parent">
                    <span className="table-cell__dot" />
                    <span className="table-cell__dot" />
                    <span className="table-cell__dot" />
                    <DealPopover />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

BrokerTable.propTypes = {
  fetchListing: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.shape({
    COUNT: PropTypes.object,
    PAGE: PropTypes.object,
  }),
};

BrokerTable.defaultProps = {
  listingItems: [],
  query: PropTypes.shape({
    COUNT: PropTypes.object,
    PAGE: PropTypes.object,
  }),
};
