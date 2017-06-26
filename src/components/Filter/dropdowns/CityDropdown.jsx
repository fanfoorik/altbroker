import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import DropdownHOC from 'components/HOC/DropdownHOC';
import CityList from './CityList';
import RegionList from './RegionList';

function CityDropdown(props) {
  const {
    cities,
    selectedCity,
    selectCity,
    regions,
    selectedRegions,
    selectRegion,
  } = props;

  return (
    <div className={`form-dropdown ${selectedCity.length ? 'form-dropdown_two' : ''}`}>

      <CityList cities={cities} selectedCity={selectedCity} selectCity={selectCity} />

      {
        !!selectedCity.length &&
        <RegionList
          regions={regions}
          selectedRegions={selectedRegions}
          selectRegion={selectRegion}
          selectedCity={selectedCity}
        />
      }

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

CityDropdown.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.object).isRequired,
  regions: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectedCity: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCity: PropTypes.func.isRequired,
  selectedRegions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectRegion: PropTypes.func.isRequired,
};

export default DropdownHOC(CityDropdown);
