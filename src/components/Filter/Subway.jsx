import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import SubwayDropdown from './dropdowns/SubwayDropdown';

class Subway extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: {
        checked: [],
        all: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isActive, items } = nextProps;
    const { selectedSubways } = nextProps.selectedItems;
    const { all: stateItems } = this.state.items;
    const { handleSearch } = this.props;

    if (isActive) {
      this.setState({ items: parseCheckObjects(stateItems, selectedSubways, false) });
    } else {
      this.setState({ items: parseCheckObjects(items, selectedSubways, true) });
    }
  }

  handleDropdownClose = () => {
    if (this.props.searchValue) this.props.handleSearch('PROPERTY_METRO_NEW', '');
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      isActive,
      triggerDropdown,
      searchValue,
    } = this.props;

    const { selectedCity, selectedSubways } = this.props.selectedItems;
    const { items } = this.state;

    let sortedSubways = [];
    if (selectedCity.length) {
      sortedSubways = items.all.filter((item) => {
        const { PROPERTY_CITY_VALUE: cityId } = item;
        if (selectedCity[0] === cityId) {
          return item;
        }
        return false;
      });
    }

    const filteredItems = filterItems(searchValue, sortedSubways);

    return (
      <div className={`filter__cell ${sortedSubways.length ? 'filter__cell_hover' : ''}`}>
        <div
          className={`filter-trigger ${selectedSubways.length ? 'filter-trigger_binded' : ''}`}
          onClick={sortedSubways.length && triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Метро</span>
          {selectedSubways.length > 1 &&
            <span className="filter-trigger__more">и еще {selectedSubways.length - 1}</span>
          }
          {!!selectedSubways.length &&
            <span className="filter-trigger__value">
              {
                sortedSubways.map((item) => {
                  const { ID: id, NAME: name } = item;
                  if (selectedSubways[0] === id) return name;
                  return false;
                })
              }
            </span>
          }
        </div>
        {isActive &&
          <SubwayDropdown
            {...this.props}
            items={filteredItems}
            onClose={this.handleDropdownClose}
          />
        }
      </div>
    );
  }
}

Subway.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.shape({
    selectedCity: PropTypes.arrayOf(PropTypes.string),
    selectedSubways: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  searchValue: PropTypes.string.isRequired,
  handleSearch: PropTypes.func.isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Subway);
