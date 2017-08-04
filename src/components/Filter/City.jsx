import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import CityDropdown from './dropdowns/CityDropdown';

function City(props) {
  const {
    isActive,
    triggerDropdown,
    cities,
    selectedCity,
    selectCity,
    regions,
    selectedRegions,
    selectRegion,
  } = props;

  return (
    <div className="filter__cell filter__cell_hover">
      <div
        className={`filter-trigger ${selectedCity.length ? 'filter-trigger_binded' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">Город / Район</span>
        {
          !!selectedRegions.length &&
          <span className="filter-trigger__more">Районы: {selectedRegions.length}</span>
        }
        {
          !!selectedCity.length &&
          <span className="filter-trigger__value">
            {
              cities.map((item) => {
                const {
                  ID: id,
                  NAME: name,
                  SHOT_NAME: shortName,
                } = item;

                if (id === selectedCity[0]) return shortName || name || 'Безымянный';
                return false;
              })
            }
          </span>
        }
      </div>
      {
        isActive &&
        <CityDropdown
          triggerDropdown={triggerDropdown}
          cities={cities}
          selectedCity={selectedCity}
          selectCity={selectCity}
          regions={regions}
          selectedRegions={selectedRegions}
          selectRegion={selectRegion}
        />
      }
    </div>
  );
}

City.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCity: PropTypes.func.isRequired,
  regions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRegion: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(City);
