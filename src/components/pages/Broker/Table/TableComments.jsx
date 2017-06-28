import PropTypes from 'prop-types';
import React from 'react';

import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';
import CommentsPopover from 'components/popovers/CommentsPopover';

const TableComments = (props) => {
  const {
    id,
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
      {
        active &&
        <CommentsPopover id={id} triggerPopover={triggerPopover} />
      }
    </div>
  );
};

TableComments.propTypes = {
  active: PropTypes.bool.isRequired,
  comments: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TableComments);
