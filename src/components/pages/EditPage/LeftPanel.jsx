import React from 'react';

const LeftPanel = ({
  sections,
  selectValues,
}) => {
  let sumAllField = 0;
  let sumAllFilledField = 0;

  sections.map((section) => {

    sumAllField += Object.keys(selectValues[section.component]).length;

    Object.keys(selectValues[section.component]).map((key) => {
      const value = selectValues[section.component][key];

      if (value !== undefined &&
        value !== null &&
        value.length !== 0) {
        sumAllFilledField += 1;
      }
    });
  });

  const percentFilledField = Math.floor(
    (100 * sumAllFilledField) /
    (sumAllField !== 0 ? sumAllField : 1),
  );

  return (
    <div className="page-aside">
      <div className="page-aside__quality">
        <div className="page-aside__quality_heading">
          Качество заполнения
        </div>
        <div className="page-aside__quality_diagrams">
          <div className="circle">
            <svg width="50" height="50" viewBox="0 0 150 160">
              <circle transform="rotate(-90)" r="65" cx="-80" cy="80" />
              <circle transform="rotate(-90)" r="65" cx="-80" cy="80" />
            </svg>
            <span className="circle__number">{percentFilledField}</span>
          </div>
        </div>
      </div>
      {
        sections.map((section, index) => {
          let countFilledField = 0;
          const allCountField = Object.keys(selectValues[section.component]).length;

          Object.keys(selectValues[section.component]).map((key) => {
            const value = selectValues[section.component][key];

            if (value !== undefined &&
                value !== null &&
                value.length !== 0) {
              countFilledField += 1;
            }
          });

          return (
            <span className="page-aside__item" key={index}>
              <span className="page-aside__item_text">{section.title}</span>
              {
                (countFilledField === allCountField) ?
                  <span className="page-aside__item_status quantity-status" /> :
                  ''
              }

              <span className="page-aside__item_quantity">
                {countFilledField}/{allCountField}
              </span>
            </span>
          );
        })
      }
    </div>
  );
};

export default LeftPanel;
