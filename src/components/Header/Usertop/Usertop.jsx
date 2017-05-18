import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { hostUrl, indexUrl } from 'utils/urls.js';
import DropTip from 'components/DropTip/DropTip';
import IsActive from 'utils/IsActive';
import Icon from 'components/Icon';

import triggerUser from './actions/userAction';
import logoutUser from './actions/logoutUserAction';

function getAvatar(usertop, size) {
  return usertop.data.userpic ?
    (
      <img
        alt="User logo"
        className="usertop__trigger-pic"
        src={hostUrl + usertop.data.userpic}
      />
    ) :
    (<Icon className="usertop__default-avatar" icon="default_avatar" width={size} height={size} />);
}

function Usertop(props) {
  const { dispatchLogoutUser, dispatchTriggerUsers, usertop } = props;

  return (
    <div className="usertop">
      <div
        className={`usertop__trigger ${usertop.active ? 'active' : ''}`}
        onClick={dispatchTriggerUsers}
        role="button"
        tabIndex={0}
      >
        <div className="usertop__trigger-pic">{getAvatar(usertop, 50)}</div>
      </div>

      <IsActive active={usertop.active}>
        <DropTip handleOuterClick={dispatchTriggerUsers} className="usertop__droptip">
          <div className="droptip__header usertop__header clear">
            <div className="usertop__image">{getAvatar(usertop, 70)}</div>

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

          <div className="droptip__content usertop__content fz_16">
            <Link
              className="usertop__link"
              onClick={dispatchTriggerUsers}
              to={`${indexUrl}user/${usertop.data.id}/`}
            >Редактировать профиль</Link>
            <span className="usertop__link">Мне нужна помощь</span>
            <span
              className="usertop__link"
              onClick={() => {
                dispatchTriggerUsers();
                dispatchLogoutUser();
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

function mapStateToProps(state) {
  return {
    usertop: state.header.usertop,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatchTriggerUsers() {
      dispatch(triggerUser());
    },
    dispatchLogoutUser() {
      dispatch(logoutUser());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Usertop);
