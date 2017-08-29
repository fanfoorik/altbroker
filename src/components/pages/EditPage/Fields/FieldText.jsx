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
    typeText,
  } = props;

  const onChangeHandler = (e) => {
    const target = e.target;
    onChangeState({
      [field]: (target.rawValue !== undefined) ? target.rawValue : target.value,
    });
  };

  const inputProps = {
    className: 'edit-form__item-input',
    value,
    onChange: onChangeHandler,
  };

  let Input = (
    <input
      {...inputProps}
      type="text"
    />
  );

  switch (typeText) {
    case 'phone':
      Input = (
        <Cleave
          {...inputProps}
          options={{
            phone: true,
            phoneRegionCode: 'RU',
          }}
        />
      );

      break;
    case 'number': {
      Input = (
        <Cleave
          {...inputProps}
          options={{
            delimiter: ' ',
            numeral: true,
          }}
        />
      );

      break;
    }

    case 'money': {
      Input = (
        <Cleave
          {...inputProps}
          options={{
            delimiter: ' ',
            numeral: true,
            // prefix: '\u20BD ', // значок рубля
          }}
        />
      );

      break;
    }

    default:
      break;
  }

  return (
    <Field {...props}>
      {Input}
    </Field>
  );
};

FieldText.propTypes = {
  value: PropTypes.string,
  onChangeState: PropTypes.func.isRequired,
  typeText: PropTypes.string,
  field: PropTypes.string,
};

FieldText.defaultProps = {
  field: '',
  value: '',
  typeText: ''
};

export default FieldText;
