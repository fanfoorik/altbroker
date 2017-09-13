import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

import { formatNumber } from 'utils/formaters';
import { indexUrl } from 'utils/urls.js';

const itemsPerPage = [15, 25, 50];

export default function GBPaginator(props) {
  const { itemsCount, pagination, updateGBOptions } = props;

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
      <div
        className={`paginator__list-item ${item === count ? 'active' : ''}`}
        key={`paginator__item-${Math.floor(Date.now() * Math.random())}`}
      >
        <span
          className="paginator__list-link"
          onClick={() => fetchItems(url, item, `?PAGE=${url}&COUNT=${item}`)}
          role="button"
          tabIndex="0"
        >{item}</span>;
      </div>
    ));
  }

  const {
    COUNT_SHOW: countPerPage,
    CUR_GAGE: currPage,
    NAV_HREF: navHrefs,
    NEXT_GAGE: nextPage,
    PREV_GAGE: prevPage,
    COUNT_OBJ: objectsCount = 0,
  } = pagination;

  const currPageIndex = (currPage && currPage.ID) || 0;

  const nextLink = (
    <div
      className={`paginator__list-item paginator__next ${!nextPage ? 'disabled' : ''}`}
      onClick={() => (nextPage ? fetchItems(nextPage.ID, countPerPage, nextPage.URL) : false)}
      role="button"
      tabIndex="0"
    >&gt;</div>
  );

  const prevLink = (
    <div
      className={`paginator__list-item paginator__prev ${!prevPage ? 'disabled' : ''}`}
      onClick={() => (prevPage ? fetchItems(prevPage.ID, countPerPage, prevPage.URL) : false)}
      role="button"
      tabIndex="0"
    >&lt;</div>
  );

  return (
    <div className="table-footer">
      <div className="table-footer__items">
        Всего <span className="table-footer__items-count">{formatNumber(objectsCount)}</span> объектов
      </div>

      <div className="paginator__list">
        {prevLink}
        {navHrefs && navHrefs.map(item => (
          <div
            className={`paginator__list-item ${currPageIndex === item.ID ? 'active' : ''}`}
            key={`paginator-link-${item.ID}`}
          >
            <span
              className="paginator__list-link"
              onClick={() => fetchItems(item.ID, countPerPage, item.URL)}
              role="button"
              tabIndex="0"
            >{item.ID}</span>
          </div>
        ))}
        {nextLink}
      </div>

      {!!currPageIndex &&
        <div className="table-footer__items">
          {'Показаны с '}
          <span className="table-footer__items-count">
            { ((currPageIndex * itemsCount) - itemsCount) + 1 }
            {' по '}
            {currPageIndex * itemsCount}
          </span>
        </div>
      }

      <div className="paginator__count">
        <span className="paginator__count-text">Показывать по:</span>
        <div className="paginator__list">
          {navHrefs && generateItemsPerPageLinks(countPerPage, currPageIndex)}
        </div>
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
