import React from 'react';
import { Link } from 'react-router';

import Avatar from 'components/Avatar';
import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import ToplineTooltip from 'components/HeaderTooltip';

import { indexUrl } from 'utils/urls.js';

function Usertop(props) {
  const {
    isActive,
    triggerDropdown,
    logoutUser,
    usertop
  } = props;
  const { id, userpic } = usertop.data;

  return (
    <div className="usertop">
      <div
        className={`usertop__trigger${isActive ? ' active' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex={0}
      >
        <Avatar src={userpic} sizes="36" className="usertop__trigger-pic" />
      </div>

      {isActive &&
        <Dropdown triggerDropdown={triggerDropdown}>
          <ToplineTooltip className="usertop__droptip">
            <ToplineTooltip.Header className="usertop__header clear">
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
            </ToplineTooltip.Header>

            <div className="droptip__content usertop__content fz_16 no-padding">
              <Link
                className="usertop__link"
                to={`${indexUrl}user/${id}/`}
                onClick={triggerDropdown}
              >Профиль</Link>
              <Link
                className="usertop__link"
                onClick={triggerDropdown}
                to={`${indexUrl}faq/getask/`}
              >Мне нужна помощь</Link>
              <span
                className="usertop__link"
                onClick={() => {
                  triggerDropdown();
                  logoutUser();
                }}
                role="link"
                tabIndex={0}
              >Выйти</span>
            </div>
          </ToplineTooltip>
        </Dropdown>
      }
    </div>
  );
}

export default Usertop;
