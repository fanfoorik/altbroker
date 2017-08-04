import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import DropdownHOC from 'components/HOC/DropdownHOC';
import CategoryList from './CategoryList';
import SubCategoryList from './SubCategoryList';

function CategoryDropdown(props) {
  const {
    categories,
    selectedCategories,
    selectCategory,
    subCategories,
    // selectedCity,
    // selectCity,
    // regions,
    // selectedRegions,
    // selectRegion,
  } = props;

  {/*<div className={`form-dropdown ${selectedCity.length ? 'form-dropdown_two' : ''}`}>*/}

  return (

    <div className="form-dropdown form-dropdown_two">

      <CategoryList
        categories={categories}
        selectedCategories={selectedCategories}
        selectCategory={selectCategory}
      />

      <SubCategoryList subCategories={subCategories} />

      <div className="form-controls">
        <span className="form-controls__reset">Сбросить</span>
        <div className="form-controls__actions">
          <button type="submit" className={'form-controls__actions_item disabled'}>
            <Icon
              icon="check"
              width={20}
              height={15}
            />
          </button>
          <div className="form-controls__actions_item" role="button" tabIndex="0">
            <Icon
              className="icon__close"
              icon="close"
              width={15}
              height={15}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

CategoryDropdown.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCategory: PropTypes.func.isRequired,
  // selectedRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  // selectRegion: PropTypes.func.isRequired,
};

export default DropdownHOC(CategoryDropdown);
