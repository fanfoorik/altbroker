import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import DealPopover from 'components/popovers/DealPopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

const TableOptions = (props) => {
  const {
    active,
    triggerPopover,
    triggerDetailPage,
    id,
  } = props;

  return (
    <div
      className="table-trigger-container table-options"
      role="button"
      tabIndex="0"
    >
      <span className="table-options__trigger" onClick={triggerPopover} role="button" tabIndex="0">
        <span className="table-cell__dot" />
        <span className="table-cell__dot" />
        <span className="table-cell__dot" />
      </span>

      <IsActive active={active}>
        <DealPopover
          id={id}
          triggerPopover={triggerPopover}
          triggerDetailPage={triggerDetailPage}
        />
      </IsActive>
    </div>
  );
};

TableOptions.propTypes = {
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  triggerDetailPage: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TableOptions);
