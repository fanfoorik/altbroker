import PropTypes from 'prop-types';
import React from 'react';

import { filterItems } from 'utils/filterUtils';
import preventOverScroll from 'utils/preventOverScroll';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';

function CategoryList(props) {
  const { items, changeFilterItem, handleSearch } = props;
  const { searchCategory } = props.searchValue;
  const filteredItems = filterItems(searchCategory, items);

  return (
    <div className="form-column">

      <div className="form-header">
        <div className="form-header__name">Категории</div>
      </div>

      <FormSearch value={searchCategory} autoFocus onChange={event => handleSearch('SECTION_ID_1', event.target.value)} />

      <div className="form-block" ref={node => preventOverScroll(node)}>
        <div className="form-checkboxes">
          {
            filteredItems.map((item) => {
              const { ID: id, name, checked } = item;

              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  onChange={changeFilterItem}
                  checked={checked}
                  className="form-checkboxes__item"
                  label={name}
                  name="SECTION_ID_1"
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

CategoryList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  searchValue: PropTypes.shape({
    searchCategory: PropTypes.string,
  }).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  handleSearch: PropTypes.func.isRequired,
};

export default CategoryList;
