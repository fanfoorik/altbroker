import PropTypes from 'prop-types';
import React from 'react';

export default function Row({ className, children, ...props }) {
  return (
    <div className={`filter__row clear ${className}`} {...props}>
      {children}
    </div>
  );
}

Row.defaultProps = {
  children: null,
  className: '',
};

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
