import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import Checkpoint from 'components/ui/Checkpoint';

function CityList(props) {
  const {
    subCategories,
  } = props;

  return (
    <div className="form-column">

      <div className="form-header">
        <div className="form-header__name">Подкатегории</div>
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
            subCategories.map((item) => {
              const {
                ID: id,
                NAME: name,
              } = item;

              return (
                <Checkpoint
                  key={`brokers-${id}`}
                  id={id}
                  // onChange={selectCity}
                  // checked={selectedCity.indexOf(id) !== -1}
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
  subCategories: PropTypes.arrayOf(PropTypes.object).isRequired,
  // selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  // selectCity: PropTypes.func.isRequired,
};

export default CityList;
