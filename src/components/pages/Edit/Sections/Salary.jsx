import React from 'react';
import PropTypes from 'prop-types';

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
      anchor="salary"
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
          typeText="phone"
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

Salary.propTypes = {
  selectValues: PropTypes.object,
  onSubmit: PropTypes.func,
};

Salary.defaultProps = {
  selectValues: {},
};

export default Salary;
