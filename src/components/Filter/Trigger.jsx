import PropTypes from 'prop-types';
import React from 'react';

export default function Trigger(props) {
  const { label, value, more, onClick } = props;

  return (
    <div
      className={`filter-trigger ${value ? 'filter-trigger_binded' : ''}`}
      onClick={onClick}
      role="button"
      tabIndex="0"
    >
      <span className="filter-trigger__label">{label}</span>
      {!!value &&
        <span className="filter-trigger__more">{more}</span>
      }
      {!!value &&
        <span className="filter-trigger__value">{value}</span>
      }
    </div>
  );
}

Trigger.defaultProps = {
  label: '---',
  more: '',
  value: '',
  onClick: null,
};

Trigger.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  more: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  onClick: PropTypes.func,
};
