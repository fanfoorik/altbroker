import React from 'react';

import Select from 'react-select';

const FieldSelect = ({
  value,
  field,
  options,
  onChangeState,
  multi,
  title,
  size,
  link
}) => {
  const onChangeHandler = (fieldName) => {
    return (SelectData) => {
      onChangeState({
        [fieldName]: SelectData.length === undefined ? SelectData.value : SelectData,
      });
    };
  };

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item">
        <lable className="edit-form__item-label">{title}</lable>
        {
          field === 'metro' ?
            <Select
              value={value}
              disabled={options === undefined}
              options={
                options ?
                options
                  .filter((metro) => {
                    const libId = parseInt(metro.PROPERTY_CITY_VALUE, 10);
                    const selectId = parseInt(link, 10);

                    return libId === selectId;
                  })
                  .map(metro => ({ value: metro.ID, label: metro.NAME })) :
                []
              }
              onChange={onChangeHandler(field)}
            /> :

            <Select
              multi={multi}
              value={value}
              options={options ? options : []}
              disabled={options === undefined}
              onChange={onChangeHandler(field)}
            />
        }
      </div>
    </div>
  );
};

export default FieldSelect;
