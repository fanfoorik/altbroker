import React from 'react';
import PropTypes from 'prop-types';

const FieldText = ({
  title,
  value,
  onChangeState,
  size,
}) => {
  const onChangeHandlerName = (e) => {
    onChangeState({
      name: e.target.value,
    });
  };

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item">
        <lable className="edit-form__item-label">{title}</lable>
        <input
          className="edit-form__item-input"
          value={value}
          type="text"
          onChange={onChangeHandlerName}
        />
      </div>
    </div>
  );
};

FieldText.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  onChangeState: PropTypes.func,
  size: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
};

export default FieldText;
