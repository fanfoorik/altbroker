import PropTypes from 'prop-types';
import React from 'react';

import Avatar from 'components/Avatar';

export default function CommentsList(props) {
  const { userpic, comments } = props;

  return (
    <div className="comments-list">
      {
        comments.length ?
          comments.map((item) => {
            const {
              DATE_CREATE: date,
              ID: id,
              NAME: name,
              PERSONAL_PHOTO_TEXT_86x86: avatar,
              PREVIEW_TEXT: userComment,
            } = item;

            return (
              <div key={`comment-${id}`} className="comments-list__item clear">
                {
                  userpic && avatar.length && <Avatar src={avatar} className="comments-list__avatar" />
                }
                <div className="comments-list__comment">
                  <div className="comments-list__nameset clear">
                    <span className="comments-list__name">{name}</span>
                    <span className="comments-list__date">{date}</span>
                  </div>
                  <div className="comments-list__text">{userComment}</div>
                </div>
              </div>
            );
          })
          :
          <div className="comments-cover">Нет комментариев.</div>
      }
    </div>
  );
}

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  userpic: PropTypes.bool,
};

CommentsList.defaultProps = {
  userpic: false,
};
