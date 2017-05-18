import React from 'react';
import Icon from 'components/Icon';

const Contacts = (props) => {
  const { socials } = props.contacts;

  return (
    <div className="profile-pane clear">
      <div className="profile-pane__title">Контакты</div>

      <div className="profile-contacts">
        {
          socials.map((item) => {
            const { name, value, icon, link } = item;

            return value && (
              <div key={`social-${name}`} className="profile-contacts__list profile-contact clear">

                <div className="profile-contact__iconbar">
                  <Icon icon={icon} width="19" height="19" className="profile-contact__icon" />
                </div>

                <div className="profile-contact__line">
                  <div className="profile-contact__label">{link}</div>
                  <div className="profile-contact__value">{value.split('/').splice(-1)}</div>
                </div>

                <div className="profile-contact__controls">
                  Изменить
                </div>

                <div className="profile-contact__unchain">
                  <Icon icon="close" width="19" height="19" className="profile-contact__unchain-icon" />
                </div>

              </div>
            );
          })
        }
      </div>

    </div>
  );
};

export default Contacts;
