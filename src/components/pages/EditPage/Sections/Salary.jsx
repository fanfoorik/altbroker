import React from 'react';

import { FieldText } from '../Fields';
import Section from './Section';

const Salary = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
  disabledSubmit
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Продавец"
      error={error}
      onSubmit={onSubmit}
      disabledSubmit={disabledSubmit}
    >
      <div className="row">
        <FieldText
          value={selectValues.PROPERTY_KLIENT_FIO}
          field="PROPERTY_KLIENT_FIO"
          title="Имя"
          size={6}
          onChangeState={onChangeState}
          required
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_KLIENT_TLF}
          field="PROPERTY_KLIENT_TLF"
          title="Телефон"
          size={6}
          onChangeState={onChangeState}
          required
          error={error}
        />
      </div>
      <div className="row">
        <FieldText
          value={selectValues.PROPERTY_KLIENT_EMAIL}
          field="PROPERTY_KLIENT_EMAIL"
          title="Почта"
          size={6}
          onChangeState={onChangeState}
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_KLIENT_SAIT}
          field="PROPERTY_KLIENT_SAIT"
          title="Сайт"
          size={6}
          onChangeState={onChangeState}
          error={error}
        />
      </div>
      <div className="row">
        <FieldText
          value={selectValues.PROPERTY_KLIENT_MESTO}
          field="PROPERTY_KLIENT_MESTO"
          title="Адрес"
          size={12}
          onChangeState={onChangeState}
          error={error}
        />
      </div>
    </Section>
  );
};

export default Salary;
