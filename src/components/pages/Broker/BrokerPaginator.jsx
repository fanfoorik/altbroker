import PropTypes from 'prop-types';
import React from 'react';

import { formatNumber } from 'utils/formaters';

export default function BrokerPaginator(props) {
  const itemsCount = props.itemsCount;
  const listingNav = props.listingNav || {};
  const objectsCount = listingNav.COUNT_OBJ || 0;

  const {
    CUR_GAGE: currentPage,
    NAV_HREF: navHrefs,
  } = listingNav;

  const prevPageIndex = navHrefs && navHrefs.indexOf(currentPage);
  const nextPageIndex = prevPageIndex + 2;
  const PrevLink = prevPageIndex > 0 ?
    (
      <li
        className="paginator__list-item paginator__prev"
        onClick={() => props.fetchListing(prevPageIndex)}
      >&lt;</li>
    ) :
    (
      <li className="paginator__list-item paginator__prev disabled">&lt;</li>
    )
  ;

  return (
    <div className="table-footer">
      <div className="table-footer__items">
        Всего <span className="table-footer__items-count">{formatNumber(objectsCount)}</span> объектов
      </div>

      <ul className="paginator__list">
        {PrevLink}
        {navHrefs && navHrefs.map((item, index) => (
          <li
            className={`paginator__list-item ${currentPage === item ? 'active' : ''}`}
            key={`paginator-link-${Math.floor(Date.now() * Math.random())}`}
            onClick={() => props.fetchListing(index + 1)}
          >{index + 1}</li>
        ))}
        <li
          className="paginator__list-item paginator__next"
          onClick={() => props.fetchListing(nextPageIndex)}
        >&gt;</li>
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
  );
}

BrokerPaginator.propTypes = {
  fetchListing: PropTypes.func.isRequired,
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
