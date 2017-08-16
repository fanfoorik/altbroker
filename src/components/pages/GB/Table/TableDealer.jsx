import PropTypes from 'prop-types';
import React from 'react';

import DealerPopover from 'components/popovers/DealerPopover';
import DelegateDealerPopover from 'components/popovers/DelegateDealerPopover';
import PopoverTriggerHOC from 'components/popovers/PopoverTriggerHOC';

class TableDealer extends React.Component {
  constructor() {
    super();
    this.state = {
      acct: false,
    };
  }

  changeDealer = () => {
    console.log('changeDealer');
  };

  delegateDealerTrigger = () => {
    this.setState({
      acct: !this.state.acct,
    });
  };

  render() {
    const {
      id,
      active,
      dealer,
      triggerPopover,
    } = this.props;

    const { acct } = this.state;

    return (
      <div className="table-trigger-container">
        <span
          className="table-cell__dealer"
          role="button"
          tabIndex="0"
          onClick={triggerPopover}
          // onClick={this.delegateDealerTrigger}
        >{dealer}</span>
        {
          active &&
          <DealerPopover
            id={id}
            delegateDealerTrigger={this.delegateDealerTrigger}
            triggerPopover={triggerPopover}
          />
        }
        {
          acct &&
          <DelegateDealerPopover
            id={id}
            changeDealer={this.changeDealer}
            triggerPopover={this.delegateDealerTrigger}
          />
        }
      </div>
    );
  }
}

TableDealer.propTypes = {
  id: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
  dealer: PropTypes.string.isRequired,
  triggerPopover: PropTypes.func.isRequired,
};

export default PopoverTriggerHOC(TableDealer);
