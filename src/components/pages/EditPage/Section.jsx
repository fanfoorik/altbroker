import React from 'react';

const Section = ({
  children,
  title,
  onSubmit,
}) => {
  return (
    <div className="page-panel" data-anchor="basic">
      <div className="page-panel-title">
        <span className="page-panel-title__heading">{title}</span>
        <span className="block-right">
          <span className="page-panel-title__status quantity-status" />
          <span className="page-panel-title__quantity">7/7</span>
        </span>
      </div>
      <form className="edit-form" onSubmit={onSubmit}>
        {children}
        <button className="btn" type="submit">Сохранить</button>
      </form>
    </div>
  );
};

export default Section;
