import PropTypes from 'prop-types';
import React from 'react';
import Icon from 'components/Icon';

function FormControls(props) {
  const { onClose, onReset, name } = props;

  return (
    <div className="form-controls">
      <span className="form-controls__reset" onClick={onReset} role="button" tabIndex="0" data-name={name}>Сбросить</span>
      <div className="form-controls__actions">
        <div className="form-controls__actions_item" onClick={onClose} role="button" tabIndex="0">
          <Icon className="icon__close" icon="close" width={15} height={15} />
        </div>
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

