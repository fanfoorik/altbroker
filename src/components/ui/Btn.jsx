
import PropTypes from 'prop-types';
import React from 'react';

export default function Btn(props) {
  console.log(props);
  return (
    <div className="checkbox-switcher">
      <span onClick={props.handleTrue}
            className={`checkbox-switcher__on checkbox-switcher-check ${props.checked ? '' : 'disabled' }`}>Да</span>
        <label className="checkbox-switcher__label">
          <input
            onChange={props.onChange}
            className="checkbox-switcher__input"
            type="checkbox"
            checked={props.checked}
          />
          <span className="checkbox-switcher__box"></span>
        </label>
      <span onClick={props.handleFalse}
            className={`checkbox-switcher__off checkbox-switcher-check ${props.checked ? 'disabled' : ''}`}>Нет</span>
    </div>
  );
}
