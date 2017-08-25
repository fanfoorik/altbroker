import React from 'react';

import {
  FieldText,
  FieldDiv,
} from '../Fields';
import Section from './Section';
import FormRow from '../FormRow';

const Finance = ({
  selectValues,
  onSubmit,
  ...props
}) => {
  const payback = Math.ceil(
              parseInt(selectValues.PROPERTY_PRICE_BUSINESS, 10) /
              parseInt(selectValues.PROPERTY_CHIST_PRIB, 10));
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
          field="PROPERTY_PRICE_BUSINESS"
          value={selectValues.PROPERTY_PRICE_BUSINESS}
          typeText="money"
          {...props}
        />
        <FieldText
          title="Чистая прибыль"
          size={4}
          field="PROPERTY_CHIST_PRIB"
          value={selectValues.PROPERTY_CHIST_PRIB}
          typeText="money"
          {...props}
        />
        <FieldDiv
          title="Окупаемость"
          size={4}
          value={isNaN(payback) || payback === Infinity ?
            'Укажите стоимость и прибыль' :
            `${payback} мес.`
          }
          {...props}
        />
        <FieldText
          title="Оборот"
          size={6}
          field="PROPERTY_SREDMES_OBOR"
          value={selectValues.PROPERTY_SREDMES_OBOR}
          typeText="money"
          {...props}
        />
        <FieldText
          title="Расходы"
          size={6}
          field="PROPERTY_SREDMES_RASH"
          value={selectValues.PROPERTY_SREDMES_RASH}
          typeText="money"
          {...props}
        />
      </FormRow>
    </Section>
  );
};

export default Finance;

