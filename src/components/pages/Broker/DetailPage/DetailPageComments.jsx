import PropTypes from 'prop-types';
import React from 'react';

import ajax from 'utils/ajax';

import Avatar from 'components/Avatar';
import Icon from 'components/Icon';
import Tabs from 'components/HOC/Tabs';

class DetailPageComments extends React.Component {
  constructor() {
    super();
    this.state = {
      comment: '',
    };
  }

  typeComment = (event) => {
    this.setState({ comment: event.target.value });
  };

  addComment = (event) => {
    event.preventDefault();
    const comment = this.state.comment;

    if (comment.length) {
      this.setState({ comment: '' });
      ajax.post(`broker/gb/${this.props.id}/addcomments/`,
        { TEXT: comment },
      )
        .then((data) => {
          this.props.updateComments(data);
        });
    }
  };

  render() {
    const {
      staffComment,
      clientComment,
    } = this.props;

    const { comment } = this.state;

    return (
      <div className="detail-page-blank detail-page-comments" data-anchor="comments">
        <div className="detail-page__title">Комментарии</div>

        <div className="tabs">
          <div className="detail-page-comments__menu menu-tpl">
            <span className="menu-tpl__link tabs__trigger tabs__tab-item active">
              <span className="menu-tpl__label">Брокеры</span>
            </span>
            <span className="menu-tpl__link tabs__trigger tabs__tab-item">
              <span className="menu-tpl__label">Клиенты</span>
            </span>
          </div>

          <div className="tabs__body">
            <div className="tabs__tab tabs__tab-item active">
              <div className="detail-page-comments__list">
                {
                  staffComment.length ?
                  staffComment.map((item) => {
                    const {
                      DATE_CREATE: date,
                      ID: id,
                      NAME: name,
                      PERSONAL_PHOTO_TEXT_86x86: avatar,
                      PREVIEW_TEXT: userComment,
                    } = item;

                    return (
                      <div key={`detail-page-staff-comment-${id}`} className="detail-page-comments__item clear">
                        <Avatar src={avatar} className="detail-page-comments__avatar" />
                        <div className="detail-page-comments__comment">
                          <div className="detail-page-comments__name">
                            {name} <span className="detail-page-comments__date">{date}</span>
                          </div>
                          <div className="detail-page-comments__text">{userComment}</div>
                        </div>
                      </div>
                    );
                  })
                  :
                  <div className="detail-page-comments__cover">Нет комментариев.</div>
                }
              </div>
            </div>

            <div className="tabs__tab tabs__tab-item">
              <div className="detail-page-comments__list">
                {
                  clientComment.length ?
                  clientComment.map((item) => {
                    const {
                      DATE_CREATE: date,
                      ID: id,
                      NAME: name,
                      PERSONAL_PHOTO_TEXT_86x86: avatar,
                      PREVIEW_TEXT: userComment,
                    } = item;

                    return (
                      <div key={`detail-page-staff-comment-${id}`} className="detail-page-comments__item clear">
                        <Avatar src={avatar} className="detail-page-comments__avatar" />
                        <div className="detail-page-comments__comment">
                          <div className="detail-page-comments__name">
                            {name} <span className="detail-page-comments__date">{date}</span>
                          </div>
                          <div className="detail-page-comments__text">{userComment}</div>
                        </div>
                      </div>
                    );
                  })
                  :
                  <div className="detail-page-comments__cover">Нет комментариев.</div>
                }
              </div>
            </div>
          </div>
        </div>

        <div className="detail-page-add-comment">
          <form onSubmit={this.addComment}>
            <input
              className="detail-page-add-comment__input input"
              onChange={this.typeComment}
              placeholder="Ваш комментарий…"
              type="text"
              value={comment}
            />
            <button type="submit" className="detail-page-add-comment__submit">
              <Icon
                icon="send-message"
                className="detail-page-add-comment__icon"
                width={16}
                height={16}
              />
            </button>
          </form>
        </div>
      </div>
    );
  }
}

DetailPageComments.propTypes = {
  id: PropTypes.string.isRequired,
  staffComment: PropTypes.arrayOf(PropTypes.object).isRequired,
  clientComment: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateComments: PropTypes.func.isRequired,
};

export default Tabs(DetailPageComments);
