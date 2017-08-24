import React from 'react';

import { FieldText } from '../Fields';
import Section from './Section';
import FormRow from '../FormRow';

const Finance = ({
  onChangeState,
  selectValues,
  onSubmit,
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Финансы"
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldText
          title="Стоимость"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_PRICE_BUSINESS"
          value={selectValues.PROPERTY_PRICE_BUSINESS}
          type="number"
        />
        <FieldText
          title="Чистая прибыль"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_CHIST_PRIB"
          value={selectValues.PROPERTY_CHIST_PRIB}
          type="number"
        />
        <FieldText
          title="Окупаемость"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_OKUP"
          value={selectValues.PROPERTY_OKUP}
          type="number"
        />
        <FieldText
          title="Оборот"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_SREDMES_OBOR"
          value={selectValues.PROPERTY_SREDMES_OBOR}
          type="number"
        />
        <FieldText
          title="Расходы"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_SREDMES_RASH"
          value={selectValues.PROPERTY_SREDMES_RASH}
          type="number"
        />
      </FormRow>
    </Section>
  );
};

export default Finance;

