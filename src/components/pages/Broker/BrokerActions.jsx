import React from 'react';

export default function BrokerActions(props) {
  return (
    <div className="container">
      <div className="table-actions">
        <div className="table-actions__checkbox">
          <label className="checkbox"> Выделить всё
            <input type="checkbox" />
            <div className="checkbox_indicator" />
          </label>
        </div>

        <div className="table-actions__items">
          <span className="table-actions__title">С помечеными:</span>
          <ul className="table-actions__list">
            <li className="table-actions__item">передать</li>
            <li className="table-actions__item">создать подборку</li>
            <li className="table-actions__item">изменить статус</li>
            <li className="table-actions__item">наблюдать</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
