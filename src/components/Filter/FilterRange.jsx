import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import RangeDropdown from './dropdowns/RangeDropdown';
import { formatNumber } from 'utils/formaters';

function FilterRange(props) {
  const {
    label,
    name,
    onChange,
    from,
    to,
    resetSection,
    isActive,
    triggerDropdown,
    rangeControls,
  } = props;

  const formatedFrom = formatNumber(parseInt(from, 10), '');
  const formatedTo = formatNumber(parseInt(to, 10), '');

  return (
    <div>
      <div
        className={`filter-trigger ${(from || to) ? 'filter-trigger_binded' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">{label}</span>
        {
          (from || to) &&
          <span className="filter-trigger__value">
            {!!from && `От ${formatedFrom}`}
            {from && to&& <span>&nbsp;&nbsp;</span>}
            {!!to && ` До ${formatedTo}`}
          </span>
        }
      </div>
      {
        isActive &&
        <RangeDropdown
          name={name}
          from={from}
          to={to}
          onChange={onChange}
          resetSection={resetSection}
          triggerDropdown={triggerDropdown}
          rangeControls={rangeControls}
        />
      }
    </div>
  );
}

FilterRange.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(FilterRange);
