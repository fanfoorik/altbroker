import React from 'react';

import Icon from 'components/Icon';

export default class CommentsPopover extends React.Component {
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
          <div className="popover-header__tab active">Брокеры</div>
          <div className="popover-header__tab">Клиенты</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top active" data-id="01">
            <input
              className="popover-input"
              onChange={this.handleChange}
              type="text"
            />

            <ul className="popover-comments__list">
              <li className="popover-comments__item">-10 000</li>
              <li className="popover-comments__item">-50 000</li>
              <li className="popover-comments__item">-100 000</li>
              <li className="popover-comments__item">-500 000</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
