import React from 'react';
import PropTypes from 'prop-types';

function IsActive(props) {
  const { component, active, ...rest } = props;

  if (component && active) {
    const Component = component;
    return <Component {...rest} />;
  }

  if (active) return rest.children;

  return false;
}

IsActive.propTypes = {
  active: PropTypes.bool,
  component: PropTypes.func,
};

IsActive.defaultProps = {
  active: false,
};

export default IsActive;
