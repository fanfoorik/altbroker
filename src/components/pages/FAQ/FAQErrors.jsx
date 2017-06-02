import React from 'react';
import PropTypes from 'prop-types';

function FAQErrors(props) {
  const { errors } = props;

  return (
    <div className="faq-errors">
      {
        errors.map((item, index) => {
          const ind = index;
          const { MESSAGE: message } = item;

          return <div key={`faq-error-${ind}`} className="faq-errors__item">{message}</div>;
        })
      }
    </div>
  );
}

FAQErrors.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FAQErrors;
