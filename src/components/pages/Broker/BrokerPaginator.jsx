import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router'

import { formatNumber } from 'utils/formaters';
import { indexUrl } from 'utils/urls.js';

const itemsPerPage = [15, 25, 50];

export default function BrokerPaginator(props) {
  let countPerPage = 0;
  let currPageIndexObj = {};
  let currPageIndex = 0;
  const itemsCount = props.itemsCount;
  const listingNav = props.listingNav;
  let NextLink;
  const objectsCount = listingNav.COUNT_OBJ || 0;
  let PrevLink;

  function fetchItems(index, count, url) {
    console.log(index, count, url);
    browserHistory.push(`${indexUrl}broker/gb/${url}`);
    props.fetchListing(index, count);
  }

  function generateItemsPerPageLinks(href, count) {
    return itemsPerPage.map((item) => {
      return (
        <li
          className={`paginator__list-item ${item === count ? 'active' : ''}`}
          key={`paginator__item-${Math.floor(Date.now() * Math.random())}`}
        >
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(href, item, `?PAGE=${href}&COUNT=${item}`)}
          >{item}</span>;
        </li>
      );
    });
  }

  const {
    CUR_GAGE: currPage,
    NAV_HREF: navHrefs,
    NEXT_GAGE: nextPage,
    PREV_GAGE: prevPage,
  } = listingNav;

  if (navHrefs) {
    countPerPage = nextPage.split('=');
    countPerPage = parseInt(countPerPage[countPerPage.length - 1], 10);
    currPageIndexObj = navHrefs.filter(item => item.URL === currPage)[0];
    currPageIndex = navHrefs.indexOf(currPageIndexObj);
    const prevPageIndex = (currPageIndex === 0) ? 1 : currPageIndex;
    const prevPageUrl = navHrefs[prevPageIndex - 1].URL;
    const nextPageIndex = (currPageIndex === 4) ? 3 : currPageIndex;
    const nextPageUrl = navHrefs[nextPageIndex + 1].URL;

    NextLink = nextPage ?
      (
        <li className="paginator__list-item paginator__next">
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(nextPageIndex, countPerPage, nextPageUrl)}
          >&gt;</span>
        </li>
      ) :
        <li className="paginator__list-item paginator__next disabled">&gt;</li>
    ;

    PrevLink = prevPage ?
      (
        <li className="paginator__list-item paginator__prev">
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(prevPageIndex, countPerPage, prevPageUrl)}
          >&lt;</span>
        </li>
      ) :
        <li className="paginator__list-item paginator__prev disabled">&lt;</li>
    ;
  } else {
    NextLink = <li className="paginator__list-item paginator__next disabled">&gt;</li>;
    PrevLink = <li className="paginator__list-item paginator__prev disabled">&lt;</li>;
  }

  return (
    <div className="table-footer">
      <div className="table-footer__items">
        Всего <span className="table-footer__items-count">{formatNumber(objectsCount)}</span> объектов
      </div>

      <ul className="paginator__list">
        {PrevLink}
        {navHrefs && navHrefs.map(item => (
          <li
            className={`paginator__list-item ${currPage === item.URL ? 'active' : ''}`}
            key={`paginator-link-${Math.floor(Date.now() * Math.random())}`}
          >
            <span
              className="paginator__list-link"
              onClick={() => fetchItems(item.ID, countPerPage, item.URL)}
            >{item.ID}</span>
          </li>
        ))}
        {NextLink}
      </ul>

      <div className="table-footer__items">
        Показаны с <span className="table-footer__items-count">
          {(currPageIndex * itemsCount) + 1} по {(currPageIndex * itemsCount) + itemsCount}
        </span>
      </div>

      <div className="paginator__count">
        <span className="paginator__count-text">Показывать по:</span>
        <ul className="paginator__list">
          {navHrefs && generateItemsPerPageLinks(navHrefs[currPageIndex].ID, countPerPage)}
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
