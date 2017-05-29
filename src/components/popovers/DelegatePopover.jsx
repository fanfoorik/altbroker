import React from 'react';

import Icon from 'components/Icon';

export default class DelegatePopover extends React.Component {
  render() {
    return (
      <div className="popover">
        <div className="popover-header">
          <div className="popover-header__tab">Кому передать</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active">
            <div className="popover-select-wrapper">
              <select className="popover-select">
                <option value="Закерьяев М.">Закерьяев М.</option>
                <option value="Иванов М.">Иванов М.</option>
                <option value="Петров М.">Петров М.</option>
                <option value="Сидоров М.">Сидоров М.</option>
              </select>
            </div>

            <ul className="popover-actions-list">
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
