import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';

function DetailPageFinance(props) {
  const {
    profitPerMonth,
    recoupmentPerMonth,
    turnoverPerMonth,
    expensePerMonth,
  } = props;

  return (
    <div className="detail-page-blank" data-anchor="finance">

      <div className="detail-page__title">Финансы</div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Чистая прибыль в месяц</div>
        <div className="detail-page-info__value">
          {
            profitPerMonth ? `${formatNumber(profitPerMonth)} ₽ / мес.` : '-'
          }
        </div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Окупаемость</div>
        <div className="detail-page-info__value">
          {
            recoupmentPerMonth ? `${formatNumber(recoupmentPerMonth)} мес.` : '-'
          }
        </div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Среднемесячные обороты</div>
        <div className="detail-page-info__value">
          {
            turnoverPerMonth ? `${formatNumber(turnoverPerMonth)} ₽ / мес.` : '-'
          }
        </div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Среднемесячные расходы</div>
        <div className="detail-page-info__value">
          {
            expensePerMonth ? `${formatNumber(expensePerMonth)} ₽ / мес.` : '-'
          }
        </div>
      </div>
    </div>
  );
}

DetailPageFinance.propTypes = {
  profitPerMonth: PropTypes.string.isRequired,
  recoupmentPerMonth: PropTypes.string.isRequired,
  turnoverPerMonth: PropTypes.string.isRequired,
  expensePerMonth: PropTypes.string.isRequired,
};

export default DetailPageFinance;
