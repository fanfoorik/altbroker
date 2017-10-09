import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';
import { indexUrl } from 'utils/urls.js';

import Icon from 'components/Icon';
import Category from './Category';
import City from './City';
import Brokers from './Brokers';
import Subway from './Subway';
import Price from './Price';
import Income from './Income';
import Recoupment from './Recoupment';
import Status from 'components/Filter/Status';

import Filter from './Filter';
import CategoryContainer from './CategoryContainer';
import BrokersContainer from './BrokersContainer';
import CityContainer from './CityContainer';

/**
 * Adds "position" property up to its queue and checked property.
 * @param {Object[]} data - raw data.
 * @param {string[]} selected - An array of ids of selected items.
 * @returns {Object[]} returns prepared array of objects.
 */
const positionifyChecks = (data, selected) => (
  data.map((item, index) => ({
    ...item,
    position: (item.position || index),
    checked: selected.includes(item.ID),
  }))
);

/**
 * Combs out the queue of unchecked checkboxes up to its position.
 * @param {Object[]} data - An array of objects.
 * @returns {[*,*]} Returns filtered and combined Array of objects.
 */
const comboutChecks = (data) => {
  const selected = [];
  const items = data.filter((item) => {
    if (item.checked) selected.push(item);
    return !item.checked;
  })
    .sort((prev, next) => prev.position - next.position);
  return [...selected, ...items];
};

const prepareRegions = (regions, selectedCity) => {
  return regions.filter(item => item.PROPERTY_CITY_VALUE === selectedCity);
};

const prepareCheckboxes = (data, selected) => (
  data.map((item, index) => ({
    ...item,
    position: index,
    checked: selected.includes(item.ID),
  }))
);

export default class GbFilter extends React.Component {
  constructor(props) {
    super(props);

    const { ALL_BROKER } = props.filter;

    this.state = {
      filterState: props.filterState,
      filter: {
        ALL_BROKER: [],
        ALL_CITY: [],
        ALL_RAYONS: [],
      },
      search: {
        PROPERTY_BROKER: '',
        PROPERTY_GEO_ID: '',
        PROPERTY_RAYON2: '',
        ALL_CATEGORY_GB_1: '',
        ALL_CATEGORY_GB_2: '',
        PROPERTY_METRO_NEW: '',
        SECTION_ID_1: '',
        SECTION_ID_2: '',
      },
      extendFilter: true,
    };
  }

  componentWillMount() {
    this.props.fetchGBfilter();
  }

  componentWillReceiveProps(nextProps) {

    const { ALL_BROKER: stateBrokers } = this.state.filter;
    const {
      PROPERTY_BROKER,
      PROPERTY_GEO_ID,
      PROPERTY_RAYON2,
    } = nextProps.options.FILTER;

    const filter = stateBrokers.length ? this.state.filter : nextProps.filter;

    this.setState({
      filter: {
        ALL_BROKER: comboutChecks(
          positionifyChecks(filter.ALL_BROKER, PROPERTY_BROKER),
        ),
        ALL_CITY: comboutChecks(
          positionifyChecks(filter.ALL_CITY, PROPERTY_GEO_ID),
        ),
        ALL_RAYONS: comboutChecks(
          positionifyChecks(
            prepareRegions(
              filter.ALL_RAYONS, PROPERTY_GEO_ID[0]),
              PROPERTY_RAYON2,
            ),
        ),
      },
    });
  }

  handleSearch = (name, value) => {
    this.setState(() => { this.state.search[name] = value; });
  };

  changeFilterItem = (event) => {
    const target = event.target;
    const id = target.id;
    const name = target.name;
    const property = this.state.filterState[name];

    switch (name) {
      case 'SECTION_ID_1':
        const selectedSubcategs = this.state.filterState.SECTION_ID_2;

        if (target.checked) {
          property.push(id);
        } else {
          const { ALL_CATEGORY_GB_2: subCategs } = this.props.filter;
          property.splice(property.indexOf(id), 1);

          subCategs.forEach((item) => {
            const { IBLOCK_SECTION_ID: categoryId, ID: subCategoryId } = item;
            if (id === categoryId) {
              const selectedSubCategIndex = selectedSubcategs.indexOf(subCategoryId);
              if (selectedSubCategIndex !== -1) {
                selectedSubcategs.splice(selectedSubCategIndex, 1);
              }
            }
          });
        }

        this.setState(() => {
          this.state.filterState.SECTION_ID_1 = property;
          this.state.filterState.SECTION_ID_2 = selectedSubcategs;
        });
        break;

      case 'PROPERTY_GEO_ID':
        if (id !== property[0]) {
          this.setState(() => {
            this.state.filterState[name] = [id];
            this.state.filterState.PROPERTY_RAYON2 = [];
            this.state.search.PROPERTY_RAYON2 = '';
            this.state.filterState.PROPERTY_METRO_NEW = [];
          });
        }
        break;

      case 'PROPERTY_STATUS_OBJ':
        this.setState(() => { this.state.filterState.PROPERTY_STATUS_OBJ = id; });
        break;

      default:
        if (target.checked) {
          property.push(id);
        } else {
          property.splice(property.indexOf(id), 1);
        }

        this.setState(() => {
          this.state.filterState[name] = property;
        });
    }
  };

  resetSection = (event) => {
    const name = event.target.dataset.name;

    if (name === 'SECTION_ID') {
      this.setState(() => {
        this.state.filterState.SECTION_ID_1 = [];
        this.state.filterState.SECTION_ID_2 = [];
        this.state.search.SECTION_ID_1 = '';
        this.state.search.SECTION_ID_2 = '';
      });
      return true;
    }

    if (name === 'PROPERTY_GEO_ID') {
      return this.setState(() => {
        this.state.filterState.PROPERTY_GEO_ID = [];
        this.state.filterState.PROPERTY_RAYON2 = [];
        this.state.search.PROPERTY_GEO_ID = '';
        this.state.search.PROPERTY_RAYON2 = '';
      });
    }

    if (name === 'PROPERTY_STATUS_OBJ') {
      return this.setState(() => {
        this.state.filterState.PROPERTY_STATUS_OBJ = '';
      });
    }

    if (['PROPERTY_PRICE_BUSINESS', 'PROPERTY_CHIST_PRIB', 'PROPERTY_OKUP'].some(item => item === name)) {
      return this.setState(() => {
        this.state.filterState[`from_${name}`] = '';
        this.state.filterState[`to_${name}`] = '';
        return this.state.filterState;
      });
    }

    return this.setState(() => {
      this.state.filterState[name] = [];
      this.state.search[name] = '';
    });
  };

  changeFromTo = (event) => {
    const { dataset, value, name } = event.target;
    this.setState(() => {
      this.state.filterState[dataset.name || name] = dataset.value || value;
    });
  };

  idNameTelChange = (event) => {
    const key = event.target.getAttribute('name');
    const val = event.target.value;

    this.setState(() => {
      this.state.filterState[key] = val;
    });
  };

  filterSubmit = (event) => {
    if (event) event.preventDefault();
    const getPropertyValue = property => (
      this.state.filter[property].filter(item => (item.checked)).map(item => item.ID)
    );

    browserHistory.push(`${indexUrl}broker/gb/`);
    this.props.updateGBOptions({
      PAGE: 1,
      FILTER: {
        ...this.state.filterState,
        PROPERTY_BROKER: getPropertyValue('ALL_BROKER'),
        PROPERTY_GEO_ID: getPropertyValue('ALL_CITY'),
        PROPERTY_RAYON2: getPropertyValue('ALL_RAYONS'),
      },
    });
  };

  submitOnDropdownClose = () => {
    this.setState(() => {
      browserHistory.push(`${indexUrl}broker/gb/`);
      this.props.updateGBOptions(this.state.filterState);
    });
  };

  resetForm = () => {
    this.setState(() => {
      const filterState = {
        ID: '',
        ID_NAME_TEL: '',
        ACTIVE: 'Y',
        SECTION_ID: [],
        SECTION_ID_1: [],
        SECTION_ID_2: [],
        PROPERTY_STATUS_OBJ: '',
        PROPERTY_BROKER: [],
        PROPERTY_GEO_ID: [],
        PROPERTY_RAYON2: [],
        PROPERTY_METRO_NEW: [],
        from_PROPERTY_PRICE_BUSINESS: '',
        to_PROPERTY_PRICE_BUSINESS: '',
        from_PROPERTY_CHIST_PRIB: '',
        to_PROPERTY_CHIST_PRIB: '',
        from_PROPERTY_OKUP: '',
        to_PROPERTY_OKUP: '',
      };

      browserHistory.push(`${indexUrl}broker/gb/`);
      this.props.updateGBOptions({ PAGE: 1, FILTER: filterState });
      return { filterState };
    });
  };

  triggerFilterExtend = () => {
    this.setState({ extendFilter: !this.state.extendFilter });
  };

  cityChange = (event) => {
    const { id } = event.currentTarget;
    const { ALL_RAYONS } = this.props.filter;
    this.setState(() => {
      this.state.filter.ALL_CITY = this.state.filter.ALL_CITY.map(item => (
        { ...item, checked: item.ID === id }
      ));
      this.state.filter.ALL_RAYONS = prepareRegions(ALL_RAYONS, id);
      return this.state;
    });
  };

  checksChange = (event) => {
    const { id, name, checked } = event.currentTarget;
    this.setState(() => {
      this.state.filter[name] = this.state.filter[name].map(item => (
        item.ID === id ? { ...item, checked } : item
      ));
      return this.state;
    });
  };

  checksDropdownClose = (prop) => {
    this.filterSubmit();
    this.setState(() => {
      this.state.filter[prop] = comboutChecks(this.state.filter[prop]);
      return this.state;
    });
  };

  checksSelectAll = (event) => {
    const { name } = event.currentTarget.dataset;
    const stateOption = this.state.filter[name].map(item => ({ ...item, checked: true }));

    this.setState(() => {
      this.state.filter[name] = stateOption;
      return this.state;
    });
  };

  checksReset = (event) => {
    const { name } = event.currentTarget.dataset;
    switch (name) {
      case 'ALL_CITY':
        this.setState(() => {
          this.state.filter.ALL_CITY = this.state.filter.ALL_CITY.map(item =>
            ({ ...item, checked: false }));
          this.state.filter.ALL_RAYONS = this.state.filter.ALL_RAYONS.map(item =>
            ({ ...item, checked: false }));
        });
        break;

      default:
        this.setState(() => {
          this.state.filter[name] = this.state.filter[name].map(item =>
            ({ ...item, checked: false }),
          );
        });
    }
  };

  checkMyDepartment = () => {
    const { USER_DEPARTMENT } = this.props.options;
    this.setState(() => {
      this.state.filter.ALL_BROKER = this.state.filter.ALL_BROKER.map(item => (
        { ...item, checked: USER_DEPARTMENT.includes(item.ID) }
      ));
    });
  };

  checkMyself = () => {
    const { id } = this.props;
    this.setState(() => {
      this.state.filter.ALL_BROKER = this.state.filter.ALL_BROKER.map(item => (
        { ...item, checked: item.ID === id }
      ));
    });
  };

  /**
   * Select all checkboxes from group.
   * @param {array} data - The array of checkbox objects.
   * @param {string} option - The key of option. ex: SECTION_ID_1.
   */
  selectCheckGroup = (data, option) => {
    const optionState = this.state.filterState[option];
    const allItems = data.filter(item => !optionState.includes(item.ID))
      .map(item => item.ID);
    if (allItems.length && optionState) {
      this.setState(() => {
        this.state.filterState[option] = this.state.filterState[option].concat(allItems);
      });
    }
  };

  render() {
    const {
      // ALL_BROKER: brokers,
      // ALL_CITY: cities,
      // ALL_RAYONS: regions,
      ALL_METRO: subways,
      ALL_CATEGORY_GB_1: categories,
      ALL_CATEGORY_GB_2: subCategories,
      ALL_STATUS_OBJ: status,
    } = this.props.filter;

    const {
      ID_NAME_TEL: idNameTel,
      PROPERTY_BROKER: selectedBrokers,
      PROPERTY_GEO_ID: selectedCity,
      PROPERTY_RAYON2: selectedRegions,
      PROPERTY_METRO_NEW: selectedSubways,
      SECTION_ID_1: selectedCategories,
      SECTION_ID_2: selectedSubCategories,
      from_PROPERTY_PRICE_BUSINESS: fromPrice,
      to_PROPERTY_PRICE_BUSINESS: toPrice,
      from_PROPERTY_CHIST_PRIB: fromIncome,
      to_PROPERTY_CHIST_PRIB: toIncome,
      from_PROPERTY_OKUP: fromRecoupment,
      to_PROPERTY_OKUP: toRecoupment,
      PROPERTY_STATUS_OBJ: selectedStatus,
    } = this.state.filterState;

    const {
      PROPERTY_BROKER: searchBrokers,
      PROPERTY_METRO_NEW: searchSubway,
      PROPERTY_GEO_ID: searchCity,
      PROPERTY_RAYON2: searchRegions,
      SECTION_ID_1: searchCategory,
      SECTION_ID_2: searchSubCategory,
    } = this.state.search;

    const {
      extendFilter,
      filter: {
        ALL_BROKER: brokers,
        ALL_CITY: cities,
        ALL_RAYONS: regions,
      } } = this.state;

    return (
      <div>
        <Filter className="filter filter_business mb-28" onSubmit={this.filterSubmit}>
          <Filter.Row>
            <Filter.Cell className={`round-top-left${!extendFilter ? ' round-bottom-left' : ''}`}>
              <input
                value={idNameTel}
                onChange={this.idNameTelChange}
                name="ID_NAME_TEL"
                className="input filter__input"
                type="text"
                placeholder="ID / Название объекта / Телефон"
              />
            </Filter.Cell>

            <Category
              items={{ categories, subCategories }}
              selectedItems={{ selectedCategories, selectedSubCategories }}
              changeFilterItem={this.changeFilterItem}
              handleSearch={this.handleSearch}
              searchValue={{ searchCategory, searchSubCategory }}
              resetSection={this.resetSection}
              submitOnDropdownClose={this.filterSubmit}
              selectCheckGroup={this.selectCheckGroup}
            />

            <Price
              label="Цена"
              name="PROPERTY_PRICE_BUSINESS"
              from={fromPrice}
              to={toPrice}
              onChange={this.changeFromTo}
              resetSection={this.resetSection}
              submitOnDropdownClose={this.filterSubmit}
            />

            <div className="filter__cell active">
              <div className="filter__row clear">

                <Income
                  label="Прибыль"
                  name="PROPERTY_CHIST_PRIB"
                  from={fromIncome}
                  to={toIncome}
                  onChange={this.changeFromTo}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.filterSubmit}
                />

                <Recoupment
                  label="Окупаемость"
                  name="PROPERTY_OKUP"
                  from={fromRecoupment}
                  to={toRecoupment}
                  onChange={this.changeFromTo}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.filterSubmit}
                />

              </div>
            </div>

            <div className="filter__cell">
              <div className="filter-controls">
                <span
                  onClick={this.triggerFilterExtend}
                  className={`filter-controls__item filter-controls__item_trigger ${extendFilter ? 'active' : ''}`}
                  role="button"
                  tabIndex="0"
                />
                <button className="filter-controls__item filter-controls__item_submit">Искать</button>
                <span
                  className="filter-controls__item filter-controls__item_reset"
                  onClick={this.resetForm}
                  role="button"
                  tabIndex="0"
                >Сбросить</span>
              </div>
            </div>
          </Filter.Row>

          {extendFilter &&
            <Filter.Row>

              <Filter.Cell className="hover round-bottom-left">
                <BrokersContainer
                  items={brokers}
                  onChange={this.checksChange}
                  onDropdownClose={this.checksDropdownClose}
                  checksSelectAll={this.checksSelectAll}
                  checksReset={this.checksReset}
                  checkMyDepartment={this.checkMyDepartment}
                  checkMyself={this.checkMyself}
                />
              </Filter.Cell>

              <Filter.Cell className="hover">
                <CityContainer
                  items={{ cities, regions }}
                  checksReset={this.checksReset}
                  onCityChange={this.cityChange}
                  onRegionChange={this.checksChange}
                  onDropdownClose={this.checksDropdownClose}
                />
              </Filter.Cell>

              {/*<City*/}
                {/*items={{ cities, regions }}*/}
                {/*selectedItems={{ selectedCity, selectedRegions }}*/}
                {/*changeFilterItem={this.changeFilterItem}*/}
                {/*handleSearch={this.handleSearch}*/}
                {/*searchValue={{ searchCity, searchRegions }}*/}
                {/*resetSection={this.resetSection}*/}
                {/*submitOnDropdownClose={this.filterSubmit}*/}
              {/*/>*/}

              <Subway
                items={subways}
                selectedItems={{ selectedCity, selectedSubways }}
                changeFilterItem={this.changeFilterItem}
                handleSearch={this.handleSearch}
                searchValue={searchSubway}
                resetSection={this.resetSection}
                submitOnDropdownClose={this.filterSubmit}
              />

              <Status
                items={status}
                selectedItems={selectedStatus}
                changeFilterItem={this.changeFilterItem}
                resetSection={this.resetSection}
                submitOnDropdownClose={this.filterSubmit}
              />

            </Filter.Row>
          }

          {/*<div className="filter-footer clear">*/}
            {/*<span className="filter-stored-save">Сохраните фильтр</span>*/}

            {/*<div className="filter-stored">*/}
              {/*<span className="filter-stored-label">Мои фильтры:</span>*/}

              {/*<span className="filter-stored-item">*/}
                {/*<span className="filter-stored-item__title">Кафетерии для Марата</span>*/}
                {/*<span className="filter-stored-item__remove">*/}
                  {/*<Icon icon="close" width={9} height={9} className="filter-stored-item__remove-icon" />*/}
                {/*</span>*/}
              {/*</span>*/}

              {/*<span className="filter-stored-item">*/}
                {/*<span className="filter-stored-item__title">Автомойки Москва</span>*/}
                {/*<span className="filter-stored-item__remove">*/}
                  {/*<Icon icon="close" width={9} height={9} className="filter-stored-item__remove-icon" />*/}
                {/*</span>*/}
              {/*</span>*/}

            {/*</div>*/}
          {/*</div>*/}

        </Filter>
      </div>
    );
  }
}

GbFilter.propTypes = {
  updateGBOptions: PropTypes.func.isRequired,
  fetchGBfilter: PropTypes.func.isRequired,
  filter: PropTypes.shape({
    ALL_BROKER: PropTypes.arrayOf(PropTypes.object),
    ALL_STATUS_OBJ: PropTypes.arrayOf(PropTypes.object),
    ALL_CITY: PropTypes.arrayOf(PropTypes.object),
    ALL_RAYONS: PropTypes.arrayOf(PropTypes.object),
    ALL_METRO: PropTypes.arrayOf(PropTypes.object),
    ALL_CATEGORY_GB_1: PropTypes.arrayOf(PropTypes.object),
    ALL_CATEGORY_GB_2: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  filterState: PropTypes.shape({
    ID: PropTypes.string.isRequired,
    ID_NAME_TEL: PropTypes.string.isRequired,
    ACTIVE: PropTypes.string.isRequired,
    SECTION_ID: PropTypes.arrayOf(PropTypes.string).isRequired,
    PROPERTY_STATUS_OBJ: PropTypes.string.isRequired,
    PROPERTY_BROKER: PropTypes.arrayOf(PropTypes.string).isRequired,
    PROPERTY_GEO_ID: PropTypes.arrayOf(PropTypes.string).isRequired,
    PROPERTY_RAYON2: PropTypes.arrayOf(PropTypes.string).isRequired,
    PROPERTY_METRO_NEW: PropTypes.arrayOf(PropTypes.string).isRequired,
    from_PROPERTY_PRICE_BUSINESS: PropTypes.string.isRequired,
    to_PROPERTY_PRICE_BUSINESS: PropTypes.string.isRequired,
    from_PROPERTY_CHIST_PRIB: PropTypes.string.isRequired,
    to_PROPERTY_CHIST_PRIB: PropTypes.string.isRequired,
    from_PROPERTY_OKUP: PropTypes.string.isRequired,
    to_PROPERTY_OKUP: PropTypes.string.isRequired,
  }).isRequired,
};
