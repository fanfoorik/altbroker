import PropTypes from 'prop-types';
import React from 'react';

export default function Header(props) {
  return (
    <div className={`droptip__header ${props.className}`}>
      {props.children}
    </div>
  );
}

Header.defaultProps = {
  children: null,
  className: '',
};

Header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
