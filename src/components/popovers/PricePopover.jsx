import PropTypes from 'prop-types';
import React from 'react';
import ajax from 'utils/ajax';
import { formatNumber } from 'utils/formaters';
import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import Tabs from 'components/Tabs';

class PricePopover extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loaded: false,
      changed: false,
      value: formatNumber(props.price),
      priceHistory: [],
      priceEnabled: true,
    };
  }

  componentDidMount() {
    this.fetchPriceHistory();
  }

  fetchPriceHistory = () => {
    ajax.get(`broker/gb/${this.props.id}/getpricehistory/`)
      .then((data) => {
        this.setState({
          priceHistory: data.ANSWER.HISTORY,
          priceEnabled: data.ANSWER.ENABLE_PRICE === 'Y',
          loaded: true,
        });
      });
  };

  handleChange = (event) => {
    const val = event.target.value.replace(/\D/gi, '');

    this.setState({
      changed: +val !== this.props.price,
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

  changePrice = (event) => {
    event.preventDefault();
    const { refreshPrice, triggerPopover } = this.props;

    if (this.state.changed) {
      ajax.post(`broker/gb/${this.props.id}/changeprice/`,
        { VAL: this.state.value.replace(/\D/gi, '') })
        .then((data) => {
          const success = data.ANSWER.SUCCESS;
          if (success) {
            const newPrice = +data.ANSWER.ITEM[0].PROPERTY_PRICE_BUSINESS_VALUE;
            refreshPrice(newPrice);
            triggerPopover();
          }
        });
    }
  };

  render() {
    const isDisabled = this.state.changed ? '' : 'disabled';
    const { providePopover, triggerPopover } = this.props;
    const { value, priceHistory, priceEnabled, loaded } = this.state;

    return (
      <div className="popover popover_change-price popover_visible" ref={node => providePopover(node)}>
        {loaded ?
          <Tabs className="tab">

            {priceEnabled &&
              <div title={<div className="popover-header__tab">Цена</div>} data-tab="tab-1">
                <div className="popover-content-wrapper active no-padding-top">
                  <form onSubmit={this.changePrice}>
                    <input
                      className="popover-input align-right"
                      value={value}
                      min={0}
                      onChange={this.handleChange}
                      type="text"
                    />

                    <div className="popover-decrease-list" onClick={this.handleDecreasePrice} role="button" tabIndex="0">
                      <div className="popover-decrease-item" data-value={10000}>-10 000</div>
                      <div className="popover-decrease-item" data-value={50000}>-50 000</div>
                      <div className="popover-decrease-item" data-value={100000}>-100 000</div>
                      <div className="popover-decrease-item" data-value={500000}>-500 000</div>
                    </div>

                    <div className="popover-actions-list">
                      <button type="submit" className={`popover-actions-item ${isDisabled}`}>
                        <Icon icon="check" width={20} height={15} />
                      </button>
                      <div className="popover-actions-item" onClick={triggerPopover} role="button" tabIndex="0">
                        <Icon icon="close" width={15} height={15} />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            }

            <div title={<div className="popover-header__tab">История</div>} data-tab="tab-2">
              <div className="popover-content-wrapper" style={{ display: 'block' }}>
                <div className="popover-history">
                  {priceHistory.length > 0 ?
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

          </Tabs>
          :
          <div className="popover-history__no-history" style={{ paddingTop: 75 }}>Загрузка...</div>
        }
      </div>
    );
  }
}

PricePopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  refreshPrice: PropTypes.func.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  price: PropTypes.number,
};

PricePopover.defaultProps = {
  price: 0,
};

export default PopoverBaseHOC(PricePopover);
