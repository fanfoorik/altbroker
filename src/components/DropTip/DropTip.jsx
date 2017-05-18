import React from 'react';
import PropTypes from 'prop-types';

export default class DropTip extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
    document.addEventListener('keyup', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
    document.removeEventListener('keyup', this.onOutsideClick);
  }

  onOutsideClick = (ev) => {
    const droptip = this.refs.droptip;

    if (ev.type === 'click' && !droptip.contains(ev.target) || ev.type === 'keyup' && ev.which === 27) {
      this.props.handleOuterClick();
    }
  }

  render() {
    const classAttr = this.props.className;

    return (
      <div className={`droptip ${classAttr ? classAttr : ''}`} ref="droptip">
        {this.props.children}
      </div>
    );
  }
}

DropTip.propTypes = {
  handleOuterClick: PropTypes.func.isRequired,
};
