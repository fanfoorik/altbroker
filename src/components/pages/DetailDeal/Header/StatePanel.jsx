import React from 'react';
import { Avatar } from 'antd';
import { connect } from 'react-redux';

import style from './statePanel.module.less';

const StatePanel = props => {
  let stage = '';
  let broker = {};
  let lawyer = {};

  if (props.deal) {
    stage = props.deal.PROPERTY_STAGE.VALUE;
    broker = {
      name: props.deal.PROPERTY_BROKER.DATA[props.deal.PROPERTY_BROKER.VALUE[0]].SHOT_NAME,
      avatar: props.deal.PROPERTY_BROKER.DATA[props.deal.PROPERTY_BROKER.VALUE[0]]['PERSONAL_PHOTO_TEXT_86x86'],
    };
    lawyer = {
      name: props.deal.PROPERTY_LAWYER.DATA[props.deal.PROPERTY_LAWYER.VALUE[0]].SHOT_NAME,
      avatar: props.deal.PROPERTY_LAWYER.DATA[props.deal.PROPERTY_LAWYER.VALUE[0]]['PERSONAL_PHOTO_TEXT_86x86'],
    };
  }

  return (
    <div className={style.panel}>
      <div className={style.section}>
        <div className={style.step}>
          <h4>Этап</h4>
          <p><span>{ stage } / 4</span> Создание сделки</p>
        </div>
        <div className={style.timeline}>
          <h4>Сроки</h4>
          <p>3 августа - 13 сентября</p>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.saller}>
          <h4>Покупатель</h4>
          <p>Сидачев К.</p>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.staff}>
          <ul>
            <li>
              <Avatar src={broker.avatar ? `http://alterainvest.ru/${broker.avatar}` : ''} icon="user" style={{ float: 'left', marginRight: '5px' }} />
              <h4>Брокер</h4>
              <span>{broker.name}</span>
            </li>
            <li>
              <Avatar src={lawyer.avatar ? `http://alterainvest.ru/${lawyer.avatar}` : ''} icon="user" style={{ float: 'left', marginRight: '5px' }} />
              <h4>Юрист</h4>
              <span>{lawyer.name}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className={style.section}>
        <div className={style.deal}>
          <span>
            Ни одной сделки не привязано
          </span>
        </div>
      </div>
    </div>
  );
};

export default connect(state => ({
  deal: state.editDealPage ? state.editDealPage.ITEM[0] : null,
}))(StatePanel);
