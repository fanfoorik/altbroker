import React from 'react';

export default function (Component) {
  class DropdownTriggerHOC extends React.Component {
    constructor() {
      super();
      this.state = { isActive: false };
    }

    triggerDropdown = () => {
      this.setState({ isActive: !this.state.isActive });
    };

    openDropdown = () => {
      this.setState({ isActive: true });
    };

    closeDropdown = () => {
      this.setState({ isActive: false });
    };

    render() {
      const { isActive } = this.state;

      return (
        <Component
          {...this.props}
          isActive={isActive}
          triggerDropdown={this.triggerDropdown}
          openDropdown={this.openDropdown}
          closeDropdown={this.closeDropdown}
        />
      );
    }
  }

  DropdownTriggerHOC.displayName = `DropdownTriggerHOC(${Component.displayName || Component.name || 'Component'})`;
  return DropdownTriggerHOC;
}
