import React from 'react';

const FormRow = ({
  children,
  addError,
  deleteError,
  toggleDisabledSubmit,
}) => {
  return (
    <div className="row">
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          toggleDisabledSubmit,
          addError,
          deleteError,
        });
      })}
    </div>
  );
};

export default FormRow;
