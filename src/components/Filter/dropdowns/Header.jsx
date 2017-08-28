import PropTypes from 'prop-types';
import React from 'react';

export default function Header({ label, length }) {
  return (
    <div className="form-header">
      <div className="form-header__name">
        {label}
        {!!length && <span className="form-header__name_number">{length}</span>}
      </div>
    </div>
  );
}

Header.defaultProps = {
  label: '--',
  length: null,
};

Header.propTypes = {
  label: PropTypes.string,
  length: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
