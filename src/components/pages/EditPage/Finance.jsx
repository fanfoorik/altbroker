import React from 'react';

import FieldText from './FieldText';
import Section from './Section';

const Finance = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
}) => {
  return (
    <Section title="Финансы" error={error} onSubmit={onSubmit}>
      <div className="row">
        <FieldText
          title="Стоимость"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_PRICE_BUSINESS"
          value={selectValues.PROPERTY_PRICE_BUSINESS}
        />
        <FieldText
          title="Чистая прибыль"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_CHIST_PRIB"
          value={selectValues.PROPERTY_CHIST_PRIB}
        />
        <FieldText
          title="Окупаемость"
          size={4}
          onChangeState={onChangeState}
          field="PROPERTY_OKUP"
          value={selectValues.PROPERTY_OKUP}
        />
        <FieldText
          title="Оборот"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_SREDMES_OBOR"
          value={selectValues.PROPERTY_SREDMES_OBOR}
        />
        <FieldText
          title="Расходы"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_SREDMES_RASH"
          value={selectValues.PROPERTY_SREDMES_RASH}
        />
      </div>
    </Section>
  );
};

export default Finance;

