import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldSelect,
  FieldTextArea,
  FieldSwitcher,
} from '../Fields';

const Building = ({
  selectValues,
  onSubmit,
  lib,
  ...props
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
          value={selectValues.PROPERTY_SOBSTVEN}
          field="PROPERTY_SOBSTVEN"
          {...props}
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
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_S_POM}
          field="PROPERTY_S_POM"
          title="Площадь помещений"
          size={6}
          typeText="number"
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldText
          value={selectValues.PROPERTY_RENT_PRICE}
          field="PROPERTY_RENT_PRICE"
          title="Стоимость аренды в месяц"
          size={6}
          typeText="money"
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_S_UCH}
          field="PROPERTY_S_UCH"
          title="Площадь участка (сотки)"
          size={6}
          typeText="number"
          {...props}
        />
      </FormRow>
      <FormRow>
        <FieldTextArea
          value={selectValues.PROPERTY_ADDITIONAL_INFORMATION}
          field="PROPERTY_ADDITIONAL_INFORMATION"
          title="Описание"
          {...props}
        />
      </FormRow>
    </Section>
  );
};

Building.propTypes = {
  selectValues: PropTypes.object,
  lib: PropTypes.object,
  onSubmit: PropTypes.func,
};

Building.defaultProps = {
  selectValues: {},
  lib: {},
};

export default Building;
