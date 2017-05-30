import PropTypes from 'prop-types';
import React from 'react';

export default function BrokerPaginator(props) {
  const itemsCount = props.itemsCount;
  const listingNav = props.listingNav || {};
  const objectsCount = listingNav.COUNT_OBJ;

  const {
    CUR_GAGE: currentPage,
    NAV_HREF: navHrefs,
    NEXT_GAGE: nextPage,
    PREV_GAGE: prevPage,
  } = listingNav;

  return (
    <div className="container">
      <div className="table-footer">
        <div className="table-footer__items">
          Всего <span className="table-footer__items-count">{objectsCount}</span> объектов
        </div>

        <ul className="paginator__list">
          <li className="paginator__list-item paginator__prev">
            <a className="paginator__list-link" href={prevPage}>&lt;</a>
          </li>
          {navHrefs && navHrefs.map((item, index) => (
            <li
              className={`paginator__list-item ${currentPage === item ? 'active' : ''}`}
              key={`paginator-link-${Math.floor(Date.now() * Math.random())}`}
            >
              <a className="paginator__list-link" href={item}>{index + 1}</a>
            </li>
          ))}
          <li className="paginator__list-item paginator__next">
            <a className="paginator__list-link" href={nextPage}>&gt;</a>
          </li>
        </ul>

        <div className="table-footer__items">
          Показаны с <span className="table-footer__items-count">1 по {itemsCount}</span>
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

BrokerPaginator.propTypes = {
  itemsCount: PropTypes.number,
  listingNav: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
};

BrokerPaginator.defaultProps = {
  itemsCount: 0,
  listingNav: PropTypes.shape({
    COUNT_OBJ: 0,
  }),
};
