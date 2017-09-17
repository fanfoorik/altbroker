import PropTypes from 'prop-types';
import React from 'react';

export default function Row(props) {
  return (
    <div className="filter__row clear">
      {props.children}
    </div>
  );
}

Row.defaultProps = { children: null };
Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
