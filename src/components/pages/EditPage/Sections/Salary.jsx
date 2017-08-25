import React from 'react';

import { FieldText } from '../Fields';
import Section from './Section';
import FormRow from '../FormRow';

const Salary = ({
  selectValues,
  onSubmit,
  ...props
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
          required
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_KLIENT_TLF}
          field="PROPERTY_KLIENT_TLF"
          title="Телефон"
          size={6}
          required
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldText
          value={selectValues.PROPERTY_KLIENT_EMAIL}
          field="PROPERTY_KLIENT_EMAIL"
          title="Почта"
          size={6}
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_KLIENT_SAIT}
          field="PROPERTY_KLIENT_SAIT"
          title="Сайт"
          size={6}
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldText
          value={selectValues.PROPERTY_KLIENT_MESTO}
          field="PROPERTY_KLIENT_MESTO"
          title="Адрес"
          {...props}
        />
      </FormRow>
    </Section>
  );
};

export default Salary;
