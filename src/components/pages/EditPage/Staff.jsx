import React from 'react';

import FieldText from './FieldText';
import FieldTextArea from './FieldTextArea';
import Section from './Section';

const Staff = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
}) => {
  return (
    <Section title="Штат" error={error} onSubmit={onSubmit}>
      <div className="row">
        <div className="row">
          <FieldText
            title="Количество работников"
            size={6}
            onChangeState={onChangeState}
            field="PROPERTY_KOLVO_SOTR"
            value={selectValues.PROPERTY_KOLVO_SOTR}
          />
          <FieldText
            title="Фонд З/П"
            size={6}
            onChangeState={onChangeState}
            field="PROPERTY_FOND_ZP"
            value={selectValues.PROPERTY_FOND_ZP}
          />
        </div>
        <div className="row">
          <FieldTextArea
            title="Описание"
            size={12}
            onChangeState={onChangeState}
            field="PROPERTY_STATE_INFORMATION"
            value={selectValues.PROPERTY_STATE_INFORMATION}
          />
        </div>
      </div>
    </Section>
  );
};

export default Staff;
