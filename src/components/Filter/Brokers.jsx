import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import BrokersDropdown from 'components/Filter/dropdowns/BrokersDropdown';

class Brokers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brokers: {
        checked: [],
        all: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isActive, brokers, selectedBrokers } = nextProps;
    const { all: stateBrokers } = this.state.brokers;
    const { handleSearch } = this.props;

    if (isActive) {
      this.setState({ brokers: parseCheckObjects(stateBrokers, selectedBrokers, false) });
    } else {
      this.setState({ brokers: parseCheckObjects(brokers, selectedBrokers, true) });
      if (nextProps.searchValue) {
        handleSearch('PROPERTY_BROKER', '');
      }
    }
  }

  render() {
    const {
      isActive,
      triggerDropdown,
      selectBroker,
      resetSection,
      searchValue,
      handleSearch,
    } = this.props;

    const { brokers } = this.state;
    const filteredItems = filterItems(searchValue, brokers.all);

    return (
      <div className="filter__cell filter__cell_hover">
        <div
          className={`filter-trigger ${brokers.checked.length ? 'filter-trigger_binded' : ''}`}
          onClick={triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Брокер</span>
          {
            brokers.checked.length > 1 &&
            <span className="filter-trigger__more">и еще {brokers.checked.length - 1}</span>
          }
          {
            !!brokers.checked.length &&
            <span className="filter-trigger__value">
              { brokers.checked[0].SHOT_NAME || brokers.checked[0].NAME || 'Нет имени/названия' }
            </span>
          }
        </div>

        {
          isActive &&
          <BrokersDropdown
            items={filteredItems}
            selectItem={selectBroker}
            searchValue={searchValue}
            handleSearch={handleSearch}
            resetSection={resetSection}
            triggerDropdown={triggerDropdown}
          />
        }
      </div>
    );
  }
}

Brokers.propTypes = {
  brokers: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedBrokers: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectBroker: PropTypes.func.isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Brokers);
