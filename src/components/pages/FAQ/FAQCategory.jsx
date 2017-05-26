import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/Icon';

export default function (props) {

  const {
    NAME: name,
    ITEMS: items,
    URL: url,
  } = props;

  return (
    <div className="faq__category faq-category">

      <Icon icon="info" width="20" height="20" className="faq-category__icon" />

      <div className="faq-category__title">{name}</div>

      {
        items.map(item => (
          <div className="faq-category__question" key={`faq-category-question-${item.ID}`}>
            <Link to={item.URL}>{item.NAME}</Link>
          </div>
        ))
      }

      <Link to={url} className="faq-category__more">Смотреть все &gt;</Link>

    </div>
  )
}
