import React from 'react';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';
import ContactLink from './ContactLink';

const Contacts = (props) => {
  const {
    workPhone,
    email,
    facebook,
    vk,
    instagram,
    twitter,
    skype,
  } = props.contacts.socials;

  return (
    <div className="profile-pane clear" data-anchor="contact">
      <div className="profile-pane__title">Контакты</div>

      <div className="profile-contacts">

        <IsActive
          active={!!workPhone}
          component={ContactLink}
          value={workPhone}
          href={`tel:${workPhone}`}
          icon="phone"
          label=""
          target=""
        />

        <IsActive
          active={!!email}
          component={ContactLink}
          value={email}
          href={`mailto:${email}`}
          icon="envelope"
          label=""
          target=""
        />

        <IsActive
          active={!!facebook}
          component={ContactLink}
          value={facebook}
          href={facebook}
          icon="facebook"
          label="facebook.com/"
          target="_blank"
        />

        <IsActive
          active={!!vk}
          component={ContactLink}
          value={vk}
          href={vk}
          icon="vk"
          label="vk.com/"
          target="_blank"
        />

        <IsActive
          active={!!instagram}
          component={ContactLink}
          value={instagram}
          href={instagram}
          icon="instagram"
          label="instagram.com/"
          target="_blank"
        />

        <IsActive
          active={!!twitter}
          component={ContactLink}
          value={twitter}
          href={twitter}
          icon="twitter"
          label="twitter.com/"
          target="_blank"
        />

        <IsActive
          active={!!skype}
          component={ContactLink}
          value={skype}
          href={`skype:${skype}?chat`}
          icon="skype"
          label=""
        />

      </div>

    </div>
  );
};

export default Contacts;
