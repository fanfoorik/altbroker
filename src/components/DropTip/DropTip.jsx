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
    const droptip = this.droptip;

    if (event.type === 'click' && !droptip.contains(event.target) ||
      event.type === 'keyup' && event.which === 27) {
      this.props.handleOuterClick();
    }
  };

  render() {
    const classAttr = this.props.className;

    return (
      <div className={`droptip ${classAttr || ''}`} ref={(c) => { this.droptip = c; }}>
        {this.props.children}
      </div>
    );
  }
}

DropTip.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  handleOuterClick: PropTypes.func.isRequired,
};

DropTip.defaultProps = {
  children: null,
  className: '',
};
