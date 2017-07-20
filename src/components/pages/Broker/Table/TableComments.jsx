import PropTypes from 'prop-types';
import React from 'react';

import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';
import CommentsPopover from 'components/popovers/CommentsPopover';

class TableComments extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
    };
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  updateCommentsLength = (commentsLength) => {
    this.setState({ comments: commentsLength });
  };

  render() {
    const {
      id,
      active,
      triggerPopover,
      refreshListingItem,
      commentsPopoverActive,
    } = this.props;

    const { comments } = this.state;

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
          <CommentsPopover
            id={id}
            triggerPopover={triggerPopover}
            updateComments={this.updateComments}
            updateCommentsLength={this.updateCommentsLength}
          />
        }
      </div>
    );
  }
}

TableComments.propTypes = {
  active: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
  refreshListingItem: PropTypes.func.isRequired,
};

// export default TableComments;
export default PopoverTriggerHOC(TableComments);
