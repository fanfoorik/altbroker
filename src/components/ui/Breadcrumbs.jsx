import PropTypes from 'prop-types';
import React from 'react';

export default function Breadcrumbs(props) {

  return (
    <div className={`breadcrumb ${className || ''}`} htmlFor={label && checkboxId} >
      <div className=""></div>
    </div>
  );
}

Breadcrumbs.defaultProps = {
  className: null,
};

Breadcrumbs.propTypes = {};
