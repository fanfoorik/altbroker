import React from 'react';

import FieldText from './FieldText';
import Section from './Section';
// @TODO если первые два поля не заполнены выводить текст поле окупаемлсть
const Finance = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit,
  error
}) => {
  return (
    <Section title="Финансы" error={error} onSubmit={onSubmit}>
      <div className="row">
        <FieldText
          title="Стоимость"
          size={4}
          onChangeState={onChangeState}
        />
        <FieldText
          title="Чистая прибыль"
          size={4}
          onChangeState={onChangeState}
        />
        <FieldText
          title="Окупаемость"
          size={4}
          onChangeState={onChangeState}
        />
        <FieldText
          title="Оборот и расходы"
          size={6}
          onChangeState={onChangeState}
        />
        <FieldText
          title="Расходы"
          size={6}
          onChangeState={onChangeState}
        />
      </div>
    </Section>
  );
};

export default Finance;

