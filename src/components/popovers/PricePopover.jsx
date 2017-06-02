import React from 'react';

import Icon from 'components/Icon';

export default class PricePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <div className="popover">
        <div className="popover-header">
          <div className="popover-header__tab active">Цена</div>
          <div className="popover-header__tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper active no-padding-top" data-id="01">
            <input
              className="popover-input align-right"
              defaultValue="1000000"
              onChange={this.handleChange}
              type="number"
            />

            <ul className="popover-decrease-list">
              <li className="popover-decrease-item">-10 000</li>
              <li className="popover-decrease-item">-50 000</li>
              <li className="popover-decrease-item">-100 000</li>
              <li className="popover-decrease-item">-500 000</li>
            </ul>

            <ul className="popover-actions-list">
              <li className="popover-actions-item disabled">
                <Icon icon="check" width={20} height={15} />
              </li>
              <li className="popover-actions-item">
                <Icon icon="close" width={15} height={15} />
              </li>
            </ul>
          </div>

          <div className="popover-content-wrapper" data-id="02">
            <div className="popover-content">
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
      </div>
    );
  }
}
