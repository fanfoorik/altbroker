import PropTypes from 'prop-types';
import React from 'react';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterRange from './FilterRange';

function Price(props) {
  return (
    <div className="filter__cell filter__cell_hover active">
      <FilterRange {...props} />
    </div>
  );
}

export default DropdownTriggerHOC(Price);
