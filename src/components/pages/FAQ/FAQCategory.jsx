import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';

const FAQCategory = (props) => {
  const {
    ICO: icon,
    ITEMS: items,
    NAME: name,
    URL: url,
  } = props;

  return (
    <div className="faq__category faq-category">

      <Icon icon={icon || 'info'} width="20" height="20" className="faq-category__icon" />

      <div className="faq-category__title">{name}</div>

      <div className="faq-category__questions">
        {
          items.map((item) => {
            const { ID: itemId, NAME: itemName, URL: itemUrl } = item;
            return (
              <div className="faq-category__question" key={`faq-category-question-${itemId}`}>
                <Link to={itemUrl} className="faq-category__link">{itemName}</Link>
              </div>
            );
          })
        }
      </div>

      <IsActive active={items.length > 2}>
        <Link to={url} className="faq-category__more">Смотреть все &gt;</Link>
      </IsActive>

    </div>
  );
};

FAQCategory.defaultProps = {
  ICO: 'info',
};

FAQCategory.propTypes = {
  ITEMS: PropTypes.arrayOf(PropTypes.object).isRequired,
  NAME: PropTypes.string.isRequired,
  URL: PropTypes.string.isRequired,
  ICO: PropTypes.string,
};

export default FAQCategory;
