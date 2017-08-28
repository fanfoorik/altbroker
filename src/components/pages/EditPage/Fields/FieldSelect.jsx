import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

import Field from './Field';

const FieldSelect = (props) => {
  const {
    value,
    field,
    options,
    onChangeState,
    multi,
    link,
    disabled,
    maxCountCurrentValues,
  } = props;

  const onChangeHandler = (selectData) => {
    let selectOption = selectData;

    if (multi && maxCountCurrentValues) {
      selectOption = selectOption.slice(0, maxCountCurrentValues);
    }

    if (selectOption === null) {
      onChangeState({ [field]: selectOption });
    } else {
      onChangeState({
        [field]: selectOption.length === undefined ?
        selectOption.value :
        selectOption.map(data => data.value),
      });
    }
  };

  let optionsRes;
  if (field === 'PROPERTY_METRO_NEW') {
    optionsRes = options ?
    options
      .filter(metro => metro.PROPERTY_CITY_VALUE === link)
      .map(metro => ({ value: metro.ID, label: metro.NAME })) :
    [];
  } else {
    optionsRes = options;
  }

  return (
    <Field {...props}>
      <Select
        multi={multi}
        value={value}
        options={optionsRes}
        disabled={!optionsRes || disabled || optionsRes.length === 0}
        onChange={onChangeHandler}
      />
    </Field>
  );
};

FieldSelect.propTypes = {
  onChangeState: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),

  link: PropTypes.string,
  field: PropTypes.string,
  options: PropTypes.array,
  multi: PropTypes.bool,
  disabled: PropTypes.bool,
  maxCountCurrentValues: PropTypes.number,
};

FieldSelect.defaultProps = {
  field: '',
  disabled: false,
  maxCountCurrentValues: 0,
  link: '',
  multi: false,
  options: [],
  value: '',
};

export default FieldSelect;
