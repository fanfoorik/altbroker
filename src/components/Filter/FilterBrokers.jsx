import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import FilterTooltipHOC from 'components/Filter/FilterTooltipHOC';

class FilterCategory extends React.Component {
  render() {
    return (
      <div className="form-dropdown">
          <div className="form-block">
            <div className="form-search">
              <input
                className="form-search__input input"
                onChange={this.typeComment}
                placeholder="Поиск"
                type="text"
              />
              <button type="submit" className="form-search__submit">
                <Icon
                  className="form-search__icon"
                  icon="lens"
                  width="15"
                  height="15"
                />
              </button>
            </div>

            <div className="form-checkboxes">
              <div className="form-checkboxes__item checkboxes-categor">
                <label className="checkbox" htmlFor="checkbox-select-all"> Отдел продаж (СПб)
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Пекарский А.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Пекарский А.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Соловьев И.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
            </div>
            <div className="form-checkboxes">
              <div className="form-checkboxes__item checkboxes-categor">
                <label className="checkbox" htmlFor="checkbox-select-all"> Отдел продаж (СПб)
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Пекарский А.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Пекарский А.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
              <div className="form-checkboxes__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Соловьев И.
                  <input type="checkbox" id="checkbox-select-all" />
                  <div className="checkbox_indicator" />
                </label>
              </div>
            </div>
          </div>

          <div className="form-controls">
            <span className="form-controls__reset">
                    Сбросить
            </span>
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
}

export default FilterTooltipHOC(FilterCategory);
