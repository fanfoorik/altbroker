import PropTypes from 'prop-types';
import React from 'react';
import Select from 'react-select';

import ajax from 'utils/ajax';
import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';

class DelegatePopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokers: [],
      selectedBrokerId: '',
      selectedBrokerLabel: '',
    };
  }

  componentWillMount() {
    this.fetchBrokers();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { selectedBrokerId, selectedBrokerLabel } = this.state;

    if (selectedBrokerId) {
      ajax.post(`broker/gb/${this.props.id}/changebroker/`, {
        BROKER_ID: selectedBrokerId,
      })
        .then(() => {
          this.props.changeBroker(selectedBrokerLabel);
          this.props.triggerPopover();
        });
    }
  };

  handleBrokerChange = (value) => {
    this.setState({
      selectedBrokerId: (value ? value.ID : ''),
      selectedBrokerLabel: (value ? value.label : '--'),
    });
  };

  fetchBrokers = () => {
    const ths = this;
    ajax.post(`broker/gb/${this.props.id}/changebroker/`, {
      BROKER_ID: '',
    })
      .then((data) => {
        this.setState({ brokers: data.ANSWER.map(item => (
          { ...item, label: item.SHOT_NAME || item.NAME || 'Нет имени/названия' }
          )),
        });
      });
  };

  render() {
    const { providePopover, triggerPopover } = this.props;
    const { brokers, selectedBrokerId } = this.state;

    return (
      <div className="popover popover_visible" ref={node => providePopover(node)}>
        <div className="popover-header">
          <div className="popover-header__tab">Кому передать</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active">
            <form onSubmit={this.handleSubmit}>
              <div className="popover-select-wrapper">
                <Select
                  autofocus
                  className="popover-select"
                  clearable={false}
                  onChange={this.handleBrokerChange}
                  options={brokers}
                  value={selectedBrokerId}
                  valueKey="ID"
                  placeholder="Выберите брокера"
                />
              </div>

              <div className="popover-actions-list">
                <button className="popover-actions-item" type="submit">
                  <Icon icon="check" width={20} height={15} />
                </button>
                <div className="popover-actions-item" onClick={triggerPopover} role="button" tabIndex="0">
                  <Icon icon="close" width={15} height={15} />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

DelegatePopover.propTypes = {
  id: PropTypes.string.isRequired,
  changeBroker: PropTypes.func.isRequired,
  providePopover: PropTypes.func.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DelegatePopover);
