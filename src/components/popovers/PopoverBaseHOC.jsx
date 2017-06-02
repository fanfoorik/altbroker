import React from 'react';

import { intersection } from 'mezr';

export default function PopoverBaseHOC(Popover) {
  return class extends React.Component {
    /**
     * Adds `top` class to popover if it intersects with Listing header.
     */
    setDirection = (popover) => {
      const heading = document.getElementById('listing-heading');
      if (!intersection(heading, popover)) return;
      popover.classList.add('top');
    };

    render() {
      return (
        <Popover
          {...this.props}
          setDirection={this.setDirection}
        />
      );
    }
  };
}
