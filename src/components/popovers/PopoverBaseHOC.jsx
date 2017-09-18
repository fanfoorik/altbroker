import PropTypes from 'prop-types';
import React from 'react';

import { intersection } from 'mezr';
import preventOverScroll from 'utils/preventOverScroll';

export default function PopoverBaseHOC(Popover) {
  return class TransitComponent extends React.Component {
    static propTypes = {
      triggerPopover: PropTypes.func.isRequired,
    };
    /**
     * Add `top` class to popover if intersects with Listing header.
     */
    setDirection = (popover) => {
      const heading = document.getElementById('listing-heading');
      if (intersection(heading, popover)) {
        popover.classList.add('top');
      }
    };

    componentDidMount() {
      document.addEventListener('click', this.onOuterClick);
      document.addEventListener('keyup', this.onOuterClick);
      window.addEventListener('scroll', this.onOuterClick);
      this.setDirection(this.popover);

      const scrollable = Array.from(this.popover.querySelectorAll('.js-scrollable'));
      preventOverScroll(scrollable);
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.onOuterClick);
      document.removeEventListener('keyup', this.onOuterClick);
      window.removeEventListener('scroll', this.onOuterClick);
    }

    onOuterClick = (event) => {
      const popover = this.popover;
      const clickEvent = event.type === 'click' && !popover.contains(event.target);
      const keyupEvent = event.type === 'keyup' && event.which === 27;
      const scrollEvent = event.type === 'scroll';

      if (clickEvent || keyupEvent || scrollEvent) {
        this.props.triggerPopover();
      }
    };

    providePopover = (popover) => {
      this.popover = popover;
    };

    render() {
      return (
        <Popover
          {...this.props}
          providePopover={this.providePopover}
        />
      );
    }
  };
}
