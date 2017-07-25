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
    };
  }

  componentDidMount() {
    this.fetchTasklist();
  }

  fetchTasklist = () => {
    const { id, pageUrl, brokerEmail } = this.props;
    const ths = this;

    ajax.post(`broker/gb/${id}/gettasks/`, {
      PROPERTY_BROKER_VALUE_TEXT: '',
      DETAIL_PAGE_URL: pageUrl,
      PROPERTY_BROKER_VALUE_EMAIL: brokerEmail,
      ACTION: 'status',
    })
      .then((data) => {
        const history = data.ANSWER.HISTORY;
        ths.setState({ tasklist: data.ANSWER.BUTTONS });
      });
  };

  taskAction = (event) => {
    console.log(event);
  };

  render() {
    const { providePopover } = this.props;
    const {
      BUTT_publ,
      BUTT_refresh,
      BUTT_edit,
      BUTT_del,
    } = this.state.tasklist;

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
      </div>
    );
  }
}

TaskPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  pageUrl: PropTypes.string.isRequired,
  brokerEmail: PropTypes.string.isRequired,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(TaskPopover));
