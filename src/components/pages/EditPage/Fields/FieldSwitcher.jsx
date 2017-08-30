import React from 'react';
import PropTypes from 'prop-types';

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

FieldSwitcher.propTypes = {
  onChangeState: PropTypes.func.isRequired,

  value: PropTypes.bool,
  field: PropTypes.string,
};

FieldSwitcher.defaultProps = {
  value: false,
  field: '',
};

export default FieldSwitcher;
