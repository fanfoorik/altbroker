import React from 'react';
import PropTypes from 'prop-types';
import FAQErrors from './FAQErrors';
import BaseEditor from 'components/Editor/BaseEditor';

function FAQForm(props) {
  const { errors, options, faqFormSubmit } = props.data;

  return (
    <div>

      <div className="h1">Задать вопрос</div>

      <div className="faq-form">
        <form action="faq-form__fieldset" onSubmit={faqFormSubmit} name="frm">

          {!!errors.length &&
            <FAQErrors errors={errors} />
          }

          <div className="faq-form__row">
            <label htmlFor="faq-form-field-1">
              <span className="faq-form__label">Опишите вашу проблемы в двух словах</span>
              <input className="input js-faq-form-title" type="text" name="NAME" id="faq-form-field-1" />
            </label>
          </div>

          <div className="faq-form__row">
            <label htmlFor="faq-form-field-2">
              <span className="faq-form__label">Укажите область</span>

              <span className="selectbox">
                <select className="select-lg js-faq-form-category" id="faq-form-field-2">
                  {
                    options.map((item) => {
                      const { ID: id, NAME: name } = item;
                      return <option key={`category-id-${id}`} value={id}>{name}</option>;
                    })
                  }
                </select>
              </span>
            </label>
          </div>

          <div className="faq-form__row">
            <label htmlFor="faq-form-field-3">
              <span className="faq-form__label">Расскажите о проблеме подробнее</span>
              <BaseEditor />
            </label>
          </div>

          <div className="align-right">
            <button className="btn btn-primary" type="submit">Отправить</button>
          </div>

        </form>
      </div>
    </div>
  );
}

FAQForm.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.array.isRequired,
    errors: PropTypes.array.isRequired,
    faqFormSubmit: PropTypes.func.isRequired,
  }).isRequired,
};

export default FAQForm;
