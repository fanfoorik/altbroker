import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const FieldSelect = ({
  value,
  field,
  options,
  onChangeState,
  multi,
  title,
  size,
  link,
  required,
}) => {
  const onChangeHandler = (fieldName) => {
    return (SelectData) => {
      onChangeState({
        [fieldName]: SelectData !== null &&
        SelectData.length === undefined ?
          SelectData.value :
          SelectData.map(data => data.value),
      });
    };
  };

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item">
        <lable className="edit-form__item-label">
          {title}
          {required ? <span style={({color: 'red'})}>*</span> : ''}
        </lable>
        {
          field === 'metro' ?
            <Select
              value={value}
              disabled={!options}
              options={
                options ?
                options
                  .filter(metro => metro.PROPERTY_CITY_VALUE === link)
                  .map(metro => ({ value: metro.ID, label: metro.NAME })) :
                []
              }
              onChange={onChangeHandler(field)}
            /> :

            <Select
              multi={multi}
              value={value}
              options={options}
              disabled={!options}
              onChange={onChangeHandler(field)}
            />
        }
      </div>
    </div>
  );
};

FieldSelect.propTypes = {
  field: PropTypes.string,
  options: PropTypes.array,
  multi: PropTypes.bool,
  size: PropTypes.oneOf([
    1, 2, 3,
    4, 5, 6,
    7, 8, 9,
    10, 11, 12,
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
