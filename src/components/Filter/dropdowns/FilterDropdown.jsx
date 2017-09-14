import PropTypes from 'prop-types';
import React from 'react';
import Header from './Header';
import Column from './Column';

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

export default FilterDropdown;
