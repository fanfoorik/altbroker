import PropTypes from 'prop-types';
import React from 'react';

import { parseCheckObjects } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import CategoryDropdown from './dropdowns/CategoryDropdown';
import Dropdown from 'components/Dropdown';
import FormSearch from 'components/ui/FormSearch';
import FilterDropdown from './dropdowns/FilterDropdown';

import Filter from './Filter';

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

  closeCategoryDropdown = () => {
    this.props.handleSearch('SECTION_ID_1', '');
    this.props.handleSearch('SECTION_ID_2', '');
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
    const { checked } = categories;
    const value = !!checked.length && checked[0].NAME;
    const more = checked.length > 1 && `и еще ${checked.length - 1}`;

    return (
      <div>
        <Filter.Trigger
          label="Категория"
          value={value}
          onClick={triggerDropdown}
          more={more}
        />
        {isActive &&
          <Dropdown triggerDropdown={triggerDropdown}>
            <FilterDropdown className="form-dropdown_two">

              <FilterDropdown.Column>
                <FilterDropdown.Header label="Категории" />
                <FormSearch autoFocus />
              </FilterDropdown.Column>

              <FilterDropdown.Column>
                <FilterDropdown.Header label="Подкатегории" />
                <FormSearch autoFocus />
              </FilterDropdown.Column>

            </FilterDropdown>
          </Dropdown>
        }
      </div>
    );
  }
}

{/*<CategoryDropdown*/}
  {/*{...this.props}*/}
  {/*items={categories}*/}
  {/*onClose={this.closeCategoryDropdown}*/}
{/*/>*/}

Category.propTypes = {
  isActive: PropTypes.bool.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
  items: PropTypes.shape({
    categories: PropTypes.arrayOf(PropTypes.object).isRequired,
    subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  selectedItems: PropTypes.shape({
    selectedCategories: PropTypes.arrayOf(PropTypes.string),
    selectedSubCategories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default DropdownTriggerHOC(Category);
