import React from 'react';
import 'react-select/dist/react-select.css';

import FieldSelect from './FieldSelect';
import FieldText from './FieldText';

const Basic = ({
 onChangeState,
 selectValues,
 lib,
 onSubmit
}) => {
  return (
    <div className="page-panel" data-anchor="basic">
      <div className="page-panel-title">
        <span className="page-panel-title__heading">Основное</span>
        <span className="block-right">
          <span className="page-panel-title__status quantity-status" />
          <span className="page-panel-title__quantity">7/7</span>
        </span>
      </div>
      <form className="edit-form" onSubmit={onSubmit}>
        <FieldText
          value={selectValues.name}
          onChangeState={onChangeState}
          title="Название"
        />

        <div className="row">
          <FieldSelect
            value={selectValues.city}
            options={lib.cities}
            onChangeState={onChangeState}
            field="city"
            title="Местоположение"
            size="6"
          />

          <FieldSelect
            value={selectValues.metro}
            options={lib.metro}
            onChangeState={onChangeState}
            field="metro"
            title="Метро"
            size="6"
            link={selectValues.city}
          />
        </div>

        <div className="row">
          <FieldSelect
            multi
            value={selectValues.section}
            options={lib.categories}
            onChangeState={onChangeState}
            field="section"
            title="Категории"
            size="12"
          />
        </div>

        <div className="row">
          <FieldSelect
            value={selectValues.source}
            options={lib.sources}
            onChangeState={onChangeState}
            field="source"
            title="Источник"
            size="6"
          />

          <FieldSelect
            value={selectValues.reason}
            options={lib.reasons}
            onChangeState={onChangeState}
            field="reason"
            title="Причина продажи"
            size="6"
          />
        </div>

        <div className="row">
          <FieldSelect
            multi
            value={selectValues.advantages}
            options={lib.advantages}
            onChangeState={onChangeState}
            field="advantages"
            title="Преимущества"
            size="12"
          />
        </div>

        <button className="btn" type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default Basic;
