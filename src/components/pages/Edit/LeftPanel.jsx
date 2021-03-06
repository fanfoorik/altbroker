import React from 'react';
import PropTypes from 'prop-types';

const pagePanelDomElements = document.getElementsByClassName('page-panel');

function myMove(posi) {
  let pos = window.pageYOffset;

  let id = (pos < posi) ? setInterval(top, 0) : setInterval(bottom, 0);
  
  const step = 50;
  const headerHeight = 20;


  function top() {
    if (pos >= posi) {
      clearInterval(id);
    } else {
      var pospre = pos;
      pos += step;

      if (pos >= posi) {
        window.scrollTo(pospre,  posi + headerHeight);
      } else {
        window.scrollTo(pospre,  pos);
      }
    }
  }

  function bottom() {
    if (pos <= posi) {
      clearInterval(id);
    } else {
      var pospre = pos;
      pos -= step;

      if (pos <= posi) {
        window.scrollTo(pospre,  posi + headerHeight);
      } else {
        window.scrollTo(pospre,  pos);
      }
    }
  }
}

window.onload = function() {
  const anchar = window.location.hash.substr(1);
  if (anchar) {
    Object.keys(pagePanelDomElements).map(id => {
      if (pagePanelDomElements[id].getAttribute('data-anchor') === anchar) {
        myMove(pagePanelDomElements[id].offsetTop);
      }
    });
  }
};

const LeftPanel = ({
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
    <div className="page-aside">
      <div className="page-aside__list">
        <div className="page-aside__quality">
          <div className="page-aside__quality_heading">
            Качество заполнения
          </div>
          <div className="page-aside__quality_diagrams">
            <div className="circle">
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
              <span className="circle__number">{percentFilledField}</span>
            </div>
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
              <span className="page-aside__item" onClick={onClickHandler} key={index}>
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
      {
        onSubmit && onDraft ?
          <div className="page-aside__buttons">
            <button className="btn page-aside__buttons__btn" onClick={onSubmit}>Разместить</button>
            <button className="btn page-aside__buttons__btn" onClick={onDraft}>В черновик</button>
          </div> : ''
      }
    </div>
  );
};

LeftPanel.propTypes = {
  selectValues: PropTypes.object,
  sections: PropTypes.array,
};

LeftPanel.defaultProps = {
  selectValues: {},
  sections: [],
};

export default LeftPanel;
