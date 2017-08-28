import React from "react";

const About = props => {
  return (
    <div className="profile-pane mb-24 clear">
      <div className="profile-pane__title">О себе</div>

      <div className="profile-image">
        <div className="profile-image__userpic"></div>
        <div className="profile-image__edit">Изменить</div>
      </div>

      <div className="profile-info">

        <div className="row row_gutter-24 profile-info__row">
          <div className="col-lg-6">
            <label>
              <div className="profile__label">Имя</div>
              <input className="input input_smaller" type="text"/>
            </label>
          </div>
          <div className="col-lg-6">
            <label>
              <div className="profile__label">Имя</div>
              <input className="input input_smaller" type="text" defaultValue="Штеерзонхофензунд"/>
            </label>
          </div>
        </div>

        <div className="row row_gutter-24 profile-info__row">
          <div className="col-lg-4">
            <div className="profile__label">Год рождения</div>
            <div>04.03.1985</div>
          </div>
          <div className="col-lg-4">
            <div className="profile__label">Скрыть год?</div>
            Да Нет
          </div>
        </div>

        <div className="profile-info__row">
          <div className="profile__label">Я живу в городе</div>
          <div className="selectbox">
            <select className="select">
              <option value="1">Санкт-Петербург</option>
              <option value="2">Москва</option>
            </select>
          </div>
        </div>

        <div className="profile-info__row mb-0">
          <div className="profile__label">Моя история успеха</div>
          <textarea className="textarea" rows="5" cols="5" defaultValue="sdfsdfdsf"></textarea>
        </div>

      </div>

      <div className="align_right">
        <button className="btn" type="submit">Сохранить</button>
      </div>

    </div>
  )
};

export default About;