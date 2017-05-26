import React from 'react';
import Icon from 'components/Icon';
import PropTypes from 'prop-types';

const ContactLink = (props) => {
  const { value, href, icon, label, target } = props;

  return (
    <a href={href} className="profile-contacts__link profile-contact clear" target={target && '_blank'} rel="noopener noreferrer">

      <span className="profile-contact__iconbar">
        <Icon icon={icon} width="19" height="19" className="profile-contact__icon" />
      </span>

      <span className="profile-contact__line">
        <span className="profile-contact__label">{label}</span>
        <span className="profile-contact__value">{value.match(/\/?(.[^/]*)\/?$/)[1]}</span>
      </span>

      {/*<div className="profile-contact__controls">*/}
      {/*Изменить*/}
      {/*</div>*/}

      {/*<div className="profile-contact__unchain">*/}
      {/*<Icon icon="close" width="19" height="19" className="profile-contact__unchain-icon" />*/}
      {/*</div>*/}
    </a>
  );
};

ContactLink.propTypes = {
  value: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  target: PropTypes.string.isRequired,
};

export default ContactLink;
