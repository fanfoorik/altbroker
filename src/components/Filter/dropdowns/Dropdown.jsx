import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';
import DropdownHOC from 'components/HOC/DropdownHOC';


function Dropdown(props) {
  return (<div className="form-dropdown">{props.children}</div>);
}

Dropdown.defaultProps = {
  children: null,
  className: '',
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
  className: PropTypes.string,
};

export default DropdownHOC(Dropdown);
