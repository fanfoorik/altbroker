import PropTypes from 'prop-types';
import React from 'react';

import BrokerTableHeader from './BrokerTableHeader';
import CommentsPopover from 'components/popovers/CommentsPopover';
import DelegatePopover from 'components/popovers/DelegatePopover';
import DealPopover from 'components/popovers/DealPopover';
import DealerPopover from 'components/popovers/DealerPopover';
import Icon from 'components/Icon';
import PricePopover from 'components/popovers/PricePopover';
import TaskPopover from 'components/popovers/TaskPopover';
import { formatNumber } from 'utils/formaters';

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
  }

  componentDidMount() {
    this.props.fetchListingData();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ listingItems: nextProps.listingItems });
  }

  render() {
    return (
      <table className="listing">
        <BrokerTableHeader />

        <tbody>
          {this.state.listingItems.map((item) => {
            const {
              PROPERTY_BROKER_VALUE_TEXT: broker,
              IBLOCK_SECTION_ID_TEXT: category,
              COMMENTS: comments,
              DATE_CREATE_TEXT: created,
              PROPERTY_KLIENT_FIO_VALUE: dealer,
              PROPERTY_DATE_UP_VALUE: lastUpdate,
              SCORE: likes,
              PROPERTY_GEO_ID_VALUE_TEXT: location,
              NAME: name,
              SHOW_COUNTER: viewed,
            } = item;
            const color = getColor(item.PROPERTY_STATUS_OBJ_VALUE);
            const img = `http://alterainvest.ru/${item.DETAIL_PICTURE_TEXT}`;
            const price = formatNumber(item.PROPERTY_PRICE_BUSINESS_VALUE, '-');
            const profit = formatNumber(item.PROPERTY_CHIST_PRIB_VALUE, '-');

            return (
              <tr key={`table-item-${Math.floor(Date.now() * Math.random())}`}>
                <td className="table-col__checkbox">
                  <label className="checkbox" htmlFor={`checkbox-${item.ID}`}>
                    <input id={`checkbox-${item.ID}`} type="checkbox" />
                    <div className="checkbox_indicator" />
                  </label>
                </td>
                <td className="table-cell__color no-padding">
                  <span className="table-color" style={{ backgroundColor: color }} />
                </td>
                <td><span className="table-cell__id">{item.ID}</span></td>
                <td className="no-padding">
                  <div className="table-cell__img-wrapper">
                    <img className="table-cell__img table-tooltip" src={img} alt={name} />
                    <span className="table-tooltip__content clearfix">
                      <img className="table-tooltip__content-img" src={img} alt={name} />
                    </span>
                  </div>
                </td>
                <td>
                  <div className="table-cell__name">
                    <span className="table-cell__span table-cell__name-text">{name}</span>
                  </div>
                </td>
                <td><span className="table-cell__category">{category}</span></td>
                <td className="no-padding">
                  <span className="table-cell__location no-padding">{location}</span>
                </td>
                <td className="align-right no-padding-left popover-parent">
                  <div className="table-cell__price">
                    <span className="table-cell__price-text">{price}</span>
                    <PricePopover />
                  </div>
                </td>
                <td className="align-right no-padding-left">
                  <div className="table-cell__profit">{profit}</div>
                </td>
                <td className="popover-parent no-padding-left">
                  <div className="table-cell__broker">
                    <span className="table-cell__broker-text">{broker}</span>
                    <DelegatePopover />
                  </div>
                </td>
                <td className="popover-parent no-padding-left">
                  <div className="table-cell__dealer">
                    <span className="table-cell__dealer-text">{dealer}</span>
                    <DealerPopover />
                  </div>
                </td>
                <td className="no-padding-left">
                  <span className="table-cell__created">{created}</span>
                </td>
                <td className="no-padding-left">
                  <span className="table-cell__last-update">{lastUpdate}</span>
                </td>
                <td className="align-right no-padding-right">
                  <span className="table-cell__viewed">{viewed || '-'}</span>
                </td>
                <td className="align-right no-padding-right">
                  <span className="table-cell__likes">{likes}</span>
                </td>
                <td className="align-center no-padding-right popover-parent">
                  <span className="table-cell__comments">{comments || Math.floor((Math.random() * 10) + 1)}</span>
                  <CommentsPopover />
                </td>
                <td>
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
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

BrokerTable.propTypes = {
  fetchListingData: PropTypes.func.isRequired,
  listingItems: PropTypes.arrayOf(PropTypes.object),

};

BrokerTable.defaultProps = {
  listingItems: [],
};
