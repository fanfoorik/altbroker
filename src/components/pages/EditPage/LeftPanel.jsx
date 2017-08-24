import React from 'react';

const LeftPanel = ({
  sections,
}) => {
  return (
    <div className="page-aside">
      <div className="page-aside__quality">
        <div className="page-aside__quality_heading">
          Качество заполнения
        </div>
        <div className="page-aside__quality_diagrams">
          <div className="circle">
            <svg width="50" height="50" viewBox="0 0 150 160">
              <circle transform="rotate(-90)" r="65" cx="-80" cy="80"/>
              <circle transform="rotate(-90)" r="65" cx="-80" cy="80"/>
            </svg>
            <span className="circle__number">56</span>
          </div>
        </div>
      </div>
      {
        sections.map((section, index) => {
          return (
            <a href="" className="page-aside__item" key={index}>
              <span className="page-aside__item_text">{section.title}</span>
              <span className="page-aside__item_status quantity-status" />
              <span className="page-aside__item_quantity">7/7</span>
            </a>
          );
        })
      }
    </div>
  );
};

export default LeftPanel;
