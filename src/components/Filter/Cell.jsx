import PropTypes from 'prop-types';
import React from 'react';

export default function Cell({ className, children, ...props }) {
  return (
    <div className={`filter__cell ${className}`} {...props}>
      {children}
    </div>
  );
}

Cell.defaultProps = {
  children: null,
  className: '',
};

Cell.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
