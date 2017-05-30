import React from 'react';

import Icon from 'components/Icon';

export default class DealerPopover extends React.Component {
  render() {
    return (
      <div className="popover popover_lg">
        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active">
            <ul className="popover-deal-list">
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="user" width={16} height={16} />
                Александр
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="phone" width={16} height={16} />
                +7 (965) 000-77-44
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="email" width={16} height={16} />
                sushimarketwok.ru
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="web" width={16} height={16} />
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="location" width={16} height={16} />
                Московский 72
              </li>
            </ul>

            <ul className="popover-actions-list">
              <li className="popover-actions-item popover-actions-item_share">
                <Icon icon="location" width={16} height={16} />
              </li>
              <li className="popover-actions-item disabled">
                <Icon icon="check" width={20} height={15} />
              </li>
              <li className="popover-actions-item">
                <Icon icon="close" width={15} height={15} />
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
