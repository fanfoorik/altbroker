import React from 'react';
import PropTypes from 'prop-types';
import { hostUrl, indexUrl } from 'utils/urls.js';
import { Link } from 'react-router';
import IsActive from 'utils/IsActive';
import Avatar from 'components/Avatar';
import Icon from 'components/Icon';

const HeadThumbsList = (props) => {
  const { data } = props;

  return (
    <div className="user-heads">

      <div className="profile__label user-heads__label">{props.title}</div>

      {
        data.map((item) => {
          const {
            ID: id,
            NAME: name,
            PERSONAL_PHOTO_TEXT_86x86: avatar,
            LAST_NAME: lastName,
            WORK_PHONE: workPhone,
            EMAIL: email,
            WORK_POSITION: workPosition,
            UF_CITY_TEXT: city,
            UF_FACEBOOK: facebook,
            UF_INSTAGRAMM: instagram,
            UF_SKYPE: skype,
            UF_TWITTER: twitter,
            UF_VK: vk,
          } = item;

          return (
            <div className="user-heads__list user-head clear" key={`user-thumb-${id}`}>

              <div key={`user-thumb-${id}`} className="user-head__thumb user-thumb">
                <Link to={`${indexUrl}user/${id}/`}>
                  <Avatar src={avatar} className="user-thumb__avatar" sizes={36} />
                </Link>

                <div className="thumb-tooltip user-thumb__tooltip">
                  <div className="thumb-tooltip__paragraph">{workPhone}</div>
                  <div className="thumb-tooltip__paragraph">{email}</div>
                  <div className="thumb-social">
                    <IsActive active={!!facebook}>
                      <a href={facebook} className="thumb-social__link" target="_blank" rel="noopener noreferrer">
                        <Icon icon="facebook" width="20" height="20" className="thumb-social__icon" />
                      </a>
                    </IsActive>
                    <IsActive active={!!instagram}>
                      <a href={instagram} className="thumb-social__link" target="_blank" rel="noopener noreferrer">
                        <Icon icon="instagram" width="20" height="20" className="thumb-social__icon" />
                      </a>
                    </IsActive>
                    <IsActive active={!!skype}>
                      <a href={`skype:${skype}?chat`} className="thumb-social__link">
                        <Icon icon="skype" width="20" height="20" className="thumb-social__icon" />
                      </a>
                    </IsActive>
                    <IsActive active={!!twitter}>
                      <a href={twitter} className="thumb-social__link" target="_blank" rel="noopener noreferrer">
                        <Icon icon="twitter" width="20" height="20" className="thumb-social__icon" />
                      </a>
                    </IsActive>
                    <IsActive active={!!vk}>
                      <a href={vk} className="thumb-social__link" target="_blank" rel="noopener noreferrer">
                        <Icon icon="vk" width="20" height="20" className="thumb-social__icon" />
                      </a>
                    </IsActive>
                  </div>
                </div>
              </div>

              <div className="user-head__info">
                <div className="user-head__name">{`${name} ${lastName}`}</div>
                <div className="user-head__position">{`${workPosition} (${city})`}</div>
              </div>

            </div>
          );
        })
      }
    </div>
  );
};

HeadThumbsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default HeadThumbsList;
