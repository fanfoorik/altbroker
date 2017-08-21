import React from 'react';

import FieldText from './FieldText';
import Section from './Section';

const Finance = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit
}) => {
  return (
    <Section title="Финансы" onSubmit={onSubmit}>
      <div className="row">
        <FieldText title="Стоимость" size={4} />
        <FieldText title="Чистая прибыль" size={4} />
        <div className="col-lg-4">
          <div className="edit-form__item">
            <lable className="edit-form__item-label">Окупаемость</lable>
            <div className="edit-form__item-result">
              Укажите стоимость и прибыль
            </div>
          </div>
        </div>
        <FieldText title="Оборот и расходы" size={6} />
        <FieldText title="Расходы" size={6} />
      </div>
      <button className="btn" type="submit">Сохранить</button>
    </Section>
  );
};

export default Finance;

