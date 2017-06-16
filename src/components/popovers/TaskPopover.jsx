import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class TaskPopover extends React.Component {
  render() {
    const { providePopover } = this.props;

    return (
      <div className="popover popover_visible popover_lg popover_last" ref={node => providePopover(node)}>
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
            <div className="popover-history popover-history_task">
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">30.04–</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="time" width={12} height={12} /> Понижение цены
                </span>
              </div>
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">28.04-29.04</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="check" width={12} height={12} /> Изменение
                </span>
              </div>
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">28.04-29.04</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </div>
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">28.04-29.04</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </div>
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">28.04-29.04</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </div>
              <div className="popover-history__item">
                <span className="popover-history__date popover-history__date_task">28.04-29.04</span>
                <span className="popover-history__value popover-history__value_task">
                  <Icon icon="check" width={12} height={12} /> Понижение цены
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskPopover.propTypes = {
  providePopover: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(TaskPopover));
