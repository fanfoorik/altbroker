import React from 'react';

import {
  FieldText,
  FieldSelect,
  FieldTextArea,
} from '../Fields';

import Section from './Section';

const Asset = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
  lib,
  disabledSubmit,
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Активы"
      error={error}
      onSubmit={onSubmit}
      disabledSubmit={disabledSubmit}
    >
      <div className="row">
        <FieldSelect
          title="Правовая форма"
          onChangeState={onChangeState}
          options={lib.opf}
          value={selectValues.PROPERTY_OPF}
          field="PROPERTY_OPF"
          size={4}
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_DOLYA}
          field="PROPERTY_DOLYA"
          onChangeState={onChangeState}
          title="Доля"
          size={4}
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_VOZR_BUSINESS}
          field="PROPERTY_VOZR_BUSINESS"
          onChangeState={onChangeState}
          title="Возраст бизнеса"
          size={4}
          error={error}
        />
      </div>
      <div className="row">
        <FieldTextArea
          value={selectValues.PROPERTY_DOP_BUSINESS_INFO}
          field="PROPERTY_DOP_BUSINESS_INFO"
          onChangeState={onChangeState}
          title="Доп. информация по бизнесу (аренда, площадь помещений)"
          size={12}
          error={error}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_SRV_PRZ}
          field="PROPERTY_SRV_PRZ"
          title="Средства производства"
          onChangeState={onChangeState}
          size={12}
          error={error}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_NEM_ACT}
          field="PROPERTY_NEM_ACT"
          title="Не материальные активы"
          onChangeState={onChangeState}
          size={12}
          error={error}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_DOC_LIC}
          field="PROPERTY_DOC_LIC"
          title="Документы лицензии"
          onChangeState={onChangeState}
          size={12}
          error={error}
        />
      </div>
    </Section>
  );
};

export default Asset;
