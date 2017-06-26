import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';

export default function FilterDropdownHOC(Dropdown) {
  return class FilterDropdown extends React.Component {
    componentDidMount() {
      document.addEventListener('click', this.onOuterClick);
      document.addEventListener('keyup', this.onOuterClick);
      window.addEventListener('scroll', this.onOuterClick);
    }

    componentWillUnmount() {
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
      return false;
    }
  };
}
