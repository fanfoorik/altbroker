import React from 'react';
import { Link } from 'react-router';
import { indexUrl } from 'utils/urls';

export default function () {
  return (
    <div className="breadcrumb clear">
      <div className="breadcrumb__item">
        <Link className="breadcrumb__item_link" to={`${indexUrl}broker/gb/`}>Бизнесы</Link>
      </div>
      <div className="breadcrumb__item breadcrumb-active">Добавление</div>
    </div>
  );
}
