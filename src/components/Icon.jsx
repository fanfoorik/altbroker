import React from 'react';
import PropTypes from 'prop-types';

function Icon(props) {
  const { className, ...rest } = props;

  return (
    <svg {...rest} className={['icon', className].join(' ')}>
      <use xlinkHref={`#icon_${rest.icon}`} width={rest.width} height={rest.height} />
    </svg>
  );
}

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
