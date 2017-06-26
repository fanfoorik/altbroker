import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import Checkpoint from 'components/ui/Checkpoint';

function RegionList(props) {
  const {
    regions,
    selectedRegions,
    selectRegion,
    selectedCity,
  } = props;

  return (
    <div className="form-column">
      <div className="form-header">
        <div className="form-header__name">
          Районы
          {
            !!selectedRegions.length &&
            <span className="form-header__name_number">{selectedRegions.length}</span>
          }
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
            className="search__icon-icon"
            icon="lens"
            width="15"
            height="15"
          />
        </button>
      </div>

      <div className="form-block">
        <div className="form-checkboxes">
          {
            regions.map((item) => {
              const {
                ID: id,
                NAME: name,
                PROPERTY_CITY_VALUE: regionCity,
              } = item;

              if (selectedCity.length && selectedCity[0] === regionCity) {
                return (
                  <Checkpoint
                    key={`brokers-${id}`}
                    id={id}
                    onChange={selectRegion}
                    checked={selectedRegions.indexOf(id) !== -1}
                    className="form-checkboxes__item"
                    label={name}
                  />
                );
              }

              return false;
            })
          }
        </div>
      </div>
    </div>
  );
}

RegionList.propTypes = {
  regions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRegion: PropTypes.func.isRequired,
  selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default RegionList;
