import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';

const FAQCategory = (props) => {
  const {
    NAME: name,
    ITEMS: items,
    URL: url,
  } = props;

  return (
    <div className="faq__category faq-category">

      <Icon icon="info" width="20" height="20" className="faq-category__icon" />

      <div className="faq-category__title">{name}</div>

      <div className="faq-category__questions">
        {
          items.map(item => (
            <div className="faq-category__question" key={`faq-category-question-${item.ID}`}>
              <Link to={item.URL} className="faq-category__link">{item.NAME}</Link>
            </div>
          ))
        }
      </div>

      <IsActive active={items.length > 2} >
        <Link to={url} className="faq-category__more">Смотреть все &gt;</Link>
      </IsActive>

    </div>
  );
};

FAQCategory.propTypes = {
  NAME: PropTypes.string.isRequired,
  ITEMS: PropTypes.arrayOf(PropTypes.object).isRequired,
  URL: PropTypes.string.isRequired,
};

export default FAQCategory;

