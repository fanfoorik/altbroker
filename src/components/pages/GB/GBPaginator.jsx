import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

import { formatNumber } from 'utils/formaters';
import { indexUrl } from 'utils/urls.js';

const itemsPerPage = [15, 25, 50];

export default function GBPaginator(props) {
  let NextLink;
  const { itemsCount, pagination, updateGBOptions } = props;
  const objectsCount = pagination.COUNT_OBJ || 0;
  let PrevLink;
  let currPageIndex = 0;

  /**
   * Updates url & updates page options.
   * @param {number} index - page index
   * @param {number } count - items per page
   * @param {string} url - url with query params
   */
  function fetchItems(index, count, url) {
    browserHistory.push(`${indexUrl}broker/gb/${url}`);
    updateGBOptions({ PAGE: index, COUNT: count });
  }

  /**
   * Generates links for fetching items by count.
   * @param {number} count - items per page
   * @param {string} url  - url with query params
   */
  function generateItemsPerPageLinks(count, url) {
    return itemsPerPage.map(item => (
      <li
        className={`paginator__list-item ${item === count ? 'active' : ''}`}
        key={`paginator__item-${Math.floor(Date.now() * Math.random())}`}
      >
        <span
          className="paginator__list-link"
          onClick={() => fetchItems(url, item, `?PAGE=${url}&COUNT=${item}`)}
          role="button"
          tabIndex="0"
        >{item}</span>;
      </li>
    ));
  }

  const {
    COUNT_SHOW: countPerPage,
    CUR_GAGE: currPage,
    NAV_HREF: navHrefs,
    NEXT_GAGE: nextPage,
    PREV_GAGE: prevPage,
  } = pagination;

  if (navHrefs) {
    currPageIndex = currPage.ID;
    NextLink = nextPage ?
    (
      <li className="paginator__list-item paginator__next">
        <span
          className="paginator__list-link"
          onClick={() => fetchItems(nextPage.ID, countPerPage, nextPage.URL)}
          role="button"
          tabIndex="0"
        >&gt;</span>
      </li>
    )
    :
      <li className="paginator__list-item paginator__next disabled">&gt;</li>;

    PrevLink = prevPage ?
      (
        <li className="paginator__list-item paginator__prev">
          <span
            className="paginator__list-link"
            onClick={() => fetchItems(prevPage.ID, countPerPage, prevPage.URL)}
            role="button"
            tabIndex="0"
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
              role="button"
              tabIndex="0"
            >{item.ID}</span>
          </li>
        ))}
        {NextLink}
      </ul>

      {currPageIndex ?
        (
          <div className="table-footer__items">
            {'Показаны с '}
            <span className="table-footer__items-count">
              { ((currPageIndex * itemsCount) - itemsCount) + 1 }
              {' по '}
              {currPageIndex * itemsCount}
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

GBPaginator.propTypes = {
  updateGBOptions: PropTypes.func.isRequired,
  itemsCount: PropTypes.number,
  pagination: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.object,
  ]),
};

GBPaginator.defaultProps = {
  itemsCount: 0,
  pagination: PropTypes.shape({
    COUNT_OBJ: 0,
  }),
};
