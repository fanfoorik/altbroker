import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';

import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';
import PricePopover from 'components/popovers/PricePopover';

class TablePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      price: props.price,
    };
  }

  refreshPrice = (newPrice) => {
    this.setState({ price: newPrice });
  };

  render() {
    const {
      active,
      id,
      triggerPopover,
    } = this.props;

    const { price } = this.state;

    const formattedPrice = formatNumber(price, '-');

    return (
      <div className="table-trigger-container">
        <span
          className="table-cell__price"
          role="button"
          tabIndex="0"
          onClick={triggerPopover}
        >
          {formattedPrice}
        </span>
        {
          active &&
          <PricePopover
            id={id}
            price={price}
            refreshPrice={this.refreshPrice}
            triggerPopover={triggerPopover}
          />
        }
      </div>
    );
  }
}

TablePrice.propTypes = {
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TablePrice);
