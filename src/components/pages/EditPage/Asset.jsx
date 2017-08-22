import React from 'react';

import FieldText from './FieldText';
import FieldSelect from './FieldSelect';
import FieldTextArea from './FieldTextArea';
import Section from './Section';

const Asset = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit,
}) => {
  return (
    <Section title="Активы" onSubmit={onSubmit}>
      <div className="row">
        <div className="row">
          <FieldSelect
            title="Правовая форма"
            onChangeState={onChangeState}
            size={4}
          />
          <FieldText
            value={selectValues.PROPERTY_DOLYA}
            field="PROPERTY_DOLYA"
            onChangeState={onChangeState}
            title="Доля"
            size={4}
          />
          <FieldText
            value={selectValues.PROPERTY_VOZR_BUSINESS}
            field="PROPERTY_VOZR_BUSINESS"
            onChangeState={onChangeState}
            title="Возраст бизнеса"
            size={4}
          />
        </div>
        <div className="row">
          <FieldTextArea
            value={selectValues.PROPERTY_DOP_BUSINESS_INFO}
            field="PROPERTY_DOP_BUSINESS_INFO"
            onChangeState={onChangeState}
            title="Доп. информация по бизнесу (аренда, площадь помещений)"
            size={12}
          />
          <FieldTextArea
            value={selectValues.PROPERTY_SRV_PRZ}
            field="PROPERTY_SRV_PRZ"
            title="Средства производства"
            onChangeState={onChangeState}
            size={12}
          />
          <FieldTextArea
            value={selectValues.PROPERTY_NEM_ACT}
            field="PROPERTY_NEM_ACT"
            title="Не материальные активы"
            onChangeState={onChangeState}
            size={12}
          />
          <FieldTextArea
            value={selectValues.PROPERTY_DOC_LIC}
            field="PROPERTY_DOC_LIC"
            title="Документы лицензии"
            onChangeState={onChangeState}
            size={12}
          />
        </div>
      </div>
    </Section>
  );
};

export default Asset;
