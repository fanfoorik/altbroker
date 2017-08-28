import React from 'react';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldTextArea,
} from '../Fields';

const Staff = ({
  selectValues,
  onSubmit,
  ...props
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Штат"
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldText
          title="Количество работников"
          size={6}
          field="PROPERTY_KOLVO_SOTR"
          value={selectValues.PROPERTY_KOLVO_SOTR}
          typeText="number"
          {...props}
        />
        <FieldText
          title="Фонд З/П"
          size={6}
          field="PROPERTY_FOND_ZP"
          value={selectValues.PROPERTY_FOND_ZP}
          typeText="money"
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldTextArea
          title="Описание"
          field="PROPERTY_STATE_INFORMATION"
          value={selectValues.PROPERTY_STATE_INFORMATION}
          {...props}
        />
      </FormRow>
    </Section>
  );
};

export default Staff;
