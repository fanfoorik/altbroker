import React from 'react';
import PropTypes from 'prop-types';

import Avatar from 'components/Avatar';
import { hostUrl } from 'utils/urls';
import AboutText from './components/AboutText';

const AboutStatic = (props) => {
  const { avatar, name, lastName, city, history } = props.user;

  return (
    <div className="profile-pane clear">

      <div className="profile-image">

        <Avatar src={avatar} className="profile-image__avatar" />

        <div className="profile-image__edit">{avatar ? 'Изменить' : 'Добавить'}</div>
      </div>

      <div className="profile-info">

        <div className="profile-info__name">{name} {lastName}</div>

        <div className="profile-details row">

          <div className="col-lg-4">
            <div className="profile-details__section">
              <div className="profile__label">Год рождения</div>
              <div className="profile-details__detail">04.03.1985</div>
            </div>
          </div>

          <div className="col-lg-8">
            <div className="profile-details__section">
              <div className="profile__label">Проживает в городе</div>
              <div className="profile-details__detail">{city}</div>
            </div>
          </div>

          <div className="col-lg-12">
            <div className="profile-details__section mb-0">
              <div className="profile__label">История успеха</div>
              <AboutText data={history} />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

AboutStatic.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AboutStatic;
