import PropTypes from 'prop-types';
import React from 'react';

export default class Cell extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }

  componentDidMount() {
    console.log('Cell componentDidMount');
  }

  render() {
    return (
      <div className="filter__cell">
        {this.props.children}
        {this.props.bool}
      </div>
    );
  }
}
