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
    title,
    size,
    link,
    required,
    disabled,
    toggleDisabledSubmit,
  } = props;

  const onChangeHandler = (SelectData) => {
    onChangeState({
      [field]: SelectData !== null &&
      SelectData.length === undefined ?
        SelectData.value :
        SelectData.map(data => data.value),
    });
  };

  return (
    <Field {...props}>
      {
        field === 'metro' ?
          <Select
            value={value}
            disabled={!options || disabled}
            options={
              options ?
              options
                .filter(metro => metro.PROPERTY_CITY_VALUE === link)
                .map(metro => ({ value: metro.ID, label: metro.NAME })) :
              []
            }
            onChange={onChangeHandler}
          /> :

          <Select
            multi={multi}
            value={value}
            options={options}
            disabled={!options || disabled}
            onChange={onChangeHandler}
          />
      }
    </Field>
  );
};

FieldSelect.propTypes = {
  field: PropTypes.string,
  options: PropTypes.array,
  multi: PropTypes.bool,
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12,
  ]),
  title: PropTypes.string,
  onChangeState: PropTypes.func,
  link: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  required: PropTypes.bool,
};

export default FieldSelect;
