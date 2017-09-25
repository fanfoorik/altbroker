import React from 'react';

import style from './index.module.less';

const BadgeList = () => (
  <div className={style.badgeList}>
    <span className={style.currentBadgeListItem} >
      <span className={style.badgeText}>
        На продажу
      </span>
      <span className="badge">4</span>
    </span>
    <span className={style.badgeListItem}>
      <span className={style.badgeText}>
        На поиск
      </span>
      <span className="badge">4</span>
    </span>
    <span className={style.badgeListItem}>
      <span className={style.badgeText}>
        Сделки
      </span>
      <span className="badge">4</span>
    </span>
  </div>
);

export default BadgeList;
