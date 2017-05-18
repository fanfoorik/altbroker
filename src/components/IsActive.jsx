import React from 'react';
import PropTypes from 'prop-types';

const IsActive = (props) => {
  const { component, active, ...rest } = props;

  if (component && active) {
    const Component = component;
    return <Component {...rest} />;
  }

  if (active) return rest.children;

  return false;
};

IsActive.propTypes = {
  active: PropTypes.bool.isRequired,
  component: PropTypes.func,
};

export default IsActive;
