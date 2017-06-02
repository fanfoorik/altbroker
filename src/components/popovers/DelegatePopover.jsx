import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';

class DelegatePopover extends React.Component {
  componentDidMount() {
    this.props.setDirection(this.popover);
  }

  render() {
    return (
      <div className="popover" ref={(node) => { this.popover = node; }}>
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

DelegatePopover.propTypes = {
  setDirection: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DelegatePopover);
