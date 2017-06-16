import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';
import CommentsPopover from 'components/popovers/CommentsPopover';

const TableComments = (props) => {
  const {
    active,
    comments,
    triggerPopover,
  } = props;

  return (
    <div className="table-trigger-container">
      <span
        className="table-cell__comments"
        role="button"
        tabIndex="0"
        onClick={triggerPopover}
      >
        {comments}
      </span>
      <IsActive active={active}>
        <CommentsPopover triggerPopover={triggerPopover} />
      </IsActive>
    </div>
  );
};

TableComments.propTypes = {
  active: PropTypes.bool.isRequired,
  comments: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TableComments);
