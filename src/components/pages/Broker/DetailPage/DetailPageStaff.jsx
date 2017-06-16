import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';
import htmlParser from 'html-react-parser';

function DetailPageStaff(props) {
  const {
    employeesAmount,
    wages,
    staffInfo,
  } = props;

  return (
    <div className="detail-page-blank" data-anchor="staff">
      <div className="detail-page__title">Штат</div>
      <div className="detail-page-info">
        <div className="detail-page-info__key">Количество работников</div>
        <div className="detail-page-info__value">{employeesAmount || '-'}</div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Фонд зп</div>
        <div className="detail-page-info__value">
          {
            wages ? `${formatNumber(wages)} ₽ / мес.` : '-'
          }
        </div>
      </div>

      <div className="detail-page-info">
        <div className="detail-page-info__key">Дополнительная информация</div>
        <div className="detail-page-info__value">
          {
            staffInfo ? htmlParser(staffInfo) : '-'
          }
        </div>
      </div>
    </div>
  );
}

DetailPageStaff.propTypes = {
  employeesAmount: PropTypes.string.isRequired,
  wages: PropTypes.string.isRequired,
  staffInfo: PropTypes.string.isRequired,
};

export default DetailPageStaff;
