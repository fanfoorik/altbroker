import React from 'react';

const FormRow = (props) => {
  return (
    <div className="row">
      {React.Children.map(props.children, (child) => {
        return React.cloneElement(child, {
          toggleDisabledSubmit: props.toggleDisabledSubmit,
        });
      })}
    </div>
  );
};

export default FormRow;
