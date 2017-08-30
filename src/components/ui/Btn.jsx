
import PropTypes from 'prop-types';
import React from 'react';

export default function Btn(props) {
  return (
    <div className="switcher">
      <span onClick={props.handleTrue}
            className={`switcher__on switcher-check ${props.checked ? '' : 'disabled' }`}>Да</span>
        <label className="switcher__label">
          <input
            onChange={props.onChange}
            className="switcher__input"
            type="checkbox"
            checked={props.checked}
          />
          <span className="switcher__box"></span>
        </label>
      <span onClick={props.handleFalse}
            className={`switcher__off switcher-check ${props.checked ? 'disabled' : ''}`}>Нет</span>
    </div>
  );
}
