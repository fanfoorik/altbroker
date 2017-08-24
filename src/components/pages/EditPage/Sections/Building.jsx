import React from 'react';

import {
  FieldText,
  FieldSelect,
  FieldTextArea,
  FieldSwitcher,
} from '../Fields';
import Section from './Section';

const Building = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
  lib,
  disabledSubmit
}) => {
  console.log(selectValues.PROPERTY_LANDLORD)
  return (
    <Section
      title="Помещение"
      selectValues={selectValues}
      error={error}
      onSubmit={onSubmit}
      disabledSubmit={disabledSubmit}
    >
      <div className="row">
        <FieldSwitcher
          title="В собственности"
          size={12}
          value={selectValues.PROPERTY_SOBSTVEN}
          field="PROPERTY_SOBSTVEN"
          onChangeState={onChangeState}
          error={error}
        />
      </div>
      <div className="row">
        <FieldSelect
          title="Информация об арендателе"
          options={lib.landlord}
          value={selectValues.PROPERTY_LANDLORD}
          field="PROPERTY_LANDLORD"
          disabled={selectValues.PROPERTY_SOBSTVEN}
          size={6}
          onChangeState={onChangeState}
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_S_POM}
          field="PROPERTY_S_POM"
          title="Площадь помещений"
          size={6}
          onChangeState={onChangeState}
          type="number"
          error={error}
        />
      </div>
      <div className="row">
        <FieldText
          value={selectValues.PROPERTY_RENT_PRICE}
          field="PROPERTY_RENT_PRICE"
          title="Стоимость аренды в месяц"
          size={6}
          onChangeState={onChangeState}
          type="number"
          error={error}
        />
        <FieldText
          value={selectValues.PROPERTY_S_UCH}
          field="PROPERTY_S_UCH"
          title="Площадь участка (сотки)"
          size={6}
          onChangeState={onChangeState}
          type="number"
          error={error}
        />
      </div>
      <div className="row">
        <FieldTextArea
          value={selectValues.PROPERTY_ADDITIONAL_INFORMATION}
          field="PROPERTY_ADDITIONAL_INFORMATION"
          title="Описание"
          size={12}
          onChangeState={onChangeState}
          error={error}
        />
      </div>
    </Section>
  );
};

export default Building;
