import React from 'react';

import { FieldText } from '../Fields';
import Section from './Section';
import FormRow from '../FormRow';

const Salary = ({
  onChangeState,
  selectValues,
  onSubmit,
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Продавец"
      onSubmit={onSubmit}
    >
      <FormRow>
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
      </FormRow>
      <FormRow>
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
      </FormRow>
      <FormRow>
        <FieldText
          value={selectValues.PROPERTY_KLIENT_MESTO}
          field="PROPERTY_KLIENT_MESTO"
          title="Адрес"
          size={12}
          onChangeState={onChangeState}
        />
      </FormRow>
    </Section>
  );
};

export default Salary;
