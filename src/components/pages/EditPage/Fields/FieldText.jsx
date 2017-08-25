import React from 'react';
import PropTypes from 'prop-types';
import Cleave from 'cleave.js/react';
import format from 'cleave.js/src/addons/phone-type-formatter.ru';

import Field from './Field';

const FieldText = (props) => {
  const {
    value,
    onChangeState,
    field,
    type,
    typeText,
  } = props;

  const onChangeHandler = (e) => {
    console.log(e.target.rawValue);
    onChangeState({
      [field]: e.target.value,
    });
  };

  let options = {};
  switch (typeText) {
    case 'phone':
      options = {
        phone: true,
        phoneRegionCode: 'RU',
      };

      break;
    case 'number': {
      options = {
        delimiter: ' ',
        numeral: true,
      };

      break;
    }

    case 'money': {
      options = {
        delimiter: ' ',
        numeral: true,
        prefix: '\u20BD ', // значок рубля
      };

      break;
    }

    default:
      break;
  }

  return (
    <Field {...props}>
      <Cleave
        className="edit-form__item-input"
        value={value}
        onChange={onChangeHandler}
        options={options}
      />
    </Field>
  );
};

FieldText.propTypes = {
  value: PropTypes.string,
  onChangeState: PropTypes.func.isRequired,

  field: PropTypes.string,
  type: PropTypes.string,
};

FieldText.defaultProps = {
  type: 'text',
  field: '',
  value: '',
};

export default FieldText;
