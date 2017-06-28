import PropTypes from 'prop-types';
import React from 'react';

export default class BusinessFilter extends React.Component {
  render() {
    return (
      <div className="filter filter_business">

        <div className="filter__row clear">

          <div className="filter__cell filter__cell_hover">
            <input className="input filter__input" type="text" placeholder="ID / Название объекта / Телефон" />
          </div>

          <div className="filter__cell filter__cell_hover">
            <span className="filter-trigger filter-trigger_binded">
              <span className="filter-trigger__label">Категория</span>
              <span className="filter-trigger__value">Пиццерии Фитнес-бары</span>
            </span>
          </div>

          <div className="filter__cell filter__cell_hover">
            <span className="filter-trigger">
              <span className="filter-trigger__label">Цена</span>
            </span>
          </div>

          <div className="filter__cell">
            <div className="filter__row clear">

              <div className="filter__cell filter__cell_deeper filter__cell_hover">
                <span className="filter-trigger">
                  <span className="filter-trigger__label">Прибыль</span>
                </span>
              </div>

              <div className="filter__cell filter__cell_deeper filter__cell_hover">
                <span className="filter-trigger">
                  <span className="filter-trigger__label">Окупаемость</span>
                </span>
              </div>

            </div>
          </div>

          <div className="filter__cell">fghjkl</div>
        </div>

        <div className="filter__row clear">
          <div className="filter__cell">fghjkl</div>
          <div className="filter__cell">fghjkl</div>
          <div className="filter__cell">fghjkl</div>
          <div className="filter__cell">fghjkl</div>
        </div>

        <div className="filter__footer clear">
          Сохраненные фильтры
        </div>

      </div>
    );
  }
}
