<div className="page-panel">
                <div className="page-panel-title">
                  <span className="page-panel-title__heading">Помещение</span>
                  <span className="block-right">
                    <span className="page-panel-title__status quantity-status"></span>
                    <span className="page-panel-title__quantity">7/7</span>
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