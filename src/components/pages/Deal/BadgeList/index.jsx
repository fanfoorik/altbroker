import React from 'react';
import { Badge } from 'antd';

import style from './index.module.less';

const BadgeList = () => (
  <div className={style.badgeList}>
    <span className={style.badgeListItem}>
      <span className={style.badgeText}>
        На продажу
      </span>
      <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
    </span>
    <span className={style.badgeListItem}>
      <span className={style.badgeText}>
        На поиск
      </span>
      <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
    </span>
    <span className={style.badgeListItem}>
      <span className={style.badgeText}>
        Сделки
      </span>
      <Badge count={4} style={{ backgroundColor: '#c0c5ca', color: '#fff'}} />
    </span>
  </div>
);

export default BadgeList;
