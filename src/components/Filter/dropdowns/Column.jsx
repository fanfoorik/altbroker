import PropTypes from 'prop-types';
import React from 'react';

export default function Column({ children }) {
  return (
    <div className="form-column">
      {children}
    </div>
  );
}

Column.defaultProps = {
  children: null,
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
