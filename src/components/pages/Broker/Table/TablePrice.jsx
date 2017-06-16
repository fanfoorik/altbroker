import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import { formatNumber } from 'utils/formaters';

import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';
import PricePopover from 'components/popovers/PricePopover';

const TablePrice = (props) => {
  const {
    active,
    id,
    price,
    refreshListingItem,
    triggerPopover,
  } = props;

  const formattedPrice = formatNumber(price, '-');

  return (
    <div className="table-trigger-container">
      <span
        className="table-cell__price-text"
        role="button"
        tabIndex="0"
        onClick={triggerPopover}
      >
        {formattedPrice}
      </span>
      <IsActive active={active}>
        <PricePopover
          id={id}
          price={price}
          refreshListingItem={refreshListingItem}
          triggerPopover={triggerPopover}
        />
      </IsActive>
    </div>
  );
};

TablePrice.propTypes = {
  active: PropTypes.bool.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  refreshListingItem: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
};

export default PopoverTriggerHOC(TablePrice);
