import PropTypes from 'prop-types';
import React from 'react';

import DropdownHOC from 'components/HOC/DropdownHOC';
import CategoryList from './CategoryList';
import SubCategoryList from './SubCategoryList';
import FormControls from 'components/ui/FormControls';

function CategoryDropdown(props) {
  const { items, resetSection, triggerDropdown } = props;
  const withSubcategory = items.checked.filter(item => !!item.subcateg.length);

  return (

    <div className={`form-dropdown ${withSubcategory.length ? 'form-dropdown_two' : ''}`}>

      <CategoryList {...props} items={items.all} />

      {
        !!withSubcategory.length &&
        <SubCategoryList {...props} items={items.checked} />
      }

      <FormControls onReset={resetSection} onClose={triggerDropdown} name="SECTION_ID" />

    </div>
  );
}

CategoryDropdown.propTypes = {
  items: PropTypes.shape({
    all: PropTypes.arrayOf(PropTypes.object).isRequired,
    checked: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownHOC(CategoryDropdown);
