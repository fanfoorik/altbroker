import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import BrokersDropdown from 'components/Filter/dropdowns/BrokersDropdown';

class Brokers extends React.Component {
  constructor(props) {
    super(props);
    const { items, selectedItems } = props;
    this.state = ({ items: parseCheckObjects(items, selectedItems, true) });
  }

  componentWillReceiveProps(nextProps) {
    const { isActive, items, selectedItems } = nextProps;
    const { all: stateItems } = this.state.items;

    if (isActive) {
      this.setState({ items: parseCheckObjects(stateItems, selectedItems, false) });
    } else {
      this.setState({ items: parseCheckObjects(items, selectedItems, true) });
    }
  }

  handleDropdownClose = () => {
    if (this.props.searchValue) this.props.handleSearch('PROPERTY_BROKER', '');
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      isActive,
      triggerDropdown,
      changeFilterItem,
      resetSection,
      searchValue,
      handleSearch,
      selectCheckGroup,
    } = this.props;

    const { items } = this.state;
    const filteredItems = filterItems(searchValue, items.all);

    return (
      <div className="filter__cell filter__cell_hover">
        <div
          className={`filter-trigger ${items.checked.length ? 'filter-trigger_binded' : ''}`}
          onClick={triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Брокер</span>
          {
            items.checked.length > 1 &&
            <span className="filter-trigger__more">и еще {items.checked.length - 1}</span>
          }
          {
            !!items.checked.length &&
            <span className="filter-trigger__value">
              { items.checked[0].SHOT_NAME || items.checked[0].NAME || 'Нет имени/названия' }
            </span>
          }
        </div>

        {
          isActive &&
          <BrokersDropdown
            items={filteredItems}
            changeFilterItem={changeFilterItem}
            searchValue={searchValue}
            handleSearch={handleSearch}
            resetSection={resetSection}
            triggerDropdown={triggerDropdown}
            onClose={this.handleDropdownClose}
            selectCheckGroup={selectCheckGroup}
          />
        }
      </div>
    );
  }
}

Brokers.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.arrayOf(PropTypes.string).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  selectCheckGroup: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Brokers);
