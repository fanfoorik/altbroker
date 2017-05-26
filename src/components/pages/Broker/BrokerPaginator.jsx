import React from 'react';

export default function BrokerPaginator(props) {
  return (
    <div className="container">
      <div className="table-footer">
        <div className="table-footer__items">
          Всего <span className="table-footer__items-count">67</span> объектов
        </div>

        <ul className="paginator__list">
          <li className="paginator__list-item paginator__prev">&lt;</li>
          <li className="paginator__list-item">2</li>
          <li className="paginator__list-item">3</li>
          <li className="paginator__list-item active">4</li>
          <li className="paginator__list-item">5</li>
          <li className="paginator__list-item">6</li>
          <li className="paginator__list-item paginator__next">&gt;</li>
        </ul>

        <div className="table-footer__items">
          Показаны с <span className="table-footer__items-count">1 по 15</span>
        </div>

        <div className="paginator__count">
          <span className="paginator__count-text">Показывать по:</span>
          <ul className="paginator__list">
            <li className="paginator__list-item active">15</li>
            <li className="paginator__list-item">25</li>
            <li className="paginator__list-item">50</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
