import React from 'react';

const FormRow = ({
  children,
  addError,
  deleteError,
  toggleDisabledSubmit,
  errors,
}) => {
  return (
    <div className="row">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          toggleDisabledSubmit,
          addError,
          deleteError,
          errors,
        });
      })}
    </div>
  );
};

export default FormRow;
