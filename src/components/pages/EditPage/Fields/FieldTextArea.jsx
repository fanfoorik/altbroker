import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldTextArea = (props) => {
  const {
    value,
    onChangeState,
    field,
  } = props;

  const onChangeHandler = (e) => {
    onChangeState({
      [field]: e.target.value,
    });
  };

  return (
    <Field {...props}>
      <textarea
        className="edit-form__item-input"
        value={value}
        type="text"
        onChange={onChangeHandler}
      />
    </Field>
  );
};

FieldTextArea.propTypes = {
  value: PropTypes.string,
  onChangeState: PropTypes.func.isRequired,

  field: PropTypes.string,
};

FieldTextArea.defaultProps = {
  field: '',
  value: '',
};

export default FieldTextArea;
