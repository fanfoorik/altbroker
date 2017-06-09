import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import DealerPopover from 'components/popovers/DealerPopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

const TableDealer = (props) => {
  const {
    active,
    dealer,
    triggerPopover,
  } = props;

  return (
    <div className="table-trigger-container">
      <span
        className="table-cell__dealer"
        role="button"
        tabIndex="0"
        onClick={triggerPopover}
      >{dealer}</span>

      <IsActive active={active}>
        <DealerPopover triggerPopover={triggerPopover} />
      </IsActive>
    </div>
  );
};

TableDealer.propTypes = {
  active: PropTypes.bool.isRequired,
  dealer: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TableDealer);
