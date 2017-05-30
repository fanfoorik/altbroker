import React from 'react';

export default class TaskPopover extends React.Component {
  render() {
    return (
      <div className="popover popover_lg">
        <div className="popover-header">
          <div className="popover-header__tab active">Задача</div>
          <div className="popover-header__tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active" data-id="01">
            <ul className="popover-task-list">
              <li className="popover-task-item disabled">Разместить</li>
              <li className="popover-task-item">Понизить цену</li>
              <li className="popover-task-item">Изменить</li>
              <li className="popover-task-item">Удалить</li>
            </ul>
          </div>
        </div>

        <div className="popover-content-wrapper" data-id="02">
          <ul className="popover-history-list">
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">30.04–</span>
              <span className="popover-history-value popover-history-value_task">Понижение цены</span>
            </li>
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
              <span className="popover-history-value popover-history-value_task">Изменение</span>
            </li>
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">28.04-29.04</span>
              <span className="popover-history-value popover-history-value_task">Понижение цены</span>
            </li>
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">28.04- 29.04</span>
              <span className="popover-history-value popover-history-value_task">Понижение цены</span>
            </li>
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">28.04- 29.04</span>
              <span className="popover-history-value popover-history-value_task">Понижение цены</span>
            </li>
            <li className="popover-history-item">
              <span className="popover-history-date popover-history-date_task">28.04- 29.04</span>
              <span className="popover-history-value popover-history-value_task">Понижение цены</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
