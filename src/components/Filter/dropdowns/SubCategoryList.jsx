import PropTypes from 'prop-types';
import React from 'react';

import { filterItems } from 'utils/filterUtils';
import preventOverScroll from 'utils/preventOverScroll';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';

function SubCategoryList(props) {
  const { items, changeFilterItem, handleSearch } = props;
  const { selectedSubCategories } = props.selectedItems;
  const { searchSubCategory } = props.searchValue;

  return (
    <div className="form-column">

      <div className="form-header">
        <div className="form-header__name">
          Подкатегории
          {!!selectedSubCategories.length &&
            <span className="form-header__name_number">{selectedSubCategories.length}</span>
          }
        </div>
      </div>

      <FormSearch value={searchSubCategory} autoFocus onChange={event => handleSearch('SECTION_ID_2', event.target.value)} />

      <div className="form-block" ref={node => preventOverScroll(node)}>
        <div className="form-checkboxes">
          {
            items.map((item) => {
              const { ID: id, NAME: name, subcateg } = item;
              const filteredItems = filterItems(searchSubCategory, subcateg);

              return (
                <div className="form-checkboxes__group" key={`subcateg-group-${id}`}>
                  {!!filteredItems.length &&
                    <div className="form-checkboxes__item form-checkboxes__item_group">{name}</div>
                  }
                  {
                    filteredItems.map(el => (
                      <Checkpoint
                        key={`subcateg-${el.ID}`}
                        id={el.ID}
                        onChange={changeFilterItem}
                        checked={el.checked}
                        className="form-checkboxes__item"
                        label={el.name}
                        name="SECTION_ID_2"
                      />
                    ))
                  }
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

SubCategoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedItems: PropTypes.shape({
    selectedSubCategories: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  searchValue: PropTypes.shape({
    searchSubCategory: PropTypes.string,
  }).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default SubCategoryList;
