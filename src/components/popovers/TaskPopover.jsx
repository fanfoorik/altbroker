import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class TaskPopover extends React.Component {
  componentDidMount() {
    this.props.setDirection(this.popover);
  }

  render() {
    return (
      <div className="popover popover_lg" ref={(node) => { this.popover = node; }}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Задача</div>
          <div className="popover-header__tab js-popover-tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active js-popover-tab">
            <ul className="popover-task-list">
              <li className="popover-task-item disabled">Разместить</li>
              <li className="popover-task-item">Понизить цену</li>
              <li className="popover-task-item">Изменить</li>
              <li className="popover-task-item">Удалить</li>
            </ul>
          </div>

          <div className="popover-content-wrapper js-popover-tab">
            <ul className="popover-history-list popover-history-list_task">
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">30.04–</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="time" width={12} height={12} /> Понижение цены
                </span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="check" width={12} height={12} /> Изменение
                </span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
                <span className="popover-history-value popover-history-value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

TaskPopover.propTypes = {
  setDirection: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(TaskPopover));
