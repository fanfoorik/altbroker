import React from 'react';
import 'react-select/dist/react-select.css';

import FieldSelect from './FieldSelect';
import FieldText from './FieldText';
import FieldTextArea from './FieldTextArea';
import Section from './Section';

const Basic = ({
 onChangeState,
 selectValues,
 lib,
 onSubmit
}) => {
  return (
    <Section title="Основное" onSubmit={onSubmit}>
      <FieldText
        value={selectValues.NAME}
        onChangeState={onChangeState}
        title="Название"
        field="NAME"
        required
      />

      <div className="row">
        <FieldSelect
          value={selectValues.PROPERTY_GEO_ID}
          options={lib.cities}
          onChangeState={onChangeState}
          field="PROPERTY_GEO_ID"
          title="Местоположение"
          size={6}
          required
        />

        {/*<FieldSelect*/}
          {/*value={selectValues.PROPERTY_METRO_NEW}*/}
          {/*options={lib.metro}*/}
          {/*onChangeState={onChangeState}*/}
          {/*field="PROPERTY_METRO_NEW"*/}
          {/*title="Метро"*/}
          {/*size={6}*/}
          {/*link={selectValues.PROPERTY_GEO_ID}*/}
        {/*/>*/}
      </div>

      <div className="row">
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
      </div>

      <div className="row">
        <FieldTextArea
          value={selectValues.PROPERTY_DOP_INFO}
          onChangeState={onChangeState}
          title="Описание"
          field="PROPERTY_DOP_INFO"
          size={12}
        />
      </div>

      <div className="row">
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
      </div>

      <div className="row">
        <FieldSelect
          multi
          value={selectValues.PROPERTY_DOP_ICON}
          options={lib.advantages}
          onChangeState={onChangeState}
          field="PROPERTY_DOP_ICON"
          title="Преимущества"
          size={12}
        />
      </div>
    </Section>
  );
};

export default Basic;
