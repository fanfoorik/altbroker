import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import FilterCategory from 'components/Filter/FilterCategory';
import FilterCity from 'components/Filter/FilterCity';
import FilterBrokers from 'components/Filter/FilterBrokers';
import FilterStatys from 'components/Filter/FilterStatys';
import FilterRange from 'components/Filter/FilterRange';
import FilterRangeRecoupment from 'components/Filter/FilterRangeRecoupment';
import FilterRangeProfit from 'components/Filter/FilterRangeProfit';

export default class BusinessFilter extends React.Component {

  filterSubmit = (event) => {
    event.preventDefault();
    this.props.filterListing();
  };

  inputChange = (event) => {
    const key = event.target.getAttribute('name');
    this.props.filterChange({ [key]: event.target.value });
  };

  render() {
    const { ID_NAME_TEL } = this.props.filter;

    return (
      <div className="filter filter_business">
        <form onSubmit={this.filterSubmit}>

          <div className="filter__row clear">

            <div className="filter__cell filter__cell_hover">
              <input onChange={this.inputChange} value={ID_NAME_TEL} name="ID_NAME_TEL" className="input filter__input" type="text" placeholder="ID / Название объекта / Телефон" />
            </div>

            <div className="filter__cell filter__cell_hover active">

              <div className="filter-trigger filter-trigger_binded">
                <span className="filter-trigger__label">Категория</span>
                <span className="filter-trigger__more">и еще 2</span>
                <span className="filter-trigger__value">Пиццерии Фитнес-бары</span>
              </div>
              {/*<FilterCategory />*/}
            </div>

            <div className="filter__cell filter__cell_hover filter-trigger_binded active">
              <div className="filter-trigger">
                <span className="filter-trigger__label">Цена</span>
              </div>
              {/*<FilterRange />*/}
            </div>

            <div className="filter__cell">
              <div className="filter__row clear">

                <div className="filter__cell filter__cell_deeper filter__cell_hover ">
                  <div className="filter-trigger">
                    <span className="filter-trigger__label">Прибыль</span>
                  </div>
                  <FilterRangeProfit />
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

            <div className="filter__cell filter__cell_hover active">
              <div className="filter-trigger">
                <span className="filter-trigger__label">Брокер</span>
              </div>
              {/*<FilterBrokers />*/}
            </div>

            <div className="filter__cell filter__cell_hover filter-trigger_binded">
              <div className="filter-trigger">
                <span className="filter-trigger__label">Город / Район</span>
              </div>
              {/*<FilterCity />*/}
            </div>

            <div className="filter__cell filter__cell_hover">
              <div className="filter-trigger">
                <span className="filter-trigger__label">Метро</span>
              </div>
            </div>

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
  filterChange: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]).isRequired,
};
