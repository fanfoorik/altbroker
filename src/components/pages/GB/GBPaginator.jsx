import PropTypes from 'prop-types';
import React from 'react';
import { browserHistory } from 'react-router';

import { formatNumber } from 'utils/formaters';
import { indexUrl } from 'utils/urls.js';
import nanoid  from 'nanoid';

const itemsPerPage = [15, 25, 50];

export default function GBPaginator(props) {
  const { itemsCount, pagination, updateGBOptions } = props;

  /**
   * Updates url & updates page options.
   * @param {number} index - page index
   * @param {number } count - items per page
   */
  function fetchItems(index, count) {
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
        key={nanoid()}
        className={`paginator__list-item ${item === count ? 'active' : ''}`}
      >
        <span
          className="paginator__list-link"
          onClick={() => fetchItems(url, item)}
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
      onClick={() => (nextPage ? fetchItems(nextPage.ID, countPerPage) : false)}
      role="button"
      tabIndex="0"
    >&gt;</div>
  );

  const prevLink = (
    <div
      className={`paginator__list-item paginator__prev ${!prevPage ? 'disabled' : ''}`}
      onClick={() => (prevPage ? fetchItems(prevPage.ID, countPerPage) : false)}
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
            key={nanoid()}
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
            {((currPageIndex - 1) * countPerPage) + 1}
            {' по '}
            {((currPageIndex - 1) * countPerPage) + itemsCount}
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
