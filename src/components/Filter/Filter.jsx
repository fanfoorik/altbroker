import PropTypes from 'prop-types';
import React from 'react';

export default class Filter extends React.Component {
  render() {
    return (
      <div className="filter filter_business clear">
        <form>
          {this.props.children}
        </form>
      </div>
    );
  }
}
