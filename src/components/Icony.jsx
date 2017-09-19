import React from 'react';
import PropTypes from 'prop-types';

function Icony({ className, icon, ...props }) {
  return (
    <svg {...props} className={`icon ${className}`}>
      <use xlinkHref={`#${icon.id}`} width={props.width} height={props.height} />
    </svg>
  );
}

Icony.defaultProps = {
  className: '',
};

Icony.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.shape({
    id: PropTypes.string,
  }).isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Icony;
