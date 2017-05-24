import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ className, ...props }) => {
  return (
    <svg {...props} className={['icon', className].join(' ')}>
      <use width={props.width} height={props.height} xlinkHref={`#icon_${props.icon}`} />
    </svg>
  );
};

Icon.defaultProps = {
  className: '',
};

Icon.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Icon;
