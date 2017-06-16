import PropTypes from 'prop-types';
import React from 'react';

import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';
import { formatNumber } from 'utils/formaters';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class PricePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      changed: false,
      value: formatNumber(props.price),
      priceHistory: [],
    };
  }

  componentDidMount() {
    this.fetchPriceHistory();
  }

  fetchPriceHistory = () => {
    ajax.get(`${apiUrl}broker/gb/${this.props.id}/getpricehistory/`, {
      headers: getHeaders(),
    })
      .then((response) => {
        const { data } = response;
        this.setState({ priceHistory: data.ANSWER.HISTORY });
      })
      .catch(error => handleError(error));
  };

  handleChange = (event) => {
    const val = event.target.value.replace(/\D/gi, '');
    this.setState({
      changed: true,
      value: formatNumber(val),
    });
  };

  handleDecreasePrice = (event) => {
    const valueToDecrease = event.target.dataset.value;
    const newValue = +(this.state.value.replace(/\D/gi, '')) - valueToDecrease;

    if (newValue < 0) return;

    this.setState({
      changed: true,
      value: formatNumber(newValue),
    });
  };

  changePrice = () => {
    if (this.state.changed) {
      ajax.post(`${apiUrl}broker/gb/${this.props.id}/changeprice/`,
        { VAL: this.state.value.replace(/\D/gi, '') },
        { headers: getHeaders() })
        .then((response) => {
          const { data } = response;
          const success = data.ANSWER.SUCCESS;

          if (success) {
            const item = data.ANSWER.ITEM[0];
            this.props.refreshListingItem(item);
          }
          // TODO: handle and visualize change price error
        })
        .catch(error => handleError(error));
    }
  };

  render() {
    const isDisabled = this.state.changed ? '' : 'disabled';
    const { providePopover } = this.props;
    const { value, priceHistory } = this.state;

    return (
      <div className="popover popover_visible" ref={node => providePopover(node)}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Цена</div>
          <div className="popover-header__tab js-popover-tab">История</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper active no-padding-top js-popover-tab">
            <input
              className="popover-input align-right"
              value={value}
              min={0}
              onChange={this.handleChange}
              type="text"
            />

            <ul className="popover-decrease-list" onClick={this.handleDecreasePrice}>
              <li className="popover-decrease-item" data-value={10000}>-10 000</li>
              <li className="popover-decrease-item" data-value={50000}>-50 000</li>
              <li className="popover-decrease-item" data-value={100000}>-100 000</li>
              <li className="popover-decrease-item" data-value={500000}>-500 000</li>
            </ul>

            <ul className="popover-actions-list">
              <li
                className={`popover-actions-item ${isDisabled}`}
                onClick={this.changePrice}
                role="button"
                tabIndex="0"
              >
                <Icon icon="check" width={20} height={15} />
              </li>
              <li className="popover-actions-item">
                <Icon icon="close" width={15} height={15} />
              </li>
            </ul>
          </div>

          <div className="popover-content-wrapper js-popover-tab">
            <div className="popover-history">
              {
                priceHistory.length > 0 ?
                priceHistory.map((item) => {
                  const {
                    ID: id,
                    DATE_CREATE: date,
                    PROPERTY_VAL_VALUE: price,
                  } = item;
                  const formattedHistoryPrice = formatNumber(price, '-');
                  return (
                    <div className="popover-history__item" key={`history-price-${id}`}>
                      <span className="popover-history__date">{date}</span>
                      <span className="popover-history__value">{formattedHistoryPrice}</span>
                    </div>
                  );
                })
                :
                <div className="popover-history__no-history">Нет истории</div>
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

PricePopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  price: PropTypes.number,
  refreshListingItem: PropTypes.func.isRequired,
};

PricePopover.defaultProps = {
  price: 0,
};

export default PopoverBaseHOC(PopoverWithTabsHOC(PricePopover));
