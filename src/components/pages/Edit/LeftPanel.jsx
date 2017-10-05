import React from 'react';
import {
  Anchor,
} from 'antd';

import style from './leftPanel.module.less';

const { Link } = Anchor;

const LeftPanelTest = ({
  sections,
  selectValues,
  onSubmit,
  onDraft,
}) => {
  let sumAllField = 0;
  let sumAllFilledField = 0;

  sections.map((section) => {
    const sectionData = Object.keys(selectValues[section.component]);

    sumAllField += sectionData.length;

    sectionData.map((key) => {
      const value = selectValues[section.component][key];

      if (value !== undefined &&
        value !== null &&
        value.length !== 0) {
        sumAllFilledField += 1;
      }
    });
  });

  const percentFilledField = Math.ceil(
    (100 * sumAllFilledField) /
    (sumAllField !== 0 ? sumAllField : 1),
  );

  const R = 65;
  const circleProgress = 2 * Math.PI * R * (1 - (percentFilledField / 100));
  return (
    <Anchor offsetTop={80} >
      <div className={style.quality}>
        <div className="heading">
          Качество заполнения
        </div>
        <div className={style.circle}>
          <svg width="50" height="50" viewBox="0 0 150 160">
            <circle transform="rotate(-90)" r={R} cx="-80" cy="80" />
            <circle
              transform="rotate(-90)"
              r={R}
              cx="-80"
              cy="80"
              strokeDasharray={2 * Math.PI * R}
              strokeDashoffset={circleProgress}
            />
          </svg>
          <span className={style.number}>{percentFilledField}</span>
        </div>
      </div>
      {
          sections.map((section, index) => {
            let countFilledField = 0;
            const allCountField = Object.keys(selectValues[section.component]).length;

            const onClickHandler = () => {
              Object.keys(pagePanelDomElements).map(id => {
                if (pagePanelDomElements[id].getAttribute('data-anchor') === section.anchor) {
                  myMove(pagePanelDomElements[id].offsetTop);
                }
              });
            };

            Object.keys(selectValues[section.component]).map((key) => {
              const value = selectValues[section.component][key];

              if (value !== undefined &&
                  value !== null &&
                  value.length !== 0) {
                countFilledField += 1;
              }
            });

            return (
              <Link href={`#${section.anchor}`} key={index} title={
                <span>
                  <span className={style.anchorText}>
                    {section.title}
                  </span>
                  {
                    (countFilledField === allCountField) ?
                      <span className={style.quantityStatus} /> :
                      ''
                  }

                  <span className={style.quantity}>
                    {countFilledField}/{allCountField}
                  </span>
                </span>
              } />
            );
          })
        }
      <div className="page-aside__buttons">
      {
        onSubmit && onDraft ?
          <div className="page-aside__buttons">
            <button className="btn page-aside__buttons__btn" onClick={onSubmit}>Разместить</button>
            <button className="btn page-aside__buttons__btn" onClick={onDraft}>В черновик</button>
          </div> : ''
      }
      </div>
    </Anchor>
  );
}

export default LeftPanelTest;