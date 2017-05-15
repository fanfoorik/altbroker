import React from 'react';

export default function User(props) {
  const { params } = props;

  return (
    <div className="profile">
      <div className="profile__center">
        <div className="profile__menu profile-menu">
          <a className="profile-menu__link" href="#about">О себе</a>
          <a className="profile-menu__link" href="#job">Работа</a>
          <a className="profile-menu__link" href="#contact">Контакты</a>
          <a className="profile-menu__link" href="#password">Пароль</a>
        </div>

        <div className="profile__container">
          <div className="profile-pane mb_24">
            <div className="profile-pane__title">О себе</div>
            <div className="profile-data clear">
              <div className="profile-data__picbar">
                fghjkl
              </div>
            </div>
          </div>

          <div className="profile-pane mb_24">
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
            22222 User ID { params.id } <br />
          </div>

          <div className="profile-pane mb_24">
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
            33333 User ID { params.id } <br />
          </div>

          <div className="profile-pane mb_24">
            44444 User ID { params.id } <br />
            44444 User ID { params.id } <br />
            44444 User ID { params.id } <br />
            44444 User ID { params.id } <br />
            44444 User ID { params.id } <br />
            44444 User ID { params.id } <br />
            User ID { params.id } <br />
          </div>
        </div>
      </div>
    </div>
  );
}
