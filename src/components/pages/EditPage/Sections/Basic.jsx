import React from 'react';
import 'react-select/dist/react-select.css';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldSelect,
  FieldText,
  FieldTextArea,
} from '../Fields';

const Basic = ({
  onChangeState,
  selectValues,
  lib,
  onSubmit,
}) => {
  return (
    <Section
      selectValues={selectValues}
      title="Основное"
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldText
          value={selectValues.NAME}
          onChangeState={onChangeState}
          title="Название"
          field="NAME"
          required
          size={12}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          value={selectValues.PROPERTY_GEO_ID}
          options={lib.cities}
          onChangeState={onChangeState}
          field="PROPERTY_GEO_ID"
          title="Местоположение"
          size={6}
          required
        />

        <FieldSelect
          value={selectValues.PROPERTY_METRO_NEW ? selectValues.PROPERTY_METRO_NEW[0] : null}
          options={lib.metro}
          onChangeState={onChangeState}
          field="PROPERTY_METRO_NEW"
          title="Метро"
          size={6}
          link={selectValues.PROPERTY_GEO_ID}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          multi
          value={selectValues.SECTION_ID}
          options={lib.categories}
          onChangeState={onChangeState}
          field="SECTION_ID"
          title="Категории"
          size={12}
          required
        />
      </FormRow>

      <FormRow>
        <FieldTextArea
          value={selectValues.PROPERTY_DOP_INFO}
          onChangeState={onChangeState}
          title="Описание"
          field="PROPERTY_DOP_INFO"
          size={12}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          value={selectValues.PROPERTY_SOURCE}
          options={lib.sources}
          onChangeState={onChangeState}
          field="PROPERTY_SOURCE"
          title="Источник"
          size={6}
        />

        <FieldSelect
          value={selectValues.PROPERTY_REASON_FOR_SALE}
          options={lib.reasons}
          onChangeState={onChangeState}
          field="PROPERTY_REASON_FOR_SALE"
          title="Причина продажи"
          size={6}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          multi
          value={selectValues.PROPERTY_DOP_ICON}
          options={lib.advantages}
          onChangeState={onChangeState}
          field="PROPERTY_DOP_ICON"
          title="Преимущества"
          size={12}
        />
      </FormRow>
    </Section>
  );
};

export default Basic;
