import React from 'react';

const FieldText = ({
  title,
  value,
  onChangeState
}) => {
  const onChangeHandlerName = (e) => {
    onChangeState({
      name: e.target.value,
    });
  };

  return (
    <div className="edit-form__item">
      <lable className="edit-form__item-label">{title}</lable>
      <input
        className="edit-form__item-input"
        value={value}
        type="text"
        onChange={onChangeHandlerName}
      />
    </div>
  );
};

export default FieldText;
