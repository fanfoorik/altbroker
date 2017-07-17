import PropTypes from 'prop-types';
import React from 'react';

import preventOverScroll from 'utils/preventOverScroll';

export default function FilterTooltiopHOC(Tooltip) {
  return class FilterTooltip extends React.Component {

    componentDidMount() {
      // document.addEventListener('click', this.onOuterClick);
      // document.addEventListener('keyup', this.onOuterClick);
      // window.addEventListener('scroll', this.onOuterClick);
    }

    componentWillUnmount() {
      // document.removeEventListener('click', this.onOuterClick);
      // document.removeEventListener('keyup', this.onOuterClick);
      // window.removeEventListener('scroll', this.onOuterClick);
    }

    // onOuterClick = (event) => {
    //   const popover = this.popover;
    //   const clickEvent = event.type === 'click' && !popover.contains(event.target);
    //   const keyupEvent = event.type === 'keyup' && event.which === 27;
    //   const scrollEvent = event.type === 'scroll';
    //
    //   if (clickEvent || keyupEvent || scrollEvent) {
    //     this.props.triggerPopover();
    //   }
    // };

    providePopover = (popover) => {
      this.popover = popover;
    };

    render() {
      return (
        <div className="filter-tooltip">
          <Tooltip {...this.props} providePopover={this.providePopover} />
        </div>
      );
    }
  };
}
