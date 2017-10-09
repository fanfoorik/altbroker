import PropTypes from 'prop-types';
import React from 'react';

export default function FilterDropdownHOC(Dropdown) {
  class DropdownHOC extends React.Component {
    static defaultProps = {
      onOpen() { return false; },
      onClose() { return false; },
      triggerDropdown() { return false; },
    };

    static propTypes = {
      onOpen: PropTypes.func,
      onClose: PropTypes.func,
      triggerDropdown: PropTypes.func,
    };

    componentDidMount() {
      if (this.props.onOpen) this.props.onOpen();
      document.addEventListener('click', this.onOuterClick);
      document.addEventListener('keyup', this.onOuterClick);
      window.addEventListener('scroll', this.onOuterClick);
    }

    componentWillUnmount() {
      if (this.props.onClose) this.props.onClose();
      document.removeEventListener('click', this.onOuterClick);
      document.removeEventListener('keyup', this.onOuterClick);
      window.removeEventListener('scroll', this.onOuterClick);
    }

    onOuterClick = (event) => {
      const target = this.target;
      const clickEvent = event.type === 'click' && !target.contains(event.target);
      const keyupEvent = event.type === 'keyup' && event.which === 27;
      const scrollEvent = event.type === 'scroll';

      if (clickEvent || keyupEvent || scrollEvent) {
        this.props.triggerDropdown();
      }
    };

    render() {
      return (
        <div className="target-panel" ref={(node) => { this.target = node; }}>
          <Dropdown {...this.props} />
        </div>
      );
    }
  }

  DropdownHOC.displayName = `DropdownHOC(${Dropdown.displayName || Dropdown.name || 'Dropdown'})`;
  return DropdownHOC;
}
