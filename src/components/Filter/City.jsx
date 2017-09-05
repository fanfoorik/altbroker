import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects, filterItems } from 'utils/filterUtils';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import LocationDropdown from './dropdowns/LocationDropdown';

class City extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: {
        checked: [],
        all: [],
      },
      regions: {
        checked: [],
        all: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { isActive, items, selectedItems } = nextProps;
    const { all: stateCities } = this.state.cities;
    const { all: stateRegions } = this.state.regions;
    const { selectedCity, selectedRegions } = selectedItems;

    const { handleSearch } = this.props;

    const cityRegions = items.regions.filter((item) => {
      const { PROPERTY_CITY_VALUE: cityId } = item;
      return cityId && cityId === selectedCity[0];
    });

    if (isActive) {
      this.setState({
        cities: parseCheckObjects(stateCities, selectedCity, false),
        regions: parseCheckObjects(cityRegions, selectedRegions, false),
      });
    } else {
      this.setState({
        cities: parseCheckObjects(items.cities, selectedCity, true),
        regions: parseCheckObjects(cityRegions, selectedRegions, true),
      });
    }
  }

  handleDropdownClose = () => {
    const { searchCity, searchRegions } = this.props.searchValue;
    if (searchCity) this.props.handleSearch('PROPERTY_GEO_ID', '');
    if (searchRegions) this.props.handleSearch('PROPERTY_RAYON2', '');
    this.props.submitOnDropdownClose();
  };

  render() {
    const {
      isActive,
      triggerDropdown,
      changeFilterItem,
      handleSearch,
      resetSection,
    } = this.props;

    const { searchCity, searchRegions } = this.props.searchValue;
    const { cities, regions } = this.state;

    const filteredCities = filterItems(searchCity, cities.all);
    const filteredRegions = filterItems(searchRegions, regions.all);

    return (
      <div className="filter__cell filter__cell_hover">
        <div
          className={`filter-trigger ${cities.checked.length ? 'filter-trigger_binded' : ''}`}
          onClick={triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Город / Район</span>
          {
            !!regions.checked.length &&
            <span className="filter-trigger__more">Районы: {regions.checked.length}</span>
          }
          {
            !!cities.checked.length &&
            <span className="filter-trigger__value">
              { cities.checked[0].name }
            </span>
          }
        </div>
        {
          isActive &&
          <LocationDropdown
            items={{
              cities: { checked: cities.checked, all: filteredCities },
              regions: { checked: regions.checked, all: filteredRegions },
            }}
            selectedItems={{ selectedCity: cities.checked, selectedRegions: regions.checked }}
            changeFilterItem={changeFilterItem}
            searchValue={{ searchCity, searchRegions }}
            handleSearch={handleSearch}
            resetSection={resetSection}
            triggerDropdown={triggerDropdown}
            onClose={this.handleDropdownClose}
          />
        }
      </div>
    );
  }
}

City.propTypes = {
  items: PropTypes.shape({
    cities: PropTypes.arrayOf(PropTypes.object),
    regions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  selectedItems: PropTypes.shape({
    selectedCity: PropTypes.arrayOf(PropTypes.string),
    selectedRegions: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  searchValue: PropTypes.shape({
    searchCity: PropTypes.string,
    searchRegions: PropTypes.string,
  }).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(City);
