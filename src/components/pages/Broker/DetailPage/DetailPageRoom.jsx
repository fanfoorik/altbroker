import PropTypes from 'prop-types';
import React from 'react';

import htmlParser from 'html-react-parser';

function DetailPageRoom(props) {
  const {
    own,
    landlord,
    roomInfo,
  } = props;

  return (
    <div className="detail-page-blank" data-anchor="room">
      <div className="detail-page__title">Помещение</div>
      <div className="detail-page-info">
        <div className="detail-page-info__key">В собственность</div>
        <div className="detail-page-info__value">{own === 'N' ? 'Да' : 'Нет'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Информация об арендодателе</div>
        <div className="detail-page-info__value">{landlord || '-'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Дополнительная информация</div>
        <div className="detail-page-info__value">
          {roomInfo ? htmlParser(roomInfo) : '-'}
        </div>
      </div>
    </div>
  );
}

DetailPageRoom.propTypes = {
  own: PropTypes.string.isRequired,
  landlord: PropTypes.string.isRequired,
  roomInfo: PropTypes.string.isRequired,
};

export default DetailPageRoom;
