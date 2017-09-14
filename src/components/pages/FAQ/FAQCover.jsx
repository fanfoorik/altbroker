import React from 'react';
import { Link } from 'react-router';
import Icon from 'components/Icon';
import { indexUrl } from 'utils/urls';

export default function () {
  return (
    <div className="faq-cover">

      <div className="faq-cover__ok-tick">
        <Icon className="faq-cover__icon" icon="check" width="46" height="46" />
      </div>

      <div className="faq-cover__text">
        Наши разработчики будут думать над решением вашей проблемы. <br />
        Ответ мы вышлем вам на почту.
      </div>

      <Link to={`${indexUrl}broker/gb/`} className="faq-cover__back">К списку объектов готового бизнеса</Link>

    </div>
  );
}
