import React from 'react';

import ColorsLegendPopover from 'components/popovers/ColorsLegendPopover';
import Icon from 'components/Icon';
import Icony from 'components/Icony';
import questionIcon from 'assets/icons/question-icon.svg';

function sortArrow(dir) {
  return <span className="sort-trigger__pointer">{dir[0] === 'DESC' ? '↓' : '↑'}</span>;
}

export default function BrokerTableHeader(props) {
  const { handleSort, sortCode, sortMethod } = props;

  return (
    <div className="table-row table-th-wrapper" id="listing-heading">
      <div className="table-th table-col__checkbox">
        <label className="checkbox" htmlFor="checkbox-select-all-header">
          <input type="checkbox" id="checkbox-select-all-header" />
          <div className="checkbox_indicator" />
        </label>
      </div>
      <div className="table-th table-col__color popover-parent no-padding">
        <div className="table-dot">
          <Icony icon={questionIcon} width="14" height="14" />
        </div>
        <ColorsLegendPopover />
      </div>
      <div className="table-th table-col__id">
        <span
          className="sort-trigger"
          onClick={handleSort}
          role="button"
          tabIndex="0"
          data-id="ID"
        >
          #
          {sortCode[0] === 'ID' && sortArrow(sortMethod)}
        </span>
      </div>
      <div className="table-th table-col__img no-padding" />
      <div className="table-th table-col__name">
        <span
          className="sort-trigger"
          onClick={handleSort}
          role="button"
          tabIndex="0"
          data-id="NAME"
        >
          Название
          {sortCode[0] === 'NAME' && sortArrow(sortMethod)}
        </span>
      </div>
      <div className="table-th table-col__category">Категория</div>
      <div className="table-th table-col__location no-padding">
        <Icon className="table-th__icon table-th__watched" icon="location" width={14} height={14} />
      </div>
      <div className="table-th table-col__price align-right no-padding-left">
        <span
          className="sort-trigger"
          onClick={handleSort}
          role="button"
          tabIndex="0"
          data-id="PROPERTY_PRICE_BUSINESS"
        >
          Цена
          {sortCode[0] === 'PROPERTY_PRICE_BUSINESS' && sortArrow(sortMethod)}
        </span>
      </div>
      <div className="table-th table-col__profit align-right no-padding-left">
        <span
          className="sort-trigger"
          onClick={handleSort}
          role="button"
          tabIndex="0"
          data-id="PROPERTY_CHIST_PRIB"
        >
          Прибыль
          {sortCode[0] === 'PROPERTY_CHIST_PRIB' && sortArrow(sortMethod)}
        </span>
      </div>
      <div className="table-th table-col__broker no-padding-left">Брокер</div>
      <div className="table-th table-col__dealer no-padding-left">Продавец</div>
      <div className="table-th table-col__created no-padding-left">
        <span
          className="sort-trigger"
          onClick={handleSort}
          role="button"
          tabIndex="0"
          data-id="CREATED_DATE"
        >
          Создан
          {sortCode[0] === 'CREATED_DATE' && sortArrow(sortMethod)}
        </span>
      </div>
      <div className="table-th table-col__updated no-padding-left">
        <Icon className="table-th__icon table-th__updated" icon="loading" width={16} height={16} />
      </div>
      <div className="table-th table-col__watched align-right no-padding-right">
        <Icon className="table-th__icon table-th__watched" icon="eye" width={16} height={16} />
      </div>
      <div className="table-th table-col__like align-right no-padding-right">
        <Icon className="table-th__icon table-th__like" icon="like" width={16} height={16} />
      </div>
      <div className="table-th table-col__comments no-padding-right">
        <Icon className="table-th__icon table-th__like" icon="message" width={16} height={16} />
      </div>
      <div className="table-th table-col__actions align-right">
        {/*<Icon className="table-th__icon table-th__like" icon="info" width={16} height={16} />*/}
      </div>
    </div>
  );
}
