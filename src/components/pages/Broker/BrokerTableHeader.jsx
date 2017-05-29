import React from 'react';

import ColorsLegendPopover from 'components/popovers/ColorsLegendPopover';
import Icon from 'components/Icon';

export default function BrokerTableHeader(props) {
  return (
    <thead>
      <tr>
        <th className="table-col__checkbox">
          <label className="checkbox">
            <input type="checkbox" />
            <div className="checkbox_indicator" />
          </label>
        </th>
        <th className="popover-parent no-padding">
          <div className="table-dot" />
          <ColorsLegendPopover />
        </th>
        <th className="table-col__id">#</th>
        <th className="table-col__img no-padding" />
        <th className="table-col__name">Название</th>
        <th className="table-col__category">Категория</th>
        <th className="table-col__location no-padding">
          <Icon className="table-th__icon table-th__watched" icon="location" width={14} height={14} />
        </th>
        <th className="table-col__price align-right no-padding-left">Цена</th>
        <th className="table-col__profit align-right no-padding-left">Прибыль</th>
        <th className="table-col__broker no-padding-left">Брокер</th>
        <th className="table-col__dealer no-padding-left">Продавец</th>
        <th className="table-col__created no-padding-left">Создан</th>
        <th className="table-col__updated no-padding-left clickable">
          <Icon className="table-th__icon table-th__updated" icon="loading" width={14} height={14} />
        </th>
        <th className="table-col__watched clickable align-right no-padding-right">
          <Icon className="table-th__icon table-th__watched" icon="eye" width={14} height={14} />
        </th>
        <th className="table-col__like clickable align-right no-padding-right">
          <Icon className="table-th__icon table-th__like" icon="like" width={14} height={14} />
        </th>
        <th className="table-col__comments no-padding-right clickable">
          <Icon className="table-th__icon table-th__like" icon="message" width={14} height={14} />
        </th>
        <th className="table-col__actions clickable align-right">
          <span className="table-th__icon table-th__actions icon">i</span>
        </th>
      </tr>
    </thead>
  );
}
