import PropTypes from 'prop-types';
import React from 'react';

function DetailPageActives(props) {
  const {
    legalForm,
    activesPart,
    businessAge,
  } = props;

  return (
    <div className="detail-page-blank" data-anchor="actives">
      <div className="detail-page__title">Активы</div>
      <div className="detail-page-info">
        <div className="detail-page-info__key">Правовая форма</div>
        <div className="detail-page-info__value">{legalForm || '-'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Доля</div>
        <div className="detail-page-info__value">{activesPart ? `${activesPart}%` : '-'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Возраст бизнеса</div>
        <div className="detail-page-info__value">{businessAge || '-'}</div>
      </div>
    </div>
  );
}

DetailPageActives.propTypes = {
  legalForm: PropTypes.string.isRequired,
  activesPart: PropTypes.string.isRequired,
  businessAge: PropTypes.string.isRequired,
};

export default DetailPageActives;
