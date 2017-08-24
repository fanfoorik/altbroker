import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldText = (props) => {
  const {
    title,
    value,
    onChangeState,
    size,
    field,
    required,
    validRules,
    type,
  } = props;

  const onChangeHandler = (e) => {
    onChangeState({
      [field]: e.target.value,
    });
  };

  return (
    <Field {...props}>
      <input
        className="edit-form__item-input"
        value={value}
        type={type}
        onChange={onChangeHandler}
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
  validRules: PropTypes.func,
  type: PropTypes.string,
  required: PropTypes.bool,
};

FieldText.defaultProps = {
  type: 'text',
};

export default FieldText;
