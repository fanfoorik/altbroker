import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldText = (props) => {
  const {
    value,
    onChangeState,
    field,
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
