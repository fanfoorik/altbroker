import React from 'react';

export default function (TriggeredComponent) {
  return class extends React.Component {
    constructor() {
      super();
      this.state = { active: false };
    }

    triggerPopover = () => {
      this.setState({ active: !this.state.active });
    };

    render() {
      const { active } = this.state;

      return (
        <TriggeredComponent
          {...this.props}
          active={active}
          triggerPopover={this.triggerPopover}
        />
      );
    }
  };
}
