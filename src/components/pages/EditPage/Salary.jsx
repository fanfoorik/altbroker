import React from 'react';

import FieldText from './FieldText';
import Section from './Section';

const Salary = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit,
  error,
}) => {
  return (
    <Section title="Продавец" error={error} onSubmit={onSubmit}>
      <div className="row">
        <div className="row">
          <FieldText
            value={selectValues.PROPERTY_KLIENT_FIO}
            field="PROPERTY_KLIENT_FIO"
            title="Имя"
            size={6}
            onChangeState={onChangeState}
            required
          />
          <FieldText
            value={selectValues.PROPERTY_KLIENT_TLF}
            field="PROPERTY_KLIENT_TLF"
            title="Телефон"
            size={6}
            onChangeState={onChangeState}
            required
          />
        </div>
        <div className="row">
          <FieldText
            value={selectValues.PROPERTY_KLIENT_EMAIL}
            field="PROPERTY_KLIENT_EMAIL"
            title="Почта"
            size={6}
            onChangeState={onChangeState}
          />
          <FieldText
            value={selectValues.PROPERTY_KLIENT_SAIT}
            field="PROPERTY_KLIENT_SAIT"
            title="Сайт"
            size={6}
            onChangeState={onChangeState}
          />
        </div>
        <div className="row">
          <FieldText
            value={selectValues.PROPERTY_KLIENT_MESTO}
            field="PROPERTY_KLIENT_MESTO"
            title="Адрес"
            size={12}
            onChangeState={onChangeState}
          />
        </div>
      </div>
    </Section>
  );
};

export default Salary;
