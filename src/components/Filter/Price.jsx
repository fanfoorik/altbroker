import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import RangeDropdown from './dropdowns/RangeDropdown';
import { formatNumber } from 'utils/formaters';

function Price(props) {
  const {
    isActive,
    triggerDropdown,
    editFromToRange,
    fromPrice,
    toPrice,
    // cities,
    // selectedCity,
    // selectCity,
    // regions,
    // selectedRegions,
    // selectRegion,
  } = props;

  const formatedFromPrice = formatNumber(parseInt(fromPrice, 10), '');
  const formatedToPrice = formatNumber(parseInt(toPrice, 10), '');

  return (
    <div className="filter__cell filter__cell_hover active">
      <div
        className={`filter-trigger ${(fromPrice || toPrice) ? 'filter-trigger_binded' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">Цена</span>
        {
          (fromPrice || toPrice) &&
          <span className="filter-trigger__value">
            {!!fromPrice && `От ${formatedFromPrice}`}
            {fromPrice && toPrice && <span>&nbsp;&nbsp;</span>}
            {!!toPrice && ` До ${formatedToPrice}`}
          </span>
        }
      </div>
      {
        isActive &&
        <RangeDropdown
          fromPrice={fromPrice}
          toPrice={toPrice}
          editFromToRange={editFromToRange}
          triggerDropdown={triggerDropdown}
        />
      }
    </div>
  );
}

Price.propTypes = {
  // cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  // selectCity: PropTypes.func.isRequired,
  // regions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectedRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  editFromToRange: PropTypes.func.isRequired,
  fromPrice: PropTypes.string.isRequired,
  toPrice: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Price);
