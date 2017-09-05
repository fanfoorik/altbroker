import PropTypes from 'prop-types';
import React from 'react';
import Row from './Row';
import Cell from './Cell';
import Trigger from './Trigger';

function Filter(props) {
  return (
    <div className="filter clear">
      <form onSubmit={props.onSubmit}>
        {props.children}
      </form>
    </div>
  );
}

Filter.defaultProps = {
  onSubmit: null,
  children: null,
};

Filter.propTypes = {
  onSubmit: PropTypes.func,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.array]),
};

Filter.Cell = Cell;
Filter.Row = Row;
Filter.Trigger = Trigger;

export default Filter;
