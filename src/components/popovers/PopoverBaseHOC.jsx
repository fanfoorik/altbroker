import PropTypes from 'prop-types';
import React from 'react';

import { intersection } from 'mezr';

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
      if (!intersection(heading, popover)) return;
      popover.classList.add('top');
    };

    componentDidMount() {
      document.addEventListener('click', this.onOuterClick);
      document.addEventListener('keyup', this.onOuterClick);
      window.addEventListener('scroll', this.onOuterClick);
      this.setDirection(this.popover);

      // TODO: stop scroll propagation in popovers
      // if (scrollable) {
      //   scrollable.addEventListener('mousewheel', function(event) {
      //     console.log(event.target);
      //     event.stopPropagation();
      //     event.preventDefault();
      //     event.returnValue = false;
      //     return false;
      //   });
      // }
    }

    componentWillUnmount() {
      document.removeEventListener('click', this.onOuterClick);
      document.removeEventListener('keyup', this.onOuterClick);
      window.removeEventListener('scroll', this.onOuterClick);
    }

    onOuterClick = (event) => {
      const popover = this.popover;

      if (event.type === 'click' && !popover.contains(event.target) ||
        event.type === 'keyup' && event.which === 27 ||
        event.type === 'scroll') {
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
