import PropTypes from 'prop-types';
import React from 'react';
import Switcher from 'components/ui/Switcher';

export default class editPage extends React.Component {

  render() {
    return (
      <section className="content" id="content">
        <div className="container container__min position-rel">
          <ol className="breadcrumb">
            <li className="breadcrumb__item"><a className="breadcrumb__item_link" href="#">Бизнесы</a></li>
            <li className="breadcrumb__item breadcrumb-active">Добавление</li>
          </ol>
          <div className="edit-page">
            <div className="page-aside">
              <div className="page-aside__quality">
                <div className="page-aside__quality_heading">
                  Качество заполнения
                </div>
                <div className="page-aside__quality_diagrams">
                  <div className="circle">
                    <svg width="50" height="50" viewBox="0 0 150 160">
                      <circle transform="rotate(-90)" r="65" cx="-80" cy="80"/>
                      <circle transform="rotate(-90)" r="65" cx="-80" cy="80"/>
                    </svg>
                    <span className="circle__number">56</span>
                  </div>
                </div>
              </div>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Основное</span>
                <span className="page-aside__item_status quantity-status"></span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Галерея</span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Финансы</span>
                <span className="page-aside__item_status quantity-status"></span>
                <span className="page-aside__item_quantity">10/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Штат</span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Помещение</span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Активы</span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <a href="" className="page-aside__item">
                <span className="page-aside__item_text">Продавец</span>
                <span className="page-aside__item_quantity">7/7</span>
              </a>
              <div className="page-aside__buttons">
                <button className="btn btn-primary" type="submit">Сохранить</button>
                <button className="btn" type="submit">В черновик</button>
              </div>
            </div>

            <div className="edit-page__container">
              <div className="page-panel" data-anchor="basic">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Основное</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Название</lable>
                    <input
                      className="edit-form__item-input"
                      value='Lorem Ipsum'
                      min={0}
                      type="text"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Местоположение</lable>
                        <select
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Метро</lable>
                        <select
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Категории и подкатегории</lable>
                    <input
                      className="edit-form__item-input"
                      value='Lorem Ipsum'
                      min={0}
                      type="text"
                    />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Источник</lable>
                        <select name="select" id="exampleSelect" className="form-control">
                          <option>1</option>
                          <option>2</option>
                          <option>3</option>
                          <option>4</option>
                          <option>5</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Причина продажи</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Преимущества</lable>
                    <input
                      className="edit-form__item-input"
                      value='Lorem Ipsum'
                      min={0}
                      type="text"
                    />
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Галерея</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <div className="edit-form">
                  galler
                </div>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Продавец</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Имя</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Телефон</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Почта</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Сайт</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Адрес</lable>
                    <input
                      className="edit-form__item-input"
                      value='Lorem Ipsum'
                      min={0}
                      type="text"
                    />
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Финансы</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Стоимость</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Чистая прибыль</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Окупаемость</lable>
                        <div className="edit-form__item-result">Укажите стоимость и прибыль
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Оборот</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Расходы</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Штат</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Количество работников</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Фонд З / П</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Описание</lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Помещение</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">В собственности</lable>
                    <Switcher />
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Информация об арендодателе</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Площадь помещений</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Стоимость аренды в месяц</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Площадь участка (сотки)</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Описание</lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>

              <div className="page-panel">
                <div className="page-panel__title">
                  <span className="page-panel__title_heading">Активы</span>
                  <span className="block-right">
                    <span className="page-panel__title_status quantity-status"></span>
                    <span className="page-panel__title_quantity">7/7</span>
                  </span>
                </div>
                <form className="edit-form">
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Правовая форма</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Доля</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="edit-form__item">
                        <lable className="edit-form__item-label">Возраст бизнеса</lable>
                        <input
                          className="edit-form__item-input"
                          value='Lorem Ipsum'
                          min={0}
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Доп. информация по бизнесу (аренда, площадь помещений)
                    </lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Средства производства</lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Нематериальные активы</lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <div className="edit-form__item">
                    <lable className="edit-form__item-label">Документы, лицензии</lable>
                    <textarea name="" cols="10" rows="5"></textarea>
                  </div>
                  <button className="btn" type="submit">Сохранить</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  }

}
