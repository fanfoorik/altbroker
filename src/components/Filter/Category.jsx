import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import CategoryDropdown from './dropdowns/CategoryDropdown';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      categories: {
        all: [],
        checked: [],
      },
    };
  }

  componentWillReceiveProps(nextProps) {
    const { categories: propsCategories } = nextProps.items;
    const { all: stateCategories } = this.state.categories;

    this.prepareCategory(
      nextProps.isActive ? stateCategories : propsCategories,
      !nextProps.isActive, nextProps);
  }

  handleDropdownClose = () => {
    this.props.handleSearch('SECTION_ID_1', '');
    this.props.handleSearch('SECTION_ID_2', '');
    this.props.submitOnDropdownClose();
  };

  prepareCategory = (items, raise, nextProps) => {
    const { subCategories } = this.props.items;
    const { selectedCategories, selectedSubCategories } = nextProps.selectedItems;
    const categs = parseCheckObjects(items, selectedCategories, raise);

    categs.checked.forEach((obj) => {
      const item = obj;
      const { ID: id } = item;
      const subcategs = subCategories.filter((el) => {
        const { IBLOCK_SECTION_ID: categId } = el;
        return id === categId;
      });
      item.subcateg = parseCheckObjects(subcategs, selectedSubCategories, false).all;
    });

    this.setState({ categories: categs });
  };

  render() {
    const { isActive, triggerDropdown } = this.props;
    const { categories } = this.state;

    return (
      <div className="filter__cell filter__cell_hover filter__cell_category active">
        <div
          className={`filter-trigger ${categories.checked.length ? 'filter-trigger_binded' : ''}`}
          onClick={triggerDropdown}
          role="button"
          tabIndex="0"
        >
          <span className="filter-trigger__label">Категория</span>
          {
            categories.checked.length > 1 &&
            <span className="filter-trigger__more">и еще {categories.checked.length - 1}</span>
          }
          {
            !!categories.checked.length &&
            <span className="filter-trigger__value">
              {
                categories.checked[0].NAME
              }
            </span>
          }
        </div>
        {
          isActive &&
          <CategoryDropdown
            {...this.props}
            items={categories}
            onClose={this.handleDropdownClose}
          />
        }
      </div>
    );
  }
}

Category.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  items: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  selectedItems: PropTypes.shape({
    selectedCategories: PropTypes.arrayOf(PropTypes.string),
    selectedSubCategories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  submitOnDropdownClose: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(Category);
