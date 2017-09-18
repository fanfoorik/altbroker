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

export default class GbFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: props.filterState,
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

  componentDidMount() {
    this.props.fetchGBfilter();
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
    event.preventDefault();
    this.setState(() => {
      browserHistory.push(`${indexUrl}broker/gb/`);
      this.props.updateGBOptions({ PAGE: 1, ...this.state.filterState });
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

  /**
   * Select all checkboxes from group.
   * @param {array} data - The array of checkbox objects.
   * @param {string} option - The key of option. ex: SECTION_ID_1.
   */
  selectCheckGroup = (data, option) => {
    const optionState = this.state.filterState[option];
    const allItems = data.filter(item => optionState.indexOf(item.ID) === -1)
      .map(item => item.ID);
    if (allItems.length && optionState) {
      this.setState(() => {
        this.state.filterState[option] = this.state.filterState[option].concat(allItems);
      });
    }
  };

  render() {
    const {
      ALL_BROKER: brokers,
      ALL_CITY: cities,
      ALL_RAYONS: regions,
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

    const { extendFilter } = this.state;

    return (
      <div>
        {/*<Filter>*/}
          {/*<Filter.Row>*/}

            {/*<Filter.Cell className="round-top-left">*/}
              {/*<input value={idNameTel} onChange={this.idNameTelChange} name="ID_NAME_TEL" className="input filter__input" type="text" placeholder="ID / Название объекта / Телефон" />*/}
            {/*</Filter.Cell>*/}

            {/*<Filter.Cell className="hover active">*/}
              {/*<CategoryContainer*/}
                {/*items={{ categories, subCategories }}*/}
                {/*selectedItems={{ selectedCategories, selectedSubCategories }}*/}
                {/*changeFilterItem={this.changeFilterItem}*/}
                {/*handleSearch={this.handleSearch}*/}
                {/*searchValue={{ searchCategory, searchSubCategory }}*/}
                {/*resetSection={this.resetSection}*/}
              {/*/>*/}
            {/*</Filter.Cell>*/}

            {/*<Filter.Cell />*/}
          {/*</Filter.Row>*/}

          {/*<Filter.Row>*/}
            {/*<Filter.Cell className="hover round-bottom-left">*/}
              {/*<BrokersContainer*/}
                {/*items={brokers}*/}
                {/*selectedItems={selectedBrokers}*/}
                {/*changeFilterItem={this.changeFilterItem}*/}
                {/*handleSearch={this.handleSearch}*/}
                {/*searchValue={searchBrokers}*/}
                {/*resetSection={this.resetSection}*/}
                {/*submitOnDropdownClose={this.submitOnDropdownClose}*/}
              {/*/>*/}
            {/*</Filter.Cell>*/}
          {/*</Filter.Row>*/}
        {/*</Filter>*/}

        <div className="filter filter_business mb-28">
          <form onSubmit={this.filterSubmit}>

            <div className="filter__row clear">
              <div className="filter__cell filter__cell_hover">
                <input value={idNameTel} onChange={this.idNameTelChange} name="ID_NAME_TEL" className="input filter__input" type="text" placeholder="ID / Название объекта / Телефон" />
              </div>

              <Category
                items={{ categories, subCategories }}
                selectedItems={{ selectedCategories, selectedSubCategories }}
                changeFilterItem={this.changeFilterItem}
                handleSearch={this.handleSearch}
                searchValue={{ searchCategory, searchSubCategory }}
                resetSection={this.resetSection}
                submitOnDropdownClose={this.submitOnDropdownClose}
                selectCheckGroup={this.selectCheckGroup}
              />

              <Price
                label="Цена"
                name="PROPERTY_PRICE_BUSINESS"
                from={fromPrice}
                to={toPrice}
                onChange={this.changeFromTo}
                resetSection={this.resetSection}
                submitOnDropdownClose={this.submitOnDropdownClose}
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
                    submitOnDropdownClose={this.submitOnDropdownClose}
                  />

                  <Recoupment
                    label="Окупаемость"
                    name="PROPERTY_OKUP"
                    from={fromRecoupment}
                    to={toRecoupment}
                    onChange={this.changeFromTo}
                    resetSection={this.resetSection}
                    submitOnDropdownClose={this.submitOnDropdownClose}
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
            </div>

            {extendFilter &&
              <div className="filter__row clear">

                <Brokers
                  items={brokers}
                  selectedItems={selectedBrokers}
                  changeFilterItem={this.changeFilterItem}
                  handleSearch={this.handleSearch}
                  searchValue={searchBrokers}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.submitOnDropdownClose}
                />

                <City
                  items={{ cities, regions }}
                  selectedItems={{ selectedCity, selectedRegions }}
                  changeFilterItem={this.changeFilterItem}
                  handleSearch={this.handleSearch}
                  searchValue={{ searchCity, searchRegions }}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.submitOnDropdownClose}
                />

                <Subway
                  items={subways}
                  selectedItems={{ selectedCity, selectedSubways }}
                  changeFilterItem={this.changeFilterItem}
                  handleSearch={this.handleSearch}
                  searchValue={searchSubway}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.submitOnDropdownClose}
                />

                <Status
                  items={status}
                  selectedItems={selectedStatus}
                  changeFilterItem={this.changeFilterItem}
                  resetSection={this.resetSection}
                  submitOnDropdownClose={this.submitOnDropdownClose}
                />

              </div>
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

          </form>
        </div>
      </div>
    );
  }
}

GbFilter.propTypes = {
  updateGBOptions: PropTypes.func.isRequired,
  fetchGBfilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
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