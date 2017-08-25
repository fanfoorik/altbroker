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
}) => {
  let parentElement;
  const onBlurHandler = (value) => {
    return () => {
      const errorElement = parentElement.getElementsByClassName('edit-form__error-text')[0];
      const textErrorRequired = 'Поле обязательно для заполнения!';

      if (required && (value === null || value.length === 0)) {
        parentElement.classList.add('error');
        errorElement.innerText = textErrorRequired;
        addError(field, textErrorRequired);
      } else {
        parentElement.classList.remove('error');
        errorElement.innerText = '';
        deleteError(field, textErrorRequired);
      }
    };
  };

  const element = React.Children.map(children, (element) =>
    React.cloneElement(element, {
      onBlur: onBlurHandler(element.props.value),
    }),
  );

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item" ref={(fieldElement) => parentElement = fieldElement}>
        <lable className="edit-form__item-label">
          {title}
          {required ? <span style={({ color: 'red' })}>*</span> : ''}
        </lable>
        {element}
        <span className="edit-form__error-text" />
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
};

Field.defaultProps = {
  title: '',
  field: '',
  required: false,
  size: 12,
  addError: () => {},
  deleteError: () => {},
};

export default Field;
