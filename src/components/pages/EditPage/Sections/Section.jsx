import React from 'react';

import Form from '../Form';

const Section = ({
  children,
  title,
  onSubmit,
  error,
  selectValues,
}) => {
  let countFilledField = 0;
  const allCountField = Object.keys(selectValues).length;

  Object.keys(selectValues).map((key) => {
    const value = selectValues[key];
    if (value !== undefined &&
        value !== null &&
        value.length !== 0) {
      countFilledField += 1;
    }
  });

  return (
    <div className="page-panel" data-anchor="basic">
      <div className="page-panel-title">
        <span className="page-panel-title__heading">{title}</span>
        <span className="block-right">
          {
            (countFilledField === allCountField) ?
              <span className="page-panel-title__status quantity-status" /> :
              ''
          }
          <span className="page-panel-title__quantity">
            {countFilledField}/{allCountField}</span>
        </span>
      </div>
      <Form onSubmit={onSubmit}>
        {children}
      </Form>
    </div>
  );
};

export default Section;
