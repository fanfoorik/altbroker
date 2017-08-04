import PropTypes from 'prop-types';
import React from 'react';

import CommentsList from 'components/Comments/CommentsList';
import CommentsForm from 'components/Comments/CommentsForm';

import Tabs from 'components/HOC/Tabs';

function DetailPageComments(props) {
  const {
    id,
    staffComments,
    clientComments,
    updateComments,
  } = props;

  const url = `broker/gb/${id}/addcomments/`;

  return (
    <div className="detail-page-blank detail-page-comments" data-anchor="comments">
      <div className="detail-page__title">Комментарии</div>

      <div className="tabs">
        <div className="comments-menu menu-tpl">
          <span className="menu-tpl__link tabs__trigger tabs__tab-item active">
            <span className="menu-tpl__label">Брокеры</span>
          </span>
          <span className="menu-tpl__link tabs__trigger tabs__tab-item">
            <span className="menu-tpl__label">Клиенты</span>
          </span>
        </div>

        <div className="tabs__body">
          <div className="tabs__tab tabs__tab-item active">
            <CommentsList userpic comments={staffComments} />
            <CommentsForm url={url} updateComments={updateComments} />
          </div>

          <div className="tabs__tab tabs__tab-item">
            <CommentsList comments={clientComments} />
          </div>
        </div>
      </div>
    </div>
  );
}

DetailPageComments.propTypes = {
  id: PropTypes.string.isRequired,
  staffComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  clientComments: PropTypes.arrayOf(PropTypes.object).isRequired,
  updateComments: PropTypes.func.isRequired,
};

export default Tabs(DetailPageComments);
