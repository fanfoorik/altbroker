import React from 'react';

import BrokerTableHeader from './BrokerTableHeader';
import Icon from 'components/Icon';
import DelegatePopover from 'components/popovers/DelegatePopover';
import DealPopover from 'components/popovers/DealPopover';
import DealerPopover from 'components/popovers/DealerPopover';
import PricePopover from 'components/popovers/PricePopover';
import TaskPopover from 'components/popovers/TaskPopover';

import fakeData from './fakeData';

const colors = {
  0: '#e1e5e9',
  1: '#ffd900',
  2: '#8b572a',
  3: '#4da1ff',
  4: '#6dd100',
};

export default function BrokerTable(props) {
  return (
    <table className="container listing">
      <BrokerTableHeader />

      <tbody>
        {fakeData.map((item) => {
          return (
            <tr key={`table-item-${Math.floor(Date.now() * Math.random())}`}>
              <td className="table-col__checkbox">
                <label className="checkbox">
                  <input type="checkbox" />
                  <div className="checkbox_indicator" />
                </label>
              </td>
              <td className="table-cell__color no-padding">
                <span className="table-color" style={{ backgroundColor: colors[Math.floor(Math.random() * 5)] }} />
              </td>
              <td><span className="table-cell__id">{item.id}</span></td>
              <td className="no-padding">
                <div className="table-cell__img-wrapper table-tooltip">
                  <img className="table-cell__img" src={item.img} alt={item.name} />
                  <span className="table-tooltip__content clearfix">
                    <img className="table-tooltip__content-img" src={item.img} alt={item.name} />
                  </span>
                </div>
              </td>
              <td>
                <div className="table-cell__name">
                  <span className="table-cell__span table-cell__name-text">{item.name}</span>
                </div>
              </td>
              <td><span className="table-cell__category">{item.category}</span></td>
              <td className="no-padding">
                <span className="table-cell__location no-padding">{item.location}</span>
              </td>
              <td className="align-right no-padding-left popover-parent">
                <div className="table-cell__price">
                  <span className="table-cell__price-text">{item.price}</span>
                  <PricePopover />
                </div>
              </td>
              <td className="align-right no-padding-left">
                <div className="table-cell__profit">{item.profit}</div>
              </td>
              <td className="popover-parent no-padding-left">
                <div className="table-cell__broker">
                  <span className="table-cell__broker-text">{item.broker}</span>
                  <DelegatePopover />
                </div>
              </td>
              <td className="popover-parent no-padding-left">
                <div className="table-cell__dealer">
                  <span className="table-cell__dealer-text">{item.dealer}</span>
                  <DealerPopover />
                </div>
              </td>
              <td className="no-padding-left">
                <span className="table-cell__created">{item.created}</span>
              </td>
              <td className="no-padding-left">
                <span className="table-cell__last-update">{item.lastUpdate}</span>
              </td>
              <td className="align-right no-padding-right">
                <span className="table-cell__viewed">{item.viewed}</span>
              </td>
              <td className="align-right no-padding-right">
                <span className="table-cell__likes">{item.likes}</span>
              </td>
              <td className="align-center no-padding-right clickable">
                {item.comments && <span className="table-cell__comments">{item.comments}</span>}
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
