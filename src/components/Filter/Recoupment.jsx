import PropTypes from 'prop-types';
import React from 'react';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterRange from './FilterRange';

function Income(props) {
  return (
    <div className="filter__cell filter__cell_deeper filter__cell_hover">
      <FilterRange {...props} />
    </div>
  );
}

export default DropdownTriggerHOC(Income);
