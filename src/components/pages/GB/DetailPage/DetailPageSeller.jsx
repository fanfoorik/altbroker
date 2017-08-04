import PropTypes from 'prop-types';
import React from 'react';

function DetailPageSeller(props) {
  const {
    sellerName,
    sellerPhone,
    sellerEmail,
  } = props;

  return (
    <div className="detail-page-blank" data-anchor="seller">
      <div className="detail-page__title">Продавец</div>
      <div className="detail-page-info">
        <div className="detail-page-info__key">ФИО</div>
        <div className="detail-page-info__value">{sellerName || '-'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Телефон</div>
        <div className="detail-page-info__value">
          {
            sellerPhone ? <a href={`tel:${sellerPhone}`} className="detail-page-info__link" rel="noopener noreferrer">{sellerPhone}</a> : '-'
          }
        </div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Почта</div>
        <div className="detail-page-info__value">
          {
            sellerEmail ? <a href={`mailto:${sellerEmail}`} className="detail-page-info__link" rel="noopener noreferrer">{sellerEmail}</a> : '-'
          }
        </div>
      </div>
    </div>
  );
}

DetailPageSeller.propTypes = {
  sellerName: PropTypes.string.isRequired,
  sellerPhone: PropTypes.string.isRequired,
  sellerEmail: PropTypes.string.isRequired,
};

export default DetailPageSeller;
