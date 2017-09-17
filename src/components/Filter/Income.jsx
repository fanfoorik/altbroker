import PropTypes from 'prop-types';
import React from 'react';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterRange from './FilterRange';

function Income(props) {
  const rangeFrom = [100000, 300000, 500000, 1000000];
  const rangeTo = [100000, 300000, 500000, 1000000];

  return (
    <div className="filter__cell filter__cell_deeper filter__cell_hover">
      <FilterRange {...props} rangeFrom={rangeFrom} rangeTo={rangeTo} />
    </div>
  );
}

export default DropdownTriggerHOC(Income);
