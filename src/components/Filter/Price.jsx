import PropTypes from 'prop-types';
import React from 'react';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import FilterRange from './FilterRange';

function Price(props) {
  const rangeFrom = [500000, 1000000, 2000000, 3000000, 5000000];
  const rangeTo = [500000, 1000000, 2000000, 3000000, 5000000];

  return (
    <div className="filter__cell filter__cell_hover active">
      <FilterRange
        {...props}
        rangeFrom={rangeFrom}
        rangeTo={rangeTo}
      />
    </div>
  );
}

export default DropdownTriggerHOC(Price);
