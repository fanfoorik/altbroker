import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router';
import nanoid from 'nanoid';

export default function Breadcrumbs({ className, items }) {
  return (
    <div className={`breadcrumbs clear ${className}`} >
      {items.map(({ label, link }) => (
        <div key={nanoid()} className="breadcrumbs__item">
          {link ? <Link to={link} className="breadcrumbs__link">{label || '--'}</Link> : label || '--'}
        </div>
      ))}
    </div>
  );
}

Breadcrumbs.defaultProps = {
  className: '',
  items: [{ label: '--' }],
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    link: PropTypes.string,
  })),
};
