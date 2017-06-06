import React from 'react';
import { Link } from 'react-router';

import Avatar from 'components/Avatar';
import DropTip from 'components/DropTip/DropTip';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';
import { indexUrl } from 'utils/urls.js';

function Usertop(props) {
  const { logoutUser, triggerUser, usertop } = props;
  const { userpic } = usertop.data;

  return (
    <div className="usertop">
      <div
        className={`usertop__trigger ${usertop.active ? 'active' : ''}`}
        onClick={triggerUser}
        role="button"
        tabIndex={0}
      >
        <Avatar src={userpic} sizes="36" className="usertop__trigger-pic" />
      </div>

      <IsActive active={usertop.active}>
        <DropTip handleOuterClick={triggerUser} className="usertop__droptip">
          <div className="droptip__header usertop__header clear">
            <Avatar src={userpic} sizes="56" className="usertop__image" />

            <div className="overflow_hidden">
              <div className="usertop__name">{`${usertop.data.name} ${usertop.data.lastName}`}</div>
              <div className="usertop__position">{usertop.data.position}</div>
              <div className="usertop-scores">
                <div className="usertop-score usertop-score_score">
                  <span className="usertop-score__num">35</span>
                  <Icon icon="score" className="usertop-score__icon" width="20" height="21" />
                </div>

                <div className="usertop-score usertop-score_money">
                  <span className="usertop-score__num">213</span>
                  <Icon icon="lightning" className="usertop-score__icon" width="14" height="21" />
                </div>
              </div>
            </div>
          </div>

          <div className="droptip__content usertop__content fz_16 no-padding">
            <Link
              className="usertop__link"
              onClick={triggerUser}
              to={`${indexUrl}user/${usertop.data.id}/`}
            >Профиль</Link>
            <Link
              className="usertop__link"
              onClick={triggerUser}
              to={`${indexUrl}faq/`}
            >Мне нужна помощь</Link>
            <span
              className="usertop__link"
              onClick={() => {
                triggerUser();
                logoutUser();
              }}
              role="link"
              tabIndex={0}
            >Выйти</span>
          </div>
        </DropTip>
      </IsActive>
    </div>
  );
}

export default Usertop;
