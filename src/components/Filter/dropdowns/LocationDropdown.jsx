import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';
import DropdownHOC from 'components/HOC/DropdownHOC';
import FormSearch from 'components/ui/FormSearch';
import FormControls from 'components/ui/FormControls';
import Checkpoint from 'components/ui/Checkpoint';
import Icon from 'components/Icon';

function LocationDropdown(props) {
  const {
    items,
    changeFilterItem,
    searchValue,
    handleSearch,
    resetSection,
    triggerDropdown,
  } = props;

  const { cities, regions } = items;
  const { searchCity, searchRegions } = searchValue;

  return (
    <div className={`form-dropdown ${regions.all.length || searchRegions.length ? 'form-dropdown_two' : ''}`}>

      <div className="form-column">

        <div className="form-header">
          <div className="form-header__name">Город</div>
        </div>

        <FormSearch autoFocus value={searchCity} onChange={event => handleSearch('PROPERTY_GEO_ID', event.target.value)} />

        <div className="form-block" ref={node => preventOverScroll(node)}>
          <div className="form-checkboxes">
            {
              cities.all.map((item) => {
                const { ID: id, name, checked } = item;

                return (
                  <Checkpoint
                    key={`cities-${id}`}
                    id={id}
                    name="PROPERTY_GEO_ID"
                    type="radio"
                    onChange={changeFilterItem}
                    checked={checked}
                    className="form-checkboxes__item"
                    label={name}
                  />
                );
              })
            }
          </div>
        </div>
      </div>

      {
        (!!regions.all.length || !!searchRegions.length) &&
        <div className="form-column">
          <div className="form-header">
            <div className="form-header__name">
              Районы
              {
                !!regions.checked.length &&
                <span className="form-header__name_number">{regions.checked.length}</span>
              }
            </div>
          </div>

          <FormSearch autoFocus value={searchRegions} onChange={event => handleSearch('PROPERTY_RAYON2', event.target.value)} />

          <div className="form-block" ref={node => preventOverScroll(node)}>
            <div className="form-checkboxes">
              {
                regions.all.map((item) => {
                  const { ID: id, name, checked } = item;

                  return (
                    <Checkpoint
                      key={`regions-${id}`}
                      id={id}
                      name="PROPERTY_RAYON2"
                      onChange={changeFilterItem}
                      checked={checked}
                      className="form-checkboxes__item"
                      label={name}
                    />
                  );
                })
              }
            </div>
          </div>
        </div>
      }

      <FormControls onReset={resetSection} onClose={triggerDropdown} name="PROPERTY_GEO_ID" />

    </div>
  );
}

LocationDropdown.propTypes = {
  items: PropTypes.shape({
    cities: PropTypes.object,
    regions: PropTypes.object,
  }).isRequired,
  changeFilterItem: PropTypes.func.isRequired,
  searchValue: PropTypes.shape({
    searchCity: PropTypes.string,
    searchRegions: PropTypes.string,
  }).isRequired,
  handleSearch: PropTypes.func.isRequired,
  resetSection: PropTypes.func.isRequired,
  triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownHOC(LocationDropdown);
