import React from 'react';
import PropTypes from 'prop-types';

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

FormRow.propTypes = {
  children: PropTypes.node.isRequired,
  addError: PropTypes.func,
  deleteError: PropTypes.func,
  toggleDisabledSubmit: PropTypes.func,
  errors: PropTypes.object,
};

FormRow.defaultProps = {
  addError: () => {},
  deleteError: () => {},
  toggleDisabledSubmit: () => {},
  errors: {},
};

export default FormRow;
