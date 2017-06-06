import React from 'react';

import ColorsLegendPopover from 'components/popovers/ColorsLegendPopover';
import Icon from 'components/Icon';

export default function BrokerTableHeader() {
  return (
    <div className="table-row table-th-wrapper" id="listing-heading">
      <div className="table-th table-col__checkbox">
        <label className="checkbox" htmlFor="checkbox-select-all-header">
          <input type="checkbox" id="checkbox-select-all-header" />
          <div className="checkbox_indicator" />
        </label>
      </div>
      <div className="table-th table-col__color popover-parent no-padding">
        <div className="table-dot" />
        <ColorsLegendPopover />
      </div>
      <div className="table-th table-col__id">#</div>
      <div className="table-th table-col__img no-padding" />
      <div className="table-th table-col__name">Название</div>
      <div className="table-th table-col__category">Категория</div>
      <div className="table-th table-col__location no-padding">
        <Icon className="table-th__icon table-th__watched" icon="location" width={14} height={14} />
      </div>
      <div className="table-th table-col__price align-right no-padding-left">Цена</div>
      <div className="table-th table-col__profit align-right no-padding-left">Прибыль</div>
      <div className="table-th table-col__broker no-padding-left">Брокер</div>
      <div className="table-th table-col__dealer no-padding-left">Продавец</div>
      <div className="table-th table-col__created no-padding-left">Создан</div>
      <div className="table-th table-col__updated no-padding-left">
        <Icon className="table-th__icon table-th__updated" icon="loading" width={14} height={14} />
      </div>
      <div className="table-th table-col__watched align-right no-padding-right">
        <Icon className="table-th__icon table-th__watched" icon="eye" width={14} height={14} />
      </div>
      <div className="table-th table-col__like align-right no-padding-right">
        <Icon className="table-th__icon table-th__like" icon="like" width={14} height={14} />
      </div>
      <div className="table-th table-col__comments no-padding-right">
        <Icon className="table-th__icon table-th__like" icon="message" width={14} height={14} />
      </div>
      <div className="table-th table-col__actions align-right">
        <span className="table-th__icon table-th__actions icon">i</span>
      </div>
    </div>
  );
}
