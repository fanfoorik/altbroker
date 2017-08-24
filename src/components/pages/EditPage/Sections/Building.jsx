import React from 'react';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldSelect,
  FieldTextArea,
  FieldSwitcher,
} from '../Fields';

const Building = ({
  onChangeState,
  selectValues,
  onSubmit,
  lib,
}) => {
  return (
    <Section
      title="Помещение"
      selectValues={selectValues}
      onSubmit={onSubmit}
    >
      <FormRow>
        <FieldSwitcher
          title="В собственности"
          size={12}
          value={selectValues.PROPERTY_SOBSTVEN}
          field="PROPERTY_SOBSTVEN"
          onChangeState={onChangeState}
        />
      </FormRow>
      <FormRow>
        <FieldSelect
          title="Информация об арендателе"
          options={lib.landlord}
          value={selectValues.PROPERTY_LANDLORD}
          field="PROPERTY_LANDLORD"
          disabled={selectValues.PROPERTY_SOBSTVEN}
          size={6}
          onChangeState={onChangeState}
        />
        <FieldText
          value={selectValues.PROPERTY_S_POM}
          field="PROPERTY_S_POM"
          title="Площадь помещений"
          size={6}
          onChangeState={onChangeState}
          type="number"
        />
      </FormRow>
      <FormRow>
        <FieldText
          value={selectValues.PROPERTY_RENT_PRICE}
          field="PROPERTY_RENT_PRICE"
          title="Стоимость аренды в месяц"
          size={6}
          onChangeState={onChangeState}
          type="number"
        />
        <FieldText
          value={selectValues.PROPERTY_S_UCH}
          field="PROPERTY_S_UCH"
          title="Площадь участка (сотки)"
          size={6}
          onChangeState={onChangeState}
          type="number"
        />
      </FormRow>
      <FormRow>
        <FieldTextArea
          value={selectValues.PROPERTY_ADDITIONAL_INFORMATION}
          field="PROPERTY_ADDITIONAL_INFORMATION"
          title="Описание"
          size={12}
          onChangeState={onChangeState}
        />
      </FormRow>
    </Section>
  );
};

export default Building;
