import React from 'react';

import {
  FieldText,
  FieldTextArea,
} from '../Fields';
import Section from './Section';

const Staff = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
  disabledSubmit
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Штат"
      error={error}
      onSubmit={onSubmit}
      disabledSubmit={disabledSubmit}
    >
      <div className="row">
        <FieldText
          title="Количество работников"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_KOLVO_SOTR"
          value={selectValues.PROPERTY_KOLVO_SOTR}
          type="number"
          error={error}
        />
        <FieldText
          title="Фонд З/П"
          size={6}
          onChangeState={onChangeState}
          field="PROPERTY_FOND_ZP"
          value={selectValues.PROPERTY_FOND_ZP}
          type="number"
          error={error}
        />
      </div>
      <div className="row">
        <FieldTextArea
          title="Описание"
          size={12}
          onChangeState={onChangeState}
          field="PROPERTY_STATE_INFORMATION"
          value={selectValues.PROPERTY_STATE_INFORMATION}
          error={error}
        />
      </div>
    </Section>
  );
};

export default Staff;
