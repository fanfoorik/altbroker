import React from 'react';
import 'react-select/dist/react-select.css';
import PropTypes from 'prop-types';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldSelect,
  FieldText,
  FieldTextArea,
} from '../Fields';

const Basic = ({
  selectValues,
  lib,
  onSubmit,
  ...props
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
          title="Название"
          field="NAME"
          required
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          value={selectValues.PROPERTY_GEO_ID}
          options={lib.cities}
          field="PROPERTY_GEO_ID"
          title="Местоположение"
          size={6}
          required
          {...props}
        />

        <FieldSelect
          value={selectValues.PROPERTY_METRO_NEW}
          options={lib.metro}
          field="PROPERTY_METRO_NEW"
          title="Метро"
          size={6}
          link={selectValues.PROPERTY_GEO_ID}
          multi
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          multi
          value={selectValues.SECTION_ID_1}
          options={lib.categories}
          field="SECTION_ID_1"
          title="Категории"
          maxCountCurrentValues={1}
          required
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          multi
          value={selectValues.SECTION_ID_2}
          options={lib.categories2}
          field="SECTION_ID_2"
          title="Подкатегории"
          link={selectValues.SECTION_ID_1}
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldTextArea
          value={selectValues.PROPERTY_DOP_INFO}
          title="Описание"
          field="PROPERTY_DOP_INFO"
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          value={selectValues.PROPERTY_SOURCE}
          options={lib.sources}
          field="PROPERTY_SOURCE"
          title="Источник"
          size={6}
          {...props}
        />

        <FieldSelect
          value={selectValues.PROPERTY_REASON_FOR_SALE}
          options={lib.reasons}
          field="PROPERTY_REASON_FOR_SALE"
          title="Причина продажи"
          size={6}
          {...props}
        />
      </FormRow>

      <FormRow>
        <FieldSelect
          multi
          value={selectValues.PROPERTY_DOP_ICON}
          options={lib.advantages}
          field="PROPERTY_DOP_ICON"
          title="Преимущества"
          maxCountCurrentValues={4}
          {...props}
        />
      </FormRow>
    </Section>
  );
};

Basic.propTypes = {
  selectValues: PropTypes.object,
  lib: PropTypes.object,
  onSubmit: PropTypes.func,
};

Basic.defaultProps = {
  selectValues: {},
  lib: {},
};

export default Basic;
