import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import FilterTooltipHOC from 'components/Filter/FilterTooltipHOC';

class FilterCategory extends React.Component {
  render() {
    return (
      <div>
        FilterCategory
      </div>
    );
  }
}

export default FilterTooltipHOC(FilterCategory);
