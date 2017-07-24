import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import FilterTooltipHOC from 'components/Filter/FilterTooltipHOC';

class FilterCategory extends React.Component {
  render() {
    return (
      <div className="form-dropdown filter-tooltip__two">
        <div onSubmit={this.submitSearch}>
          <div className="form-block">
            <div className="form-header">
              <div className="form-header__name">
                Город <span className="form-header__name_number">2</span>
              </div>
              <div className="form-header__subcategory">
                Район <Icon className="icon" icon="arrow-right" width={9} height={9} />
              </div>
            </div>
            <div className="form-search">
              <input
                className="form-search__input input"
                onChange={this.typeComment}
                placeholder="Поиск"
                type="text"
              />
              <button type="submit" className="form-search__submit">
                <Icon
                  className="search__icon-icon"
                  icon="lens"
                  width="15"
                  height="15"
                />
              </button>
            </div>

            <div className="form-checkboxs checkboxs-no">
              <div className="form-checkboxs__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Москва
                  <input type="checkbox" id="checkbox-select-all" />
                </label>
              </div>
              <div className="form-checkboxs__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Санкт-Петербург
                  <input type="checkbox" id="checkbox-select-all" />
                </label>
              </div>
              <hr/>
            </div>
          </div>

          <div className="form-block">
            <div className="form-header">
              <div className="form-header__name">
                Районы <span className="form-header__name_number">2</span>
              </div>
              {/*<div className="form-header__subcategory">*/}
                {/*Район <Icon className="icon" icon="arrow-right" width={9} height={9} />*/}
              {/*</div>*/}
            </div>
            <div className="form-search">
              <input
                className="form-search__input input"
                onChange={this.typeComment}
                placeholder="Поиск"
                type="text"
              />
              <button type="submit" className="form-search__submit">
                <Icon
                  className="search__icon-icon"
                  icon="lens"
                  width="15"
                  height="15"
                />
              </button>
            </div>

            <div className="form-checkboxs checkboxs-no">
              <div className="form-checkboxs__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Москва
                  <input type="checkbox" id="checkbox-select-all" />
                </label>
              </div>
              <div className="form-checkboxs__item">
                <label className="checkbox" htmlFor="checkbox-select-all"> Санкт-Петербург
                  <input type="checkbox" id="checkbox-select-all" />
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
      </div>
    );
  }
}

export default FilterTooltipHOC(FilterCategory);
