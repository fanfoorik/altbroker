import React from 'react';
import PropTypes from 'prop-types';
import { indexUrl } from 'utils/urls.js';

import Avatar from 'components/Avatar';
import IsActive from 'utils/IsActive';
import Icon from 'components/Icon';
import { Link } from 'react-router';

class UserThumbsList extends React.Component {
  constructor() {
    super();
    this.state = {
      trigger: false,
    };
  }

  componentWillReceiveProps() {
    if (this.state.trigger) {
      this.setState({ trigger: false });
    }
  }

  triggerThumbs = () => {
    this.setState({ trigger: !this.state.trigger });
  };

  render() {
    const { data } = this.props;

    const thumbs = (!this.state.trigger && data.length > 8) ? data.slice(0, 8) : data;

    return (
      <div className="user-thumbs">

        <div className="profile__label user-thumbs__label">{this.props.title}</div>

        <div className="user-thumbs__list">
          {
            thumbs.map((item) => {
              const {
                ID: id,
                NAME: name,
                PERSONAL_PHOTO_TEXT_86x86: avatar,
                LAST_NAME: lastName,
                WORK_PHONE: workPhone,
                EMAIL: email,
                UF_FACEBOOK: facebook,
                UF_INSTAGRAMM: instagram,
                UF_SKYPE: skype,
                UF_TWITTER: twitter,
                UF_VK: vk,
              } = item;

              return (
                <div key={`user-thumb-${id}`} className="user-thumbs__thumb user-thumb">
                  <Link to={`${indexUrl}user/${id}/`}>
                    <Avatar src={avatar} className="user-thumb__avatar" sizes={36} />
                  </Link>

                  <div className="thumb-tooltip user-thumb__tooltip">
                    <div className="thumb-tooltip__paragraph">{`${name} ${lastName}`}</div>
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
              );
            })
          }
        </div>

        <IsActive active={data.length > 8}>
          <span
            className="user-thumbs__trigger"
            onClick={this.triggerThumbs}
            role="button"
            tabIndex="0"
          >
            {this.state.trigger ? 'Свернуть' : 'Показать всех'}
          </span>
        </IsActive>

      </div>
    );
  }
}

UserThumbsList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
};

export default UserThumbsList;
