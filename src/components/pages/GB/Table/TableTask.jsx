import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import Icon from 'components/Icon';
import TaskPopover from 'components/popovers/TaskPopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

const TableTask = (props) => {
  const {
    id,
    active,
    triggerPopover,
    pageUrl,
    brokerEmail,
  } = props;

  return (
    <div className="table-trigger-container">
      <Icon
        className="table-cell__list"
        icon="list"
        width={18}
        height={18}
        role="button"
        tabIndex="0"
        onClick={triggerPopover}
      />

      {active &&
        <TaskPopover
          id={id}
          pageUrl={pageUrl}
          brokerEmail={brokerEmail}
          triggerPopover={triggerPopover}
        />
      }
    </div>
  );
};

TableTask.propTypes = {
  active: PropTypes.bool.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  pageUrl: PropTypes.string.isRequired,
  brokerEmail: PropTypes.string.isRequired,
};

export default PopoverTriggerHOC(TableTask);
