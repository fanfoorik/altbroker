import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';
import Cell from './Cell';
import Trigger from './Trigger';

function Filter({ className, children, ...props }) {
  return (
    <div className={`filter clear ${className}`}>
      <form {...props}>
        {children}
      </form>
    </div>
  );
}

Filter.defaultProps = {
  children: null,
  className: '',
  onSubmit: null,
};

Filter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  onSubmit: PropTypes.func,
};

Filter.Cell = Cell;
Filter.Row = Row;
Filter.Trigger = Trigger;

export default Filter;
