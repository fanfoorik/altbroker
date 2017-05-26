import React from 'react';

import Icon from 'components/Icon';

export default function BrokerTable(props) {
  return (
    <table className="container">
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

      <tbody>
        <tr>
          <td className="table-col__checkbox no-padding">
            <label className="checkbox">
              <input type="checkbox" />
              <div className="checkbox_indicator" />
            </label>
          </td>
          <td className="table-cell__color"><span className="table-color" /></td>
          <td><span className="table-cell__id">129478</span></td>
          <td><img className="table-cell__img" src="https://unsplash.it/40?image=0" alt="" /></td>
          <td><span className="table-cell__name">Частный детский сад в Московском районе</span></td>
          <td><span className="table-cell__category">Наркологические клиники</span></td>
          <td><span className="table-cell__location">СБП</span></td>
          <td className="align-right"><span className="table-cell__price">1 000 000 000</span></td>
          <td className="align-right"><span className="table-cell__profit">7 500 000</span></td>
          <td><span className="table-cell__broker">Дубровин Н.</span></td>
          <td><span className="table-cell__dealer">Сидачев К.</span></td>
          <td><span className="table-cell__created">сегодня</span></td>
          <td><span className="table-cell__last-update">1 день</span></td>
          <td className="align-right"><span className="table-cell__viewed">289</span></td>
          <td className="align-right"><span className="table-cell__likes">87%</span></td>
          <td className="align-center clickable">
            <span className="table-cell__comments">1</span>
          </td>
          <td>
            <div className="table-cell__actions">
              <span className="table-cell__list table-cell__dots" />
              <span className="table-cell__dots" />
            </div>
          </td>
        </tr>
        <tr>
          <td className="table-col__checkbox no-padding">
            <label className="checkbox">
              <input type="checkbox" />
              <div className="checkbox_indicator" />
            </label>
          </td>
          <td className="table-cell__color"><span className="table-color" /></td>
          <td><span className="table-cell__id">129478</span></td>
          <td><img className="table-cell__img" src="https://unsplash.it/40?image=1" alt="" /></td>
          <td><span className="table-cell__name">Раскрученная клининговая компания с корпаративами</span></td>
          <td><span className="table-cell__category">Рекламные агенства</span></td>
          <td><span className="table-cell__location">МСК</span></td>
          <td className="align-right"><span className="table-cell__price">850 000 000</span></td>
          <td className="align-right"><span className="table-cell__profit">240 000</span></td>
          <td><span className="table-cell__broker">Попов Н.</span></td>
          <td><span className="table-cell__dealer">Златов К.</span></td>
          <td><span className="table-cell__created">вчера</span></td>
          <td><span className="table-cell__last-update">12 дней</span></td>
          <td className="align-right"><span className="table-cell__viewed">1145</span></td>
          <td className="align-right"><span className="table-cell__likes">100%</span></td>
          <td className="align-center clickable">
            <span className="table-cell__comments">100</span>
          </td>
          <td>
            <div className="table-cell__actions">
              <span className="table-cell__list table-cell__dots" />
              <span className="table-cell__dots" />
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
