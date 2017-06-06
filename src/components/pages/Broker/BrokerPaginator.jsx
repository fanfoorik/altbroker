import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

import { formatNumber } from 'utils/formaters';
import { indexUrl } from 'utils/urls.js';

const itemsPerPage = [15, 25, 50];

export default function BrokerPaginator(props) {
  let NextLink;
  const { itemsCount, listingNav } = props;
  const objectsCount = listingNav.COUNT_OBJ || 0;
  let PrevLink;
  let currPageIndex = 0;

  /**
   * Updates url & fetches new items.
   * @param index - number - page index
   * @param count - number - items per page
   * @param url - string - url with query params
   */
  function fetchItems(index, count, url) {
    browserHistory.push(`${indexUrl}broker/gb/${url}`);
    props.fetchListing(index, count);
  }

  /**
   * Generates links for fetching items by count.
   * @param count - number - items per page
   * @param url - string - url with query params
   */
  function generateItemsPerPageLinks(count, url) {
    return itemsPerPage.map((item) => {
      return (
        <li
          className={`paginator__list-item ${item === count ? 'active' : ''}`}
          key={`paginator__item-${Math.floor(Date.now() * Math.random())}`}
        >
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(url, item, `?PAGE=${url}&COUNT=${item}`)}
          >{item}</span>;
        </li>
      );
    });
  }

  const {
    COUNT_SHOW: countPerPage,
    CUR_GAGE: currPage,
    NAV_HREF: navHrefs,
    NEXT_GAGE: nextPage,
    PREV_GAGE: prevPage,
  } = listingNav;

  if (navHrefs) {
    currPageIndex = currPage.ID;
    NextLink = nextPage ?
      (
        <li className="paginator__list-item paginator__next">
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(nextPage.ID, countPerPage, nextPage.URL)}
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
            onClick={() => fetchItems(prevPage.ID, countPerPage, prevPage.URL)}
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
            className={`paginator__list-item ${currPageIndex === item.ID ? 'active' : ''}`}
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

      {currPageIndex ?
        (
          <div className="table-footer__items">
            Показаны с <span className="table-footer__items-count">
              {(currPageIndex * itemsCount) + 1} по {(currPageIndex * itemsCount) + itemsCount}
            </span>
          </div>
        ) :
          ''
      }

      <div className="paginator__count">
        <span className="paginator__count-text">Показывать по:</span>
        <ul className="paginator__list">
          {navHrefs && generateItemsPerPageLinks(countPerPage, currPageIndex)}
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
