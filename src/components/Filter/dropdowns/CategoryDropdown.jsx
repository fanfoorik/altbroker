import PropTypes from 'prop-types';
import React from 'react';

import { filterItems } from 'utils/filterUtils';
import DropdownHOC from 'components/HOC/DropdownHOC';
import CategoryList from './CategoryList';
import SubCategoryList from './SubCategoryList';
import FormControls from 'components/ui/FormControls';
import Icon from 'components/Icon';

function CategoryDropdown(props) {
  const { items, resetSection, triggerDropdown, selectCheckGroup } = props;
  const { searchCategory } = props.searchValue;
  const withSubcategory = items.checked.filter(item => !!item.subcateg.length);

  return (

    <div className={`form-dropdown ${withSubcategory.length ? 'form-dropdown_two' : ''}`}>

      <CategoryList {...props} items={items.all} />

      {
        !!withSubcategory.length &&
        <SubCategoryList {...props} items={items.checked} />
      }

      <FormControls
        left={[
          <div
            className="form-control"
            key="check-all"
            onClick={() => selectCheckGroup(filterItems(searchCategory, items.all), 'SECTION_ID_1')}
            role="button"
            tabIndex="0"
          >Все</div>,
          <span
            key="close-trigger"
            className="form-control form-control_reset"
            onClick={resetSection}
            role="button"
            tabIndex="0"
            data-name="SECTION_ID"
          >Сбросить</span>,
        ]}
        right={(
          <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
            <Icon className="icon__close" icon="close" width={15} height={15} />
          </div>
        )}
      />

    </div>
  );
}

CategoryDropdown.propTypes = {
  items: PropTypes.shape({
    all: PropTypes.arrayOf(PropTypes.object).isRequired,
    checked: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  searchValue: PropTypes.shape({
    searchCategory: PropTypes.string,
  }).isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  selectCheckGroup: PropTypes.func.isRequired,
};

export default DropdownHOC(CategoryDropdown);
