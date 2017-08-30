import React from 'react';
import PropTypes from 'prop-types';

import Field from './Field';

const FieldDiv = (props) => {
  const {
    value,
  } = props;

  return (
    <Field {...props}>
      <div className="edit-form__item-result">
        {value}
      </div>
    </Field>
  );
};

FieldDiv.propTypes = {
  value: PropTypes.string,
};

FieldDiv.defaultProps = {
  value: '',
};

export default FieldDiv;

