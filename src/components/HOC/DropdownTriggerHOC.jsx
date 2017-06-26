import React from 'react';

export default function (TriggeredComponent) {
  return class extends React.Component {
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
        <TriggeredComponent
          {...this.props}
          isActive={isActive}
          triggerDropdown={this.triggerDropdown}
          openDropdown={this.dropdownOpen}
          closeDropdown={this.dropdownClose}
        />
      );
    }
  };
}
