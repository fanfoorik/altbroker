import PropTypes from 'prop-types';
import React from 'react';

export default function Checkpoint(props) {
  const { label, className, id } = props;
  const checkboxId = id || Math.floor(Date.now() * Math.random());

  return (
    <label className={['checkbox', className].join(' ')} htmlFor={label && checkboxId} >
      <input type="checkbox" {...props} className="checkbox-elem" id={checkboxId} />
      <div className="checkbox__indicator" />
      {label && <span className="checkbox__label">{label}</span>}
    </label>
  );
}

Checkpoint.defaultProps = {
  label: null,
  className: null,
  id: null,
};

Checkpoint.propTypes = {
  label: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
