import PropTypes from 'prop-types';
import React from 'react';

import htmlParser from 'html-react-parser';

function DetailPageMain(props) {
  const {
    id,
    city,
    category,
    sellReason,
    description,
  } = props;

  return (
    <div className="detail-page-main">
      <div className="detail-page-main__info">

        <div className="detail-page-info clear">
          <div className="detail-page-info__key">ID</div>
          <div className="detail-page-info__value">{id || '-'}</div>
        </div>

        <div className="detail-page-info clear">
          <div className="detail-page-info__key">Город</div>
          <div className="detail-page-info__value">{city || '-'}</div>
        </div>

        <div className="detail-page-info clear">
          <div className="detail-page-info__key">Категория</div>
          <div className="detail-page-info__value">{category || '-'}</div>
        </div>

        <div className="detail-page-info clear">
          <div className="detail-page-info__key">Преимущество</div>
          {/*TODO: вывести список преимущества*/}
          <div className="detail-page-info__value">Отличная документация</div>
        </div>

        <div className="detail-page-info clear">
          <div className="detail-page-info__key">Причина продажи</div>
          <div className="detail-page-info__value">{sellReason || '-'}</div>
        </div>

      </div>

      <div className="detail-page__label">Описание</div>
      <div className="detail-page-main__text">
        {
          description.length ?
          htmlParser(description) :
          'Описание отсутствует.'
        }
      </div>
      {/* TODO: Добавить тоггл текста */}
      {/* <span className="more-trigger">Показать полностью */}
      {/* <Icon icon="arrow-right" className="more-trigger__arrow" width={8} height={8} />*/}
      {/* </span>*/}
    </div>
  );
}

DetailPageMain.propTypes = {
  id: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  sellReason: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DetailPageMain;
