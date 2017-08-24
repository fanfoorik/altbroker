import React from 'react';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldSelect,
  FieldTextArea,
} from '../Fields';

const Asset = ({
  onChangeState,
  selectValues,
  onSubmit,
  lib,
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Активы"
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldSelect
          title="Правовая форма"
          onChangeState={onChangeState}
          options={lib.opf}
          value={selectValues.PROPERTY_OPF}
          field="PROPERTY_OPF"
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
      </FormRow>
      <FormRow className="row">
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
      </FormRow>
    </Section>
  );
};

export default Asset;
