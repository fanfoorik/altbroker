import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldText = ({
  title,
  value,
  onChangeState,
  size,
  field,
  required,
}) => {
  const onChangeHandler = (fieldName) => {
    return (e) => {
      onChangeState({
        [fieldName]: e.target.value,
      });
    };
  };

  return (
    <Field
      title={title}
      required={required}
      size={size}
      onChangeState={onChangeState}
      field={field}
    >
      <input
        className="edit-form__item-input"
        value={value}
        type="text"
        onChange={onChangeHandler(field)}
      />
    </Field>
  );
};

FieldText.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeState: PropTypes.func,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  field: PropTypes.string,
};

export default FieldText;
