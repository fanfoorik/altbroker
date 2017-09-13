import PropTypes from 'prop-types';
import React from 'react';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterRange from './FilterRange';

function Income(props) {
  const rangeFrom = [1, 3, 5, 8, 12];
  const rangeTo = [3, 5, 8, 12, 18];

  return (
    <div className="filter__cell filter__cell_deeper filter__cell_hover">
      <FilterRange {...props} rangeFrom={rangeFrom} rangeTo={rangeTo} />
    </div>
  );
}

export default DropdownTriggerHOC(Income);
