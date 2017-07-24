import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import FilterTooltipHOC from 'components/Filter/FilterTooltipHOC';

class FilterCategory extends React.Component {
  render() {
    return (
      <div className="form-dropdown form-dropdown_two form-range form-recoupment">
        <div className="form-block">
          <span className="form-range__zone">От</span>
          <input
            className="form-range__input align-right"
            value="1"
            min={0}
            onChange={this.handleChange}
            type="text"
          />
          <ul className="form-range__list" onClick={this.handleDecreasePrice}>
            <li className="form-range__list_item" data-value={500000}>500 000</li>
            <li className="form-range__list_item" data-value={1000000}>1 000 000</li>
            <li className="form-range__list_item" data-value={2000000}>2 000 000</li>
            <li className="form-range__list_item" data-value={5000000}>5 000 000</li>
          </ul>
        </div>

        <div className="form-block">
          <input
            className="form-range__input align-right"
            value="1"
            min={0}
            onChange={this.handleChange}
            type="text"
          />
          <ul className="form-range__list" onClick={this.handleDecreasePrice}>
            <li className="form-range__list_item" data-value={500000}>500 000</li>
            <li className="form-range__list_item" data-value={1000000}>1 000 000</li>
            <li className="form-range__list_item" data-value={2000000}>2 000 000</li>
            <li className="form-range__list_item" data-value={5000000}>5 000 000</li>
          </ul>
        </div>

        <div className="form-controls">
          <span className="form-controls__reset">
            Сбросить
          </span>
          <div className="form-controls__actions">
            <button type="submit" className="form-controls__actions_item disabled">
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
