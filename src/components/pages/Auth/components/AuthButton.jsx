import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

export default function AuthButton(props) {
  const { children, loading, ...rest } = props;

  if (loading) {
    return (
      <button disabled {...rest}>
        <Icon className="icon-loading" fill="#fff" icon="loading" width="20" height="48" />
      </button>
    );
  }

  return <button {...rest}>{children}</button>;
}

AuthButton.propTypes = {
  loading: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

AuthButton.defaultProps = {
  loading: false,
};
