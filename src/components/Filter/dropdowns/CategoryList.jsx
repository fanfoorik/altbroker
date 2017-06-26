import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import Checkpoint from 'components/ui/Checkpoint';

function CityList(props) {
  const {
    categories,
    selectedCategories,
    selectCategory,
  } = props;

  return (
    <div className="form-column">

      <div className="form-header">
        <div className="form-header__name">Категории</div>
        <div className="form-header__subcategory">
          Подкатегории <Icon className="icon" icon="arrow-right" width={9} height={9} />
        </div>
      </div>

      <div className="form-search">
        <input
          className="form-search__input input"
          placeholder="Поиск"
          type="text"
        />
        <button type="submit" className="form-search__submit">
          <Icon
            className="form-search__icon"
            icon="lens"
            width="15"
            height="15"
          />
        </button>
      </div>

      <div className="form-block">

        <div className="form-checkboxes">
          {
            categories.map((item) => {
              const {
                ID: id,
                NAME: name,
              } = item;

              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  onChange={selectCategory}
                  checked={selectedCategories.indexOf(id) !== -1}
                  className="form-checkboxes__item"
                  label={name}
                />
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

CityList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCategories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCategory: PropTypes.func.isRequired,
};

export default CityList;
