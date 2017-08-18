import React from 'react';

export default () => {
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
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Основное</span>
        <span className="page-aside__item_status quantity-status"></span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Галерея</span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Финансы</span>
        <span className="page-aside__item_status quantity-status"></span>
        <span className="page-aside__item_quantity">10/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Штат</span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Помещение</span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Активы</span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <a href="" className="page-aside__item">
        <span className="page-aside__item_text">Продавец</span>
        <span className="page-aside__item_quantity">7/7</span>
      </a>
      <div className="page-aside__buttons">
        <button className="btn btn-primary" type="submit">Сохранить</button>
        <button className="btn" type="submit">В черновик</button>
      </div>
    </div>
  )
}