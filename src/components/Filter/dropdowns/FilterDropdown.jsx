import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Column from './Column';
import Scrollpane from './Scrollpane';

function FilterDropdown(props) {
  return (
    <div className={`form-dropdown ${props.className}`}>
      {props.children}
    </div>
  );
}

FilterDropdown.defaultProps = {
  className: '',
  children: null,
};

FilterDropdown.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

FilterDropdown.Header = Header;
FilterDropdown.Column = Column;
FilterDropdown.Scrollpane = Scrollpane;

export default FilterDropdown;
