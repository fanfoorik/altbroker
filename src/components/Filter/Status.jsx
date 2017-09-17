import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects } from 'utils/filterUtils';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import StatusDropdown from './dropdowns/StatusDropdown';

class Status extends React.Component {
  constructor(props) {
    super(props);
    const { items, selectedItems } = props;
    this.state = { items: parseCheckObjects(items, [selectedItems], false) };
  }

  componentWillReceiveProps(nextProps) {
    const { items, selectedItems } = nextProps;
    this.setState({ items: parseCheckObjects(items, [selectedItems], false) });
  }

  handleDropdownClose = () => {
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      isActive,
      triggerDropdown,
    } = this.props;

    const { items } = this.state;

    const data = {
      ...this.props,
      items: items.all,
    };

    return (
      <div className={`filter__cell filter__cell_hover ${isActive ? 'active' : ''}`}>
        <div
          className={`filter-trigger ${items.checked.length ? 'filter-trigger_binded' : ''}`}
          onClick={triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Статус</span>
          {
            !!items.checked.length &&
            <span className="filter-trigger__value">
              { items.checked[0].VALUE }
            </span>
          }
        </div>
        {
          isActive &&
          <StatusDropdown {...data} onClose={this.handleDropdownClose} />
        }
      </div>
    );
  }
}

Status.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.string.isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Status);
