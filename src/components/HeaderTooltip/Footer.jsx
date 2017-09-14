import PropTypes from 'prop-types';
import React from 'react';

export default function Footer(props) {
  return (
    <div className={`droptip__footer ${props.className}`}>
      {props.children}
    </div>
  );
}

Footer.defaultProps = {
  children: null,
  className: '',
};

Footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
};
