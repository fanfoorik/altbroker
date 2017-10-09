import React, { Component } from 'react';

import { Input } from 'antd';
import {
  formatNumber,
  formatToPassportSeries,
  formatToPassportNumber,
} from 'utils/formaters';

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

    let result;
    if (this.props.money) {
      result = formatNumber(editedValue);
    } else if (this.props.type === 'passport_series') {
      result = formatToPassportSeries(editedValue);
    } else if (this.props.type === 'passport_number') {
      result = formatToPassportNumber(editedValue);
    } else {
      result = editedValue;
    }

    return result;
  }

  render() {
    const {
      onChange,
      value,
      money,
      type,
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