import React from 'react';

import Icon from 'components/Icon';

export default function BrokerTableHeader(props) {
  return (
    <thead>
      <tr>
        <th className="table-col__checkbox no-padding">
          <label className="checkbox">
            <input type="checkbox" />
            <div className="checkbox_indicator" />
          </label>
        </th>
        <th><div className="table-dot" /></th>
        <th className="table-col__id">#</th>
        <th className="table-col__img" />
        <th className="table-col__name">Название</th>
        <th className="table-col__category">Категория</th>
        <th className="table-col__location"><span className="table-location" /></th>
        <th className="table-col__price align-right">Цена</th>
        <th className="table-col__profit align-right">Прибыль</th>
        <th className="table-col__broker">Брокер</th>
        <th className="table-col__dealer">Продавец</th>
        <th className="table-col__created">Создан</th>
        <th className="table-col__updated clickable">
          <Icon className="table-th__icon table-th__updated" icon="loading" width="12" height="12" />
        </th>
        <th className="table-col__watched clickable align-right">
          <Icon className="table-th__icon table-th__watched" icon="loading" width="12" height="12" />
        </th>
        <th className="table-col__like clickable align-right">
          <Icon className="table-th__icon table-th__like" icon="loading" width="12" height="12" />
        </th>
        <th className="table-col__comments clickable">
          <Icon className="table-th__icon table-th__like" icon="loading" width="12" height="12" />
        </th>
        <th className="table-col__actions clickable align-right">
          <span className="table-th__icon table-th__actions icon">i</span>
        </th>
      </tr>
    </thead>
  );
}
