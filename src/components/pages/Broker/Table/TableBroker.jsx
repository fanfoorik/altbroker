import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import DelegatePopover from 'components/popovers/DelegatePopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

const TablePrice = (props) => {
  const {
    active,
    broker,
    triggerPopover,
  } = props;

  return (
    <div className="table-trigger-container">
      <span
        className="table-cell__broker"
        role="button"
        tabIndex="0"
        onClick={triggerPopover}
      >{broker}</span>

      <IsActive active={active}>
        <DelegatePopover triggerPopover={triggerPopover} />
      </IsActive>
    </div>
  );
};

TablePrice.propTypes = {
  active: PropTypes.bool.isRequired,
  broker: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TablePrice);
