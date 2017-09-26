import React from 'react';

import style from './index.module.less';

const BadgeList = (props) => {
  const { current } = props;

  const onClickHandler = type => (
    e => {
      props.onClick(type);
    }
  );

  return (
  <div className={style.badgeList}>
    <span onClick={onClickHandler('sale')} className={current === 'sale' ? style.currentBadgeListItem : style.badgeListItem} >
      <span className={style.badgeText}>
        На продажу
      </span>
      <span className={style.badge}>4</span>
    </span>
    <span onClick={onClickHandler('search')} className={current === 'search' ? style.currentBadgeListItem : style.badgeListItem}>
      <span className={style.badgeText}>
        На поиск
      </span>
      <span className={style.badge}>4</span>
    </span>
    <span onClick={onClickHandler('deal')} className={current === 'deal' ? style.currentBadgeListItem : style.badgeListItem}>
      <span className={style.badgeText}>
        Сделки
      </span>
      <span className={style.badge}>4</span>
    </span>
  </div>
)};

export default BadgeList;
