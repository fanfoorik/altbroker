import PropTypes from 'prop-types';
import React from 'react';
import IsActive from 'utils/IsActive';

import DelegatePopover from 'components/popovers/DelegatePopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

class TablePrice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      broker: props.broker,
    };
  }

  changeBroker = (newBroker) => {
    this.setState({ broker: newBroker });
  };

  render() {
    const {
      id,
      active,
      triggerPopover,
    } = this.props;

    const { broker } = this.state;

    return (
      <div className="table-trigger-container">
        <span
          className="table-cell__broker"
          role="button"
          tabIndex="0"
          onClick={triggerPopover}
        >{broker}</span>

        {
          active &&
          <DelegatePopover
            id={id}
            changeBroker={this.changeBroker}
            triggerPopover={triggerPopover}
          />
        }
      </div>
    );
  }
};

TablePrice.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  broker: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TablePrice);
