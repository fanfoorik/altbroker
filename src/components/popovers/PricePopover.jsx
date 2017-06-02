import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class PricePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changed: false,
      value: parseInt(props.value, 10),
    };
  }

  componentDidMount() {
    this.props.setDirection(this.popover);
  }

  handleChange = (event) => {
    this.setState({
      changed: true,
      value: event.target.value,
    });
  };

  handleDecreasePrice = (event) => {
    const valueToDecrease = event.target.dataset.value;
    const newValue = this.state.value - valueToDecrease;
    if (newValue < 0) return;

    this.setState({
      value: newValue,
    });
  };

  render() {
    const isDisabled = this.state.changed ? '' : 'disabled';

    return (
      <div className="popover" ref={(node) => { this.popover = node; }}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Цена</div>
          <div className="popover-header__tab js-popover-tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper active no-padding-top js-popover-tab">
            <input
              className="popover-input align-right"
              value={this.state.value}
              min={0}
              onChange={this.handleChange}
              type="number"
            />

            <ul className="popover-decrease-list" onClick={this.handleDecreasePrice}>
              <li className="popover-decrease-item" data-value={10000}>-10 000</li>
              <li className="popover-decrease-item" data-value={50000}>-50 000</li>
              <li className="popover-decrease-item" data-value={100000}>-100 000</li>
              <li className="popover-decrease-item" data-value={500000}>-500 000</li>
            </ul>

            <ul className="popover-actions-list">
              <li className={`popover-actions-item ${isDisabled}`}>
                <Icon icon="check" width={20} height={15} />
              </li>
              <li className="popover-actions-item">
                <Icon icon="close" width={15} height={15} />
              </li>
            </ul>
          </div>

          <div className="popover-content-wrapper js-popover-tab">
            <ul className="popover-history-list">
              <li className="popover-history-item">
                <span className="popover-history-date">27.04</span>
                <span className="popover-history-value">1 250 000 000</span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date">26.04</span>
                <span className="popover-history-value">1 550 000 000</span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date">22.04</span>
                <span className="popover-history-value">3 290 000 100</span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date">01.04</span>
                <span className="popover-history-value">3 290 000 100</span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date">21.03</span>
                <span className="popover-history-value">290 000 100</span>
              </li>
              <li className="popover-history-item">
                <span className="popover-history-date">10.03</span>
                <span className="popover-history-value">100</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

PricePopover.propTypes = {
  changed: PropTypes.bool,
  setDirection: PropTypes.func.isRequired,
  value: PropTypes.number,
};

PricePopover.defaultProps = {
  changed: false,
  value: 0,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(PricePopover));
