import React from 'react';

import BrokerTableHeader from './BrokerTableHeader';
import Icon from 'components/Icon';
import CommentsPopover from 'components/popovers/CommentsPopover';
import DelegatePopover from 'components/popovers/DelegatePopover';
import DealPopover from 'components/popovers/DealPopover';
import DealerPopover from 'components/popovers/DealerPopover';
import PricePopover from 'components/popovers/PricePopover';
import TaskPopover from 'components/popovers/TaskPopover';

const fakeData = {
  id: 129478,
  img: `https://unsplash.it/200?image=${Math.floor(Math.random() * 20)}`,
  name: 'Частный детский сад в Московском районе',
  category: 'Наркологические клиники',
  location: 'СБП',
  price: '1 000 000 000',
  profit: '250 000 000',
  broker: 'Дубровин Н.',
  dealer: 'Сидачев К.',
  created: 'сегодня',
  lastUpdate: '1 день',
  viewed: '289',
  likes: '87%',
  comments: '1',
};

const colors = {
  0: '#e1e5e9',
  1: '#ffd900',
  2: '#8b572a',
  3: '#4da1ff',
  4: '#6dd100',
};

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
      <table className="container listing">
        <BrokerTableHeader />

        <tbody>
          {this.state.listingItems.map((item) => {
            return (
              <tr key={`table-item-${Math.floor(Date.now() * Math.random())}`}>
                <td className="table-col__checkbox">
                  <label className="checkbox" htmlFor={`checkbox-${item.ID}`}>
                    <input id={`checkbox-${item.ID}`} type="checkbox" />
                    <div className="checkbox_indicator" />
                  </label>
                </td>
                <td className="table-cell__color no-padding">
                  <span className="table-color" style={{ backgroundColor: colors[Math.floor(Math.random() * 5)] }} />
                </td>
                <td><span className="table-cell__id">{item.ID}</span></td>
                <td className="no-padding">
                  <div className="table-cell__img-wrapper">
                    <img className="table-cell__img table-tooltip" src={item.img || fakeData.img} alt={item.NAME} />
                    <span className="table-tooltip__content clearfix">
                      <img className="table-tooltip__content-img" src={item.img || fakeData.img} alt={item.NAME} />
                    </span>
                  </div>
                </td>
                <td>
                  <div className="table-cell__name">
                    <span className="table-cell__span table-cell__name-text">{item.NAME}</span>
                  </div>
                </td>
                <td><span className="table-cell__category">{item.CATEGORY || fakeData.category }</span></td>
                <td className="no-padding">
                  <span className="table-cell__location no-padding">{item.LOCATION || fakeData.location}</span>
                </td>
                <td className="align-right no-padding-left popover-parent">
                  <div className="table-cell__price">
                    <span className="table-cell__price-text">{item.PRICE || fakeData.price}</span>
                    <PricePopover />
                  </div>
                </td>
                <td className="align-right no-padding-left">
                  <div className="table-cell__profit">{item.PROFIT || fakeData.profit}</div>
                </td>
                <td className="popover-parent no-padding-left">
                  <div className="table-cell__broker">
                    <span className="table-cell__broker-text">{item.BROKER || fakeData.broker}</span>
                    <DelegatePopover />
                  </div>
                </td>
                <td className="popover-parent no-padding-left">
                  <div className="table-cell__dealer">
                    <span className="table-cell__dealer-text">{item.DEALER || fakeData.dealer}</span>
                    <DealerPopover />
                  </div>
                </td>
                <td className="no-padding-left">
                  <span className="table-cell__created">{item.CREATED || fakeData.created}</span>
                </td>
                <td className="no-padding-left">
                  <span className="table-cell__last-update">{item.LASTUPDATE || fakeData.lastUpdate}</span>
                </td>
                <td className="align-right no-padding-right">
                  <span className="table-cell__viewed">{item.VIEWED || fakeData.viewed}</span>
                </td>
                <td className="align-right no-padding-right">
                  <span className="table-cell__likes">{item.LIKES || fakeData.likes}</span>
                </td>
                <td className="align-center no-padding-right popover-parent">
                  {(item.comments || fakeData.comments) &&
                    <span className="table-cell__comments">{item.COMMENTS || fakeData.comments}</span>
                  }
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
