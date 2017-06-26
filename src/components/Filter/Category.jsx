import PropTypes from 'prop-types';
import React from 'react';

import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import CategoryDropdown from './dropdowns/CategoryDropdown';

function Category(props) {
  const {
    isActive,
    triggerDropdown,
    categories,
    subCategories,
    selectedCategories,
    selectCategory,
  } = props;

  return (
    <div className="filter__cell filter__cell_hover active">
      <div
        className={`filter-trigger ${selectedCategories.length ? 'filter-trigger_binded' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <span className="filter-trigger__label">Категория</span>
        {
          selectedCategories.length > 1 &&
          <span className="filter-trigger__more">и еще {selectedCategories.length - 1}</span>
        }
        {
          !!selectedCategories.length &&
          <span className="filter-trigger__value">
            {
              categories.map((item) => {
                const {
                  ID: id,
                  NAME: name,
                } = item;

                if (id === selectedCategories[0]) return name;
                return false;
              })
            }
          </span>
        }
      </div>
      {
        isActive &&
        <CategoryDropdown
          categories={categories}
          subCategories={subCategories}
          selectedCategories={selectedCategories}
          selectCategory={selectCategory}
          triggerDropdown={triggerDropdown}
        />
      }
    </div>
  );
}

Category.propTypes = {
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Category);
