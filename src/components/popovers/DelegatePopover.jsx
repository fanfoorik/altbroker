import PropTypes from 'prop-types';
import React from 'react';

import ajax from 'utils/ajax';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';

class DelegatePopover extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokers: [],
    };
  }

  componentDidMount() {
    this.fetchBrokers();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const select = this.brokersSelect;
    ajax.post(`broker/gb/${this.props.id}/changebroker/`, {
      BROKER_ID: select.value,
    })
      .then(() => {
        this.props.changeBroker(select.options[select.selectedIndex].text);
      });

    this.props.triggerPopover();
  };

  fetchBrokers = () => {
    const ths = this;
    ajax.post(`broker/gb/${this.props.id}/changebroker/`, {
      BROKER_ID: '',
    })
      .then((data) => {
        ths.setState({ brokers: data.ANSWER });
      });
  };

  render() {
    const { providePopover, triggerPopover } = this.props;
    const { brokers } = this.state;

    return (
      <div className="popover popover_visible" ref={node => providePopover(node)}>
        <div className="popover-header">
          <div className="popover-header__tab">Кому передать</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active">
            <form onSubmit={this.handleSubmit}>
              <div className="popover-select-wrapper">
                <select className="popover-select" ref={(node) => { this.brokersSelect = node; }}>
                  {
                    brokers.map((item) => {
                      const {
                        ID: brokerId,
                        NAME: name,
                        SHOT_NAME: shortName,
                      } = item;

                      return (
                        <option key={`brokers-${brokerId}`} value={brokerId} >{ shortName || name || 'Безымянный'}</option>
                      );
                    })
                  }
                </select>
              </div>

              <div className="popover-actions-list">
                <button className="popover-actions-item disabled" type="submit">
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
