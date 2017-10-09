import PropTypes from 'prop-types';
import React from 'react';
import preventOverScroll from 'utils/preventOverScroll';

export default function Scrollpane({ className, children, ...props }) {
  return (
    <div className={`form-block ${className}`} ref={node => preventOverScroll(node)} {...props} >
      {children}
    </div>
  );
}

Scrollpane.defaultProps = {
  children: null,
  className: '',
};

Scrollpane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
