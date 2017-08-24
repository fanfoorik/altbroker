import React from 'react';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldTextArea,
} from '../Fields';

const Staff = ({
  onChangeState,
  selectValues,
  onSubmit,
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
          onChangeState={onChangeState}
          field="PROPERTY_KOLVO_SOTR"
          value={selectValues.PROPERTY_KOLVO_SOTR}
          type="number"
        />
        <FieldText
          title="Фонд З/П"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_FOND_ZP"
          value={selectValues.PROPERTY_FOND_ZP}
          type="number"
        />
      </FormRow>
      <FormRow>
        <FieldTextArea
          title="Описание"
          size={12}
          onChangeState={onChangeState}
          field="PROPERTY_STATE_INFORMATION"
          value={selectValues.PROPERTY_STATE_INFORMATION}
        />
      </FormRow>
    </Section>
  );
};

export default Staff;
