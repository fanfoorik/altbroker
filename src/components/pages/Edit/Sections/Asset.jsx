import React from 'react';
import PropTypes from 'prop-types';

import Section from './Section';
import FormRow from '../FormRow';
import {
  FieldText,
  FieldSelect,
  FieldTextArea,
} from '../Fields';

const Asset = ({
  selectValues,
  onSubmit,
  lib,
  ...props
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
          options={lib.opf}
          value={selectValues.PROPERTY_OPF}
          field="PROPERTY_OPF"
          size={4}
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_DOLYA}
          field="PROPERTY_DOLYA"
          title="Доля"
          size={4}
          {...props}
        />
        <FieldText
          value={selectValues.PROPERTY_VOZR_BUSINESS}
          field="PROPERTY_VOZR_BUSINESS"
          title="Возраст бизнеса"
          size={4}
          {...props}
        />
      </FormRow>
      <FormRow className="row">
        <FieldTextArea
          value={selectValues.PROPERTY_DOP_BUSINESS_INFO}
          field="PROPERTY_DOP_BUSINESS_INFO"
          title="Доп. информация по бизнесу (аренда, площадь помещений)"
          {...props}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_SRV_PRZ}
          field="PROPERTY_SRV_PRZ"
          title="Средства производства"
          {...props}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_NEM_ACT}
          field="PROPERTY_NEM_ACT"
          title="Не материальные активы"
          {...props}
        />
        <FieldTextArea
          value={selectValues.PROPERTY_DOC_LIC}
          field="PROPERTY_DOC_LIC"
          title="Документы лицензии"
          {...props}
        />
      </FormRow>
    </Section>
  );
};

Asset.propTypes = {
  selectValues: PropTypes.object,
  onSubmit: PropTypes.func,
  lib: PropTypes.object,
};

Asset.defaultProps = {
  selectValues: {},
  lib: {},
};

export default Asset;
