import PropTypes from 'prop-types';
import React from 'react';

export default class DropTip extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
    document.addEventListener('keyup', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
    document.removeEventListener('keyup', this.onOutsideClick);
  }

  onOutsideClick = (event) => {
    const droptip = this.refs.droptip;

    if (event.type === 'click' && !droptip.contains(event.target) ||
      event.type === 'keyup' && event.which === 27) {
      this.props.handleOuterClick();
    }
  };

  render() {
    const classAttr = this.props.className;

    return (
      <div className={`droptip ${classAttr || ''}`} ref="droptip">
        {this.props.children}
      </div>
    );
  }
}

DropTip.propTypes = {
  handleOuterClick: PropTypes.func.isRequired,
};
