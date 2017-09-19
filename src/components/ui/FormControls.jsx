import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'components/Icon';

function FormControls(props) {
  const { left, right } = props;

  return (
    <div className="form-controls">
      <div className="form-controls__left">
        { left }
      </div>
      <div className="form-controls__right">
        { right }
      </div>
    </div>
  );
}

FormControls.defaultProps = {
  left: null,
};

FormControls.propTypes = {
  left: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default FormControls;

