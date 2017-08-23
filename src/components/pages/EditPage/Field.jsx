import React from 'react';

const Field = ({
  children,
  title,
  required,
  size,
  error,
  onChangeState,
  field,
}) => {
  let parentElement;
  const onBlurHandler = (value) => {
    return () => {
      const errorElement = parentElement.getElementsByClassName('edit-form__error-text')[0];
      const textErrorRequired = 'Поле обязательно для заполнения!';
      const error = 'error';

      if (required && value.length === 0) {
        onChangeState(
          [{
            field,
            text: textErrorRequired,
          }]
        , error);

        parentElement.classList.add(error);
        errorElement.innerText = textErrorRequired;
      } else {
        onChangeState([], error);

        parentElement.classList.remove(error);
        errorElement.innerText = '';
      }
    };
  };

  const element = React.Children.map(children, element =>
    React.cloneElement(element, {
      onBlur: onBlurHandler(element.props.value),
    }),
  );

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item" ref={fieldElement => parentElement = fieldElement}>
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

export default Field;
