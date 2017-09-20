import PropTypes from 'prop-types';
import React from 'react';

export default class Dropdown extends React.Component {

  componentDidMount() {
    const {
      onOpen,
      disableCloseOnScroll,
      disableCloseOnEscape,
      disableCloseOnOuterClick,
    } = this.props;

    if (onOpen) onOpen(this.target.firstChild);
    if (!disableCloseOnScroll) window.addEventListener('scroll', this.onOuterClick);
    if (!disableCloseOnEscape) document.addEventListener('keyup', this.onOuterClick);
    if (!disableCloseOnOuterClick) document.addEventListener('click', this.onOuterClick);
  }

  componentWillUnmount() {
    if (this.props.onClose) this.props.onClose(this.target.firstChild);
    document.removeEventListener('click', this.onOuterClick);
    document.removeEventListener('keyup', this.onOuterClick);
    window.removeEventListener('scroll', this.onOuterClick);
  }

  onOuterClick = (event) => {
    const target = this.target;
    const clickEvent = event.type === 'click' && !target.contains(event.target);
    const keyupEvent = event.type === 'keyup' && event.which === 27;
    const scrollEvent = event.type === 'scroll';

    if ((clickEvent || keyupEvent || scrollEvent) && this.props.triggerDropdown) {
      this.props.triggerDropdown();
    }
  };

  render() {
    return (
      <div className={`target-panel ${this.props.className}`} ref={(node) => { this.target = node; }}>
        {this.props.children}
      </div>
    );
  }
}

Dropdown.defaultProps = {
  children: null,
  className: '',
  disableCloseOnScroll: false,
  disableCloseOnEscape: false,
  disableCloseOnOuterClick: false,
  onOpen: null,
  onClose: null,
  triggerDropdown: null,
};

Dropdown.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  className: PropTypes.string,
  disableCloseOnScroll: PropTypes.bool,
  disableCloseOnEscape: PropTypes.bool,
  disableCloseOnOuterClick: PropTypes.bool,
  onOpen: PropTypes.func,
  onClose: PropTypes.func,
  triggerDropdown: PropTypes.func,
};
