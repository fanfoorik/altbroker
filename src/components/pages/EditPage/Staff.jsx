import React from 'react';

import FieldText from './FieldText';
import FieldTextArea from './FieldTextArea';
import Section from './Section';

const Staff = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit,
}) => {
  return (
    <Section title="Штат" onSubmit={onSubmit}>
      <div className="row">
        <div className="row">
          <FieldText
            title="Количество работников"
            size={6}
            onChangeState={onChangeState}
          />
          <FieldText
            title="Фонд З/П"
            size={6}
            onChangeState={onChangeState}
          />
        </div>
        <div className="row">
          <FieldTextArea
            title="Описание"
            size={12}
            onChangeState={onChangeState}
          />
        </div>
      </div>
    </Section>
  );
};

export default Staff;
