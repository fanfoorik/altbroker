import PropTypes from 'prop-types';
import React from 'react';
import Btn from 'components/ui/Btn';

class Switcher extends React.Component {

  constructor(props) {
    super(props);
    this.state = { checked: props.value };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      checked: nextProps.value,
    });
  }

  handleChange = () => {
    this.setState({
      checked: !this.state.checked,
    });
    this.props.onChange(!this.state.checked);
  };

  handleTrue = () => {
    this.setState({
      checked: true,
    });
    this.props.onChange(true);
  };

  handleFalse = () => {
    this.setState({
      checked: false,
    });
    this.props.onChange(false);
  };

  render() {
    return (
      <div>
        <Btn
          onChange={this.handleChange}
          handleTrue={this.handleTrue}
          handleFalse={this.handleFalse}
          checked={this.state.checked}
        />
      </div>
    );
  }
}

Switcher.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func,
};

Switcher.defaultProps = {
  value: false,
};

export default Switcher;
