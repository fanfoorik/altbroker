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
  name: '',
  onClose: false,
  onReset: false,
};

FormControls.propTypes = {
  name: PropTypes.string,
  onClose: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  onReset: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
};

export default FormControls;

