import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import SubwayDropdown from './dropdowns/SubwayDropdown';

function Subway(props) {
  const {
    isActive,
    triggerDropdown,
    subways,
    selectedSubways,
    selectSubway,
    selectedCity,
  } = props;

  let sortedSubways = [];
  if (selectedCity.length) {
    sortedSubways = subways.filter((item) => {
      const { PROPERTY_CITY_VALUE } = item;
      if (selectedCity[0] === PROPERTY_CITY_VALUE) {
        return item;
      }
      return false;
    });
  }

  return (
    <div className={`filter__cell ${sortedSubways.length ? 'filter__cell_hover' : ''}`}>
      <div
        className={`filter-trigger ${selectedSubways.length ? 'filter-trigger_binded' : ''}`}
        onClick={sortedSubways.length && triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">Метро</span>
        {
          selectedSubways.length > 1 &&
          <span className="filter-trigger__more">и еще {selectedSubways.length - 1}</span>
        }
        {
          !!selectedSubways.length &&
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
      {
        isActive &&
        <SubwayDropdown
          subways={sortedSubways}
          triggerDropdown={triggerDropdown}
          selectedSubways={selectedSubways}
          selectSubway={selectSubway}
        />
      }
    </div>
  );
}

Subway.propTypes = {
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  subways: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedSubways: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectSubway: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Subway);
