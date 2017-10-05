import React, { Component } from 'react';

import { Input } from 'antd';
import { formatNumber } from 'utils/formaters';

/**
 *  Input компонент исключительно для ввода числовых и денежных значений
 */
class InputNumber extends Component {
  state = {
    editedValue: this.formatValue(this.props.value),
  }

  onChangeInputNumber = e => {
    const editedValue = this.formatValue(e.target.value);

    this.setState({
      editedValue,
    });

    this.props.onChange && this.props.onChange(editedValue);
  }

  formatValue(value) {
    const editedValue = value ? value.replace(/[^0-9]/gim,'') : '';

    return this.props.money ? formatNumber(editedValue) : editedValue;
  }

  render() {
    const {
      onChange,
      value,
      money,
      ...nativeProps
    } = this.props;

    return (
      <Input
        onChange={this.onChangeInputNumber}
        value={this.state.editedValue}
        {...nativeProps}
      />
    );
  }
}

export default InputNumber;
