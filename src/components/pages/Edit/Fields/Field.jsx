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
  maxCountCurrentValues,
}) => {
  const onBlurHandler = (value) => {
    return (e) => {
      const textErrorRequired = 'Поле обязательно для заполнения!';
      const textErrorMaxCount = `Максимальное кол-во ${maxCountCurrentValues}`;

      if (required &&
        (value === null || value.length === 0) &&
        !e.target.rawValue
      ) {
        addError(field, textErrorRequired);
      } else if (maxCountCurrentValues && (value.length > maxCountCurrentValues ||
          e.target.rawValue > maxCountCurrentValues)
      ) {
        addError(field, textErrorMaxCount);
      } else {
        deleteError(field, textErrorRequired);
      }
    };
  };

  const element = React.Children.map(children, elem =>
    React.cloneElement(elem, {
      onBlur: onBlurHandler(elem.props.value),
    }),
  );

  const toolTip = required ? {
    'data-placement': 'top',
    title: 'Поле обязательно для заполнения',
  } : {};

  return (
    <div className={`col-lg-${size}`}>
      <div className="edit-form__item">
        <lable
          className={`edit-form__item-label ${required ? 'required' : ''}`}
          {...toolTip}
        >
          {title}
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
