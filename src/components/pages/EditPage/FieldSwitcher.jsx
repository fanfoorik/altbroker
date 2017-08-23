import React from 'react';

import Switcher from 'components/ui/Switcher';
import Field from './Field';

const FieldSwitcher = ({
  title,
  value,
  onChangeState,
  size,
  field,
}) => {
  return (
    <Field
      title={title}
      size={size}
      onChangeState={onChangeState}
      field={field}
    >
      <Switcher />
    </Field>
  );
};

export default FieldSwitcher;