import React from 'react';
import PropTypes from 'prop-types';

const Field = ({
  children,
  title,
  required,
  size,
  addError,
  deleteError,
  field,
  errors,
}) => {
  const onBlurHandler = (e) => {
    const textErrorRequired = 'Поле обязательно для заполнения!';
    const eventValue = e.target.rawValue || e.target.value;

    if (required && (eventValue === null || eventValue.length === 0)) {
      addError(field, textErrorRequired);
    } else {
      deleteError(field, textErrorRequired);
    }
  };

  const element = React.Children.map(children, elem =>
    React.cloneElement(elem, {
      onBlur: onBlurHandler,
    }),
  );

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item">
        <lable className="edit-form__item-label">
          {title}
          {required ? <span style={({ color: 'red' })}>*</span> : ''}
        </lable>
        {element}
        <span className="edit-form__error-text" >
          {errors[field]}
        </span>
      </div>
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.string,
  title: PropTypes.string,
  required: PropTypes.bool,
  size: PropTypes.oneOf([
    1, 2, 3, 4, 5, 6,
    7, 8, 9, 10, 11, 12,
  ]),
  addError: PropTypes.func,
  deleteError: PropTypes.func,
  children: PropTypes.element.isRequired,
  errors: PropTypes.shape({
    field: PropTypes.string,
    type: PropTypes.string,
  }),
};

Field.defaultProps = {
  title: '',
  field: '',
  required: false,
  size: 12,
  addError: () => {},
  deleteError: () => {},
  errors: {},
};

export default Field;
