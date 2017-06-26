import PropTypes from 'prop-types';
import React from 'react';

function DetailPageHeader(props) {
  const {
    name,
    timestamp,
    statusColor,
    statusText,
  } = props;

  return (
    <div className="detail-page-header">

      <div className="detail-page-header__title">{name}</div>

      <div className="detail-page-status">
        <span className={`detail-page-status__label detail-page-status__label_${statusColor}`}>
          {statusText || 'Размещен'}
        </span>
        <span className="detail-page-status__last-update">Последнее изменение: {timestamp}</span>
      </div>

      <div className="detail-page__menu menu-tpl">
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="main">
          <span className="menu-tpl__label">Основное</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="finance">
          <span className="menu-tpl__label">Финансы</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="staff">
          <span className="menu-tpl__label">Штат</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="room">
          <span className="menu-tpl__label">Помещение</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="actives">
          <span className="menu-tpl__label">Активы</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="seller">
          <span className="menu-tpl__label">Продавец</span>
        </span>
        <span className="menu-tpl__link js-detail-menu-link" data-anchor="comments">
          <span className="menu-tpl__label">Комментарии</span>
        </span>
      </div>

    </div>
  );
}

DetailPageHeader.propTypes = {
  name: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  statusColor: PropTypes.string.isRequired,
  statusText: PropTypes.string.isRequired,
};

export default DetailPageHeader;
