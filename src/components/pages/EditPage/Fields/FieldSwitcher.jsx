import React from 'react';

import Switcher from 'components/ui/Switcher';
import Field from './Field';

const FieldSwitcher = (props) => {
  const {
    value,
    onChangeState,
    field,
  } = props;

  const onChangeHandler = (checked) => {
    onChangeState({
      [field]: checked,
    });
  };

  return (
    <Field {...props}>
      <Switcher onChange={onChangeHandler} value={value} />
    </Field>
  );
};

export default FieldSwitcher;