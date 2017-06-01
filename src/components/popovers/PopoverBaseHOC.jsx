import React from 'react';

import { intersection } from 'mezr';

export default function PopoverBaseHOC(Popover) {
  return class extends React.Component {
    /**
     * Adds `top` class to pop
     */
    setDirection = () => {
      console.log(this.popover);
      const heading = document.getElementById('listing-heading');
      if (!intersection(heading, this.popover)) return;
      this.popover.classList.add('top');
    };

    render() {
      return (
        <Popover
          {...this.props}
          setDirection={this.setDirection}
          ref={(node) => { this.popover = node; }}
        />
      );
    }
  };
}
