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
import FilterStatys from 'components/Filter/FilterStatys';
import FilterRangeRecoupment from 'components/Filter/FilterRangeRecoupment';
import FilterRangeProfit from 'components/Filter/FilterRangeProfit';

export default class GbFilter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterState: props.filterState,
      search: {
        PROPERTY_BROKER: '',
        PROPERTY_GEO_ID: '',
        PROPERTY_RAYON2: '',
        PROPERTY_METRO_NEW: '',
      },
    };
  }

  componentDidMount() {
    this.props.fetchGBfilter();
  }

  handleSearch = (name, value) => {
    this.setState(() => { this.state.search[name] = value; });
  };

  selectBroker = (event) => {
    const id = event.target.id;
    const brokers = this.state.filterState.PROPERTY_BROKER;

    if (event.target.checked) {
      brokers.push(id);
    } else {
      brokers.splice(brokers.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.filterState.PROPERTY_BROKER = brokers;
    });
  };

  resetSection = (event) => {
    const name = event.target.dataset.name;
    switch (name) {
      case 'SOMETHING':
        console.log('SOMETHING');
        break;
      default:
        this.setState(() => {
          this.state.filterState[name] = [];
          this.state.search[name] = '';
        });
    }
  };

  selectCity = (event) => {
    const id = event.target.id;
    const city = this.state.filterState.PROPERTY_GEO_ID;

    if (id !== city[0]) {
      this.setState(() => {
        this.state.filterState.PROPERTY_GEO_ID = [id];
        this.state.filterState.PROPERTY_RAYON2 = [];
        this.state.filterState.PROPERTY_METRO_NEW = [];
      });
    }
  };

  selectRegion = (event) => {
    const id = event.target.id;
    const regions = this.state.filterState.PROPERTY_RAYON2;

    if (event.target.checked) {
      regions.push(id);
    } else {
      regions.splice(regions.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.filterState.PROPERTY_RAYON2 = regions;
    });
  };

  selectSubway = (event) => {
    const id = event.target.id;
    const subways = this.state.filterState.PROPERTY_METRO_NEW;

    if (event.target.checked) {
      subways.push(id);
    } else {
      subways.splice(subways.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.filterState.PROPERTY_METRO_NEW = subways;
    });
  };

  selectCategory = (event) => {
    const id = event.target.id;
    const category = this.state.filterState.SECTION_ID_1;

    if (event.target.checked) {
      category.push(id);
    } else {
      category.splice(category.indexOf(id), 1);
    }

    this.setState(() => {
      this.state.filterState.SECTION_ID_1 = category;
    });
  };

  editFromToRange = (event) => {
    const { dataset, value } = event.target;
    this.setState(() => {
      this.state.filterState[`${dataset.range}_PROPERTY_PRICE_BUSINESS`] = value;
    });
  };

  filterSubmit = (event) => {
    event.preventDefault();
    this.setState(() => {
      this.state.filterState.PAGE = 1;
      browserHistory.push(`${indexUrl}broker/gb/`);
      this.props.updateGBOptions(this.state.filterState);
    });
  };

  idNameTelChange = (event) => {
    const key = event.target.getAttribute('name');
    const val = event.target.value;

    this.setState(() => {
      this.state.filterState[key] = val;
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
    } = this.state.filterState;

    const {
      PROPERTY_BROKER: searchBrokers,
    } = this.state.search;

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
              handleSearch={this.handleSearch}
              searchValue={searchBrokers}
              resetSection={this.resetSection}
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
