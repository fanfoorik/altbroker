import PropTypes from 'prop-types';
import React from 'react';
import { filterItems } from 'utils/filterUtils';
import DropdownTriggerHOC from 'components/HOC/DropdownTriggerHOC';
import Dropdown from 'components/Dropdown';

import FilterDropdown from './dropdowns/FilterDropdown';
import FormSearch from 'components/ui/FormSearch';
import Checkpoint from 'components/ui/Checkpoint';
import FormControls from 'components/ui/FormControls';
import Icon from 'components/Icon';
import Filter from './Filter';

class CityContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  handleDropdownClose = () => {
    // if (this.state.search) this.setState({ search: '' });
    this.props.onDropdownClose('ALL_CITY');
  };

  handleSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  render() {
    const {
      items: { cities, regions },
      onCityChange,
      onRegionChange,
      isActive,
      triggerDropdown,
      checksReset,
    } = this.props;

    // const { search } = this.state;
    // const filteredItems = filterItems(search, items);
    const selectedCity = cities.filter(item => item.checked);
    const selectedRegions = regions.filter(item => item.checked);
    const citiesValue = selectedCity[0] && selectedCity[0].NAME;
    const more = !!selectedRegions.length && `Районы: ${selectedRegions.length}`;

    return (
      <div>
        <Filter.Trigger
          label="Город / Район"
          value={citiesValue}
          onClick={triggerDropdown}
          more={more}
        />
        {isActive &&
          <Dropdown triggerDropdown={triggerDropdown} onClose={this.handleDropdownClose}>
            <FilterDropdown className={regions.length ? 'form-dropdown_two' : ''}>

              <FilterDropdown.Column>
                <FilterDropdown.Header label="Город" />
                <FormSearch
                  autoFocus
                  onChange={this.handleSearch}
                  // value={search}
                />
                <FilterDropdown.Scrollpane>
                  <div className="form-checkboxes">
                    {cities.map((item) => {
                      const { ID: id, checked, NAME, name } = item;

                      return (
                        <Checkpoint
                          checked={checked}
                          className="form-checkboxes__item"
                          id={id}
                          key={`city-${id}`}
                          label={NAME}
                          name="ALL_CITY"
                          onChange={onCityChange}
                          type="radio"
                        />
                      );
                    })}
                  </div>
                </FilterDropdown.Scrollpane>
              </FilterDropdown.Column>

              {!!regions.length &&
                <FilterDropdown.Column>
                  <FilterDropdown.Header label="Район" length={selectedRegions.length} />
                  <FormSearch
                    autoFocus
                    onChange={this.handleSearch}
                    // value={search}
                  />

                  <FilterDropdown.Scrollpane>
                    <div className="form-checkboxes">
                      {regions.map((item) => {
                        const { ID: id, checked, NAME, name } = item;

                        return (
                          <Checkpoint
                            checked={checked}
                            className="form-checkboxes__item"
                            id={id}
                            key={`region-${id}`}
                            label={NAME}
                            name="ALL_RAYONS"
                            onChange={onRegionChange}
                          />
                        );
                      })}
                    </div>
                  </FilterDropdown.Scrollpane>

                </FilterDropdown.Column>
              }

              <FormControls
                left={
                  <span
                    key="reset-all"
                    className="form-control form-control_reset"
                    onClick={checksReset}
                    role="button"
                    tabIndex="0"
                    data-name="ALL_CITY"
                  >Сбросить</span>
                }
                right={(
                  <div className="form-control form-control_close" onClick={triggerDropdown} role="button" tabIndex="0">
                    <Icon className="icon__close" icon="close" width={15} height={15} />
                  </div>
                )}
              />

            </FilterDropdown>
          </Dropdown>
        }
      </div>
    );
  }
}

CityContainer.propTypes = {
  items: PropTypes.shape({
    cities: PropTypes.arrayOf(PropTypes.object),
    regions: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  // onChange: PropTypes.func.isRequired,
  // checksSelectAll: PropTypes.func.isRequired,
  // checkMyDepartment: PropTypes.func.isRequired,
  // checkMyself: PropTypes.func.isRequired,
  // checksReset: PropTypes.func.isRequired,
  // onDropdownClose: PropTypes.func.isRequired,
  // isActive: PropTypes.bool.isRequired,
  // triggerDropdown: PropTypes.func.isRequired,
};

export default DropdownTriggerHOC(CityContainer);
