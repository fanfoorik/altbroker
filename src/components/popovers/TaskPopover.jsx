import PropTypes from 'prop-types';
import React from 'react';
import ajax from 'utils/ajax';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class TaskPopover extends React.Component {
  constructor() {
    super();
    this.state = {
      tasklist: {
        BUTT_publ: {},
        BUTT_refresh: {},
        BUTT_edit: {},
        BUTT_del: {},
      },
      taskHistory: [],
    };
  }

  componentDidMount() {
    this.fetchTasklist();
  }

  fetchTasklist = () => {
    const { id, pageUrl, brokerEmail } = this.props;
    const ths = this;

    ajax.post(`broker/gb/${id}/gettasks/`, {
      DETAIL_PAGE_URL: pageUrl,
      PROPERTY_BROKER_VALUE_EMAIL: brokerEmail,
      ACTION: 'status',
    })
      .then((data) => {
        ths.setState({
          tasklist: data.ANSWER.BUTTONS,
          taskHistory: data.ANSWER.HISTORY,
        });
      });
  };

  taskAction = (event) => {
    const action = event.target.dataset.action;
    const isActive = !event.target.classList.contains('disabled');
    const { id, pageUrl, brokerEmail, triggerPopover } = this.props;
    const ths = this;

    if (isActive) {
      ajax.post(`broker/gb/${id}/gettasks/`, {
        DETAIL_PAGE_URL: pageUrl,
        PROPERTY_BROKER_VALUE_EMAIL: brokerEmail,
        ACTION: action,
      })
        .then((data) => {
          triggerPopover();
          ths.setState({
            tasklist: data.ANSWER.BUTTONS,
            taskHistory: data.ANSWER.HISTORY,
          });
        });
    }
  };

  render() {
    const { providePopover } = this.props;
    const {
      BUTT_publ,
      BUTT_refresh,
      BUTT_edit,
      BUTT_del,
    } = this.state.tasklist;
    const { taskHistory } = this.state;

    return (
      <div className="popover popover_visible popover_lg popover_last" ref={node => providePopover(node)}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Задача</div>
          <div className="popover-header__tab js-popover-tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active js-popover-tab">
            <div className="popover-task-list" onClick={this.taskAction} role="button" tabIndex="0">
              <div className={`popover-task-item ${!BUTT_publ.ENABLE ? 'disabled' : ''}`} data-action="publ">Разместить</div>
              <div className={`popover-task-item ${!BUTT_refresh.ENABLE ? 'disabled' : ''}`} data-action="refresh">Переразместить</div>
              <div className={`popover-task-item ${!BUTT_edit.ENABLE ? 'disabled' : ''}`} data-action="edit">Изменить</div>
              <div className={`popover-task-item ${!BUTT_del.ENABLE ? 'disabled' : ''}`} data-action="del">Удалить</div>
            </div>
          </div>

          <div className="popover-content-wrapper js-popover-tab">
            <div className="popover-history popover-history_task js-scrollable">
              <div>
                {
                  !!taskHistory.length &&
                  taskHistory.map((item) => {
                    const {
                      ID: taskHistoryId,
                      CREATED_DATE: onDate,
                      CLOSED_DATE: offDate,
                      STATUS_TEXT: status,
                      URL: url,
                      PROCESS: process,
                    } = item;

                    return (
                      <a href={url} key={`task-history-${taskHistoryId}`} target="_blank" className="popover-history__item" rel="noopener noreferrer">
                        <span className="popover-history__date popover-history__date_task">{`${onDate}-${offDate}`}</span>
                        <span className="popover-history__value popover-history__value_task">
                          <Icon icon={process ? 'time' : 'check'} width={12} height={12} /> {status}
                        </span>
                      </a>
                    );
                  })
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

TaskPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  pageUrl: PropTypes.string.isRequired,
  brokerEmail: PropTypes.string.isRequired,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(TaskPopover));
