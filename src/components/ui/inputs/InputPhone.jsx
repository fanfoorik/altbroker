import React, { Component } from 'react';

import { Input } from 'antd';
import { formatNumber } from 'utils/formaters';

/**
 *  Input компонент исключительно для ввода числовых и денежных значений
 */
class InputPhone extends Component {
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

    let phone1 = editedValue.slice(0, 3) ? `(${editedValue.slice(0, 3)}` : '';
    let phone2 = editedValue.slice(3, 6) ? `) ${editedValue.slice(3, 6)}` : '';
    let phone3 = editedValue.slice(6, 8) ? `-${editedValue.slice(6, 8)}` : '';
    let phone4 = editedValue.slice(8, 10) ? `-${editedValue.slice(8, 10)}` : '';

    const phoneString = phone1 + phone2 + phone3 + phone4;
    return phoneString;
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
        addonBefore="+7"
        placeholder="XXX XXX XX XX"
      />
    );
  }
}

export default InputPhone;
