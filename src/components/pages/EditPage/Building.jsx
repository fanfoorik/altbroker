import React from 'react';

import FieldText from './FieldText';
import FieldSelect from './FieldSelect';
import FieldTextArea from './FieldTextArea';
import FieldSwitcher from './FieldSwitcher';
import Section from './Section';

const Building = ({
  onChangeState,
  selectValues,
  onSubmit,
  error,
}) => {
  return (
    <Section title="Помещение" error={error} onSubmit={onSubmit}>
      <div className="row">
        <FieldSwitcher
          title="В собственности"
          size={12}
          onChangeState={onChangeState}
        />
      </div>
      <div className="row">
        <FieldSelect
          title="Информация об арендателе"
          size={6}
          onChangeState={onChangeState}
        />
        <FieldText
          value={selectValues.PROPERTY_S_POM}
          field="PROPERTY_S_POM"
          title="Площадь помещений"
          size={6}
          onChangeState={onChangeState}
        />
      </div>
      <div className="row">
        <FieldText
          value={selectValues.PROPERTY_RENT_PRICE}
          field="PROPERTY_RENT_PRICE"
          title="Стоимость аренды в месяц"
          size={6}
          onChangeState={onChangeState}
        />
        <FieldText
          value={selectValues.PROPERTY_S_UCH}
          field="PROPERTY_S_UCH"
          title="Площадь участка (сотки)"
          size={6}
          onChangeState={onChangeState}
        />
      </div>
      <div className="row">
        <FieldTextArea
          value={selectValues.PROPERTY_ADDITIONAL_INFORMATION}
          field="PROPERTY_ADDITIONAL_INFORMATION"
          title="Описание"
          size={12}
          onChangeState={onChangeState}
        />
      </div>
    </Section>
  );
};

export default Building;
