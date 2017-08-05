import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import Category from './Category';
import City from './City';
import Brokers from './Brokers';
import Subway from './Subway';
import Price from './Price';
import FilterStatys from 'components/Filter/FilterStatys';
import FilterRangeRecoupment from 'components/Filter/FilterRangeRecoupment';
import FilterRangeProfit from 'components/Filter/FilterRangeProfit';

export default class BusinessFilter extends React.Component {
  constructor() {
    super();
    this.state = {
      page: {
        SORT_CODE: ['ID'],
        SORT_METOD: ['DESC'],
        PAGE: '1',
        COUNT: '15',
        FILTER: {
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
        },
        SHOW_SHARED: '',
        DEBUG: '',
      },
    };
  }

  componentDidMount() {
    this.props.fetchGBfilter();
  }

  selectBroker = (event) => {
    const id = event.target.id;
    const brokers = this.state.page.FILTER.PROPERTY_BROKER;

    if (event.target.checked) {
      brokers.push(id);
    } else {
      brokers.splice(brokers.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.page.FILTER.PROPERTY_BROKER = brokers;
    });
  };

  selectCity = (event) => {
    const id = event.target.id;
    const city = this.state.page.FILTER.PROPERTY_GEO_ID;

    if (id !== city[0]) {
      this.setState(() => {
        this.state.page.FILTER.PROPERTY_GEO_ID = [id];
        this.state.page.FILTER.PROPERTY_RAYON2 = [];
        this.state.page.FILTER.PROPERTY_METRO_NEW = [];
      });
    }
  };

  selectRegion = (event) => {
    const id = event.target.id;
    const regions = this.state.page.FILTER.PROPERTY_RAYON2;

    if (event.target.checked) {
      regions.push(id);
    } else {
      regions.splice(regions.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.page.FILTER.PROPERTY_RAYON2 = regions;
    });
  };

  selectSubway = (event) => {
    const id = event.target.id;
    const subways = this.state.page.FILTER.PROPERTY_METRO_NEW;

    if (event.target.checked) {
      subways.push(id);
    } else {
      subways.splice(subways.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.page.FILTER.PROPERTY_METRO_NEW = subways;
    });
  };

  selectCategory = (event) => {
    const id = event.target.id;
    const category = this.state.page.FILTER.SECTION_ID_1;

    if (event.target.checked) {
      category.push(id);
    } else {
      category.splice(category.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.page.FILTER.SECTION_ID_1 = category;
    });
  };

  editFromToRange = (event) => {
    const { dataset, value } = event.target;
    this.setState(() => {
      this.state.page.FILTER[`${dataset.range}_PROPERTY_PRICE_BUSINESS`] = value;
    });
  };

  filterSubmit = (event) => {
    event.preventDefault();
    this.props.filterListing(this.state.page);
  };

  idNameTelChange = (event) => {
    const key = event.target.getAttribute('name');
    const val = event.target.value;

    this.setState(() => {
      this.state.page.FILTER[key] = val;
    });
  };

  render() {
    const {
      ALL_BROKER: brokers,
      ALL_CITY: cities,
      ALL_RAYONS: regions,
      ALL_METRO: subways,
      ALL_CATEGORY_GB_1: categories,
      ALL_CATEGORY_GB_2: subCategories,
    } = this.props.filter;

    const {
      ID_NAME_TEL: idNameTel,
      PROPERTY_BROKER: selectedBrokers,
      PROPERTY_GEO_ID: selectedCity,
      PROPERTY_RAYON2: selectedRegions,
      PROPERTY_METRO_NEW: selectedSubways,
      SECTION_ID_1: selectedCategories,
      from_PROPERTY_PRICE_BUSINESS: fromPrice,
      to_PROPERTY_PRICE_BUSINESS: toPrice,
    } = this.state.page.FILTER;

    return (
      <div className="filter filter_business">
        <form onSubmit={this.filterSubmit}>
          <div className="filter__row clear">
            <div className="filter__cell filter__cell_hover">
              <input value={idNameTel} onChange={this.idNameTelChange} name="ID_NAME_TEL" className="input filter__input" type="text" placeholder="ID / Название объекта / Телефон" />
            </div>

            <Category
              categories={categories}
              subCategories={subCategories}
              selectCategory={this.selectCategory}
              selectedCategories={selectedCategories}
            />

            <Price fromPrice={fromPrice} toPrice={toPrice} editFromToRange={this.editFromToRange} />

            <div className="filter__cell">
              <div className="filter__row clear">

                <div className="filter__cell filter__cell_deeper filter__cell_hover ">
                  <div className="filter-trigger">
                    <span className="filter-trigger__label">Прибыль</span>
                  </div>
                  {/*<FilterRangeProfit />*/}
                </div>

                <div className="filter__cell filter__cell_deeper filter__cell_hover">
                  <div className="filter-trigger">
                    <span className="filter-trigger__label">Окупаемость</span>
                  </div>
                  {/*<FilterRangeRecoupment />*/}
                </div>

              </div>
            </div>

            <div className="filter__cell">
              <div className="filter-controls">
                <span className="filter-controls__item filter-controls__item_trigger active">
                  Скрыть <Icon icon="arrow-right" width={8} height={8} />
                </span>
                <button className="filter-controls__item filter-controls__item_submit">Фильтровать</button>
                <span className="filter-controls__item filter-controls__item_reset">
                  <Icon icon="close" width={9} height={9} className="filter-reset-icon" />
                </span>
              </div>
            </div>
          </div>

          <div className="filter__row clear">
            <Brokers
              brokers={brokers}
              selectedBrokers={selectedBrokers}
              selectBroker={this.selectBroker}
            />

            <City
              cities={cities}
              selectedCity={selectedCity}
              selectCity={this.selectCity}
              regions={regions}
              selectedRegions={selectedRegions}
              selectRegion={this.selectRegion}
            />

            <Subway
              subways={subways}
              selectedSubways={selectedSubways}
              selectSubway={this.selectSubway}
              selectedCity={selectedCity}
            />

            <div className="filter__cell filter__cell_hover filter-trigger_binded active">
              <div className="filter-trigger">
                <span className="filter-trigger__label">Статус</span>
              </div>
              {/*<FilterStatys />*/}
            </div>

          </div>

          <div className="filter-footer clear">
            <span className="filter-stored-save">Сохраните фильтр</span>

            <div className="filter-stored">
              <span className="filter-stored-label">Мои фильтры:</span>

              <span className="filter-stored-item">
                <span className="filter-stored-item__title">Кафетерии для Марата</span>
                <span className="filter-stored-item__remove">
                  <Icon icon="close" width={9} height={9} className="filter-stored-item__remove-icon" />
                </span>
              </span>

              <span className="filter-stored-item">
                <span className="filter-stored-item__title">Автомойки Москва</span>
                <span className="filter-stored-item__remove">
                  <Icon icon="close" width={9} height={9} className="filter-stored-item__remove-icon" />
                </span>
              </span>

              <span className="filter-stored-item">
                <span className="filter-stored-item__title">Дерьмо для души</span>
                <span className="filter-stored-item__remove">
                  <Icon icon="close" width={9} height={9} className="filter-stored-item__remove-icon" />
                </span>
              </span>
            </div>
          </div>

        </form>
      </div>
    );
  }
}

BusinessFilter.propTypes = {
  filterListing: PropTypes.func.isRequired,
  updateFilterState: PropTypes.func.isRequired,
  fetchGBfilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.object,
  ]).isRequired,
};
