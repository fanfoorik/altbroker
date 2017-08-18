import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

import { fetchCitiesAutoComplete, fetchMetroAutoComplete } from 'api/editPage';

const Basic = ({onChangeState, data, selectValues, lib}) => {
  const onChangeHandlerCity = (SelectData) => {
    onChangeState({
      city: SelectData.value,
    });
  };

  const onChangeHandlerMetro = (SelectData) => {
    onChangeState({
      metro: SelectData.value,
    });
  };

  const onChangeHandlerName = (e) => {
    onChangeState({
      name: e.target.value,
    });
  };

  const onChangeHandlerCategory = (SelectData) => {
    onChangeState({
      section: SelectData,
    });
  };

  const onChangeHandlerSource = (SelectData) => {
    onChangeState({
      source: SelectData.value,
    });
  };

  const onChangeHandlerReason = (SelectData) => {
    onChangeState({
      reason: SelectData.value,
    });
  };

  const onChangeHandlerAdvantages = (SelectData) => {
    onChangeState({
      advantages: SelectData,
    });
  };

  return (
    <div className="page-panel" data-anchor="basic">
      <div className="page-panel-title">
        <span className="page-panel-title__heading">Основное</span>
        <span className="block-right">
          <span className="page-panel-title__status quantity-status" />
          <span className="page-panel-title__quantity">7/7</span>
        </span>
      </div>
      <form className="edit-form">
        <div className="edit-form__item">
          <lable className="edit-form__item-label">Название</lable>
          <input
            className="edit-form__item-input"
            value={selectValues.name}
            type="text"
            onChange={onChangeHandlerName}
          />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="edit-form__item">
              <lable className="edit-form__item-label">Местоположение</lable>
              <Select
                value={selectValues.city}
                options={
                  lib.cities ?
                  lib.cities.map(city => ({ value: city.ID, label: city.NAME })) :
                  []
                }
                disabled={lib.cities === undefined}
                onChange={onChangeHandlerCity}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="edit-form__item">
              <lable className="edit-form__item-label">Метро</lable>
              <Select
                value={selectValues.metro}
                disabled={lib.metro === undefined}
                options={
                  lib.metro ?
                  lib.metro
                    .filter((metro) => {
                      const libId = parseInt(metro.PROPERTY_CITY_VALUE, 10);
                      const selectId = parseInt(selectValues.city, 10);

                      return libId === selectId;
                    })
                    .map(metro => ({ value: metro.ID, label: metro.NAME })) :
                  []
                }
                onChange={onChangeHandlerMetro}
              />
            </div>
          </div>
        </div>
        <div className="edit-form__item">
          <lable className="edit-form__item-label">Категории</lable>
          <Select
            multi
            onChange={onChangeHandlerCategory}
            value={selectValues.section}
            options={
            lib.categories ?
              lib.categories.map((category) => {
                return ({ label: category.NAME, value: category.ID });
              }) : []
            }
          />
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div className="edit-form__item">
              <lable className="edit-form__item-label">Источник</lable>
              <Select
                value={selectValues.source}
                disabled={lib.sources === undefined}
                options={
                  lib.sources ?
                  lib.sources
                    .map(source => ({ value: source.ID, label: source.VALUE })) :
                  []
                }
                onChange={onChangeHandlerSource}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="edit-form__item">
              <lable className="edit-form__item-label">Причина продажи</lable>
              <Select
                value={selectValues.reason}
                disabled={lib.reasons === undefined}
                options={
                  lib.reasons ?
                  lib.reasons
                    .map(reason => ({ value: reason.ID, label: reason.NAME })) :
                  []
                }
                onChange={onChangeHandlerReason}
              />
            </div>
          </div>
        </div>
        <div className="edit-form__item">
          <lable className="edit-form__item-label">Преимущества</lable>
          <Select
            multi
            onChange={onChangeHandlerAdvantages}
            value={selectValues.advantages}
            options={
            lib.advantages ?
              lib.advantages.map((advantage) => {
                return ({ label: advantage.VALUE, value: advantage.ID });
              }) : []
            }
          />
        </div>
        <button className="btn" type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default Basic;