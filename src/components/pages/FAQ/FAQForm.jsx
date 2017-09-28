import React from 'react';
import PropTypes from 'prop-types';
import FAQErrors from './FAQErrors';
import BaseEditor from 'components/Editor/BaseEditor';

class FAQForm extends React.Component {
  handleEditorChange = (value) => {
    this.props.data.handleFormChange('message', value);
  };

  handleFieldChange = (event) => {
    const { value, dataset: { name } } = event.currentTarget;
    this.props.data.handleFormChange(name, value);
  };

  render() {
    const {
      errors,
      options,
      faqFormSubmit,
      values: { name, category, message } } = this.props.data;

      // console.log('options', options);
      // console.log('name', name, 'category', category, 'message', message);

    // const { value } = this.state;
    // console.log(draftTextLength(value));
    // console.log(draftToHtml(value));

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
                <input value={name} className="input" type="text" onChange={this.handleFieldChange} data-name="name" />
              </label>
            </div>
            <div className="faq-form__row">
              <label htmlFor="faq-form-field-2">
                <span className="faq-form__label">Укажите область</span>

                <span className="selectbox">
                  <select value={category} className="select-lg" onChange={this.handleFieldChange} data-name="category">
                    {
                      options.map((item) => {
                        const { ID, NAME } = item;
                        return <option key={`category-id-${ID}`} value={ID}>{NAME}</option>;
                      })
                    }
                  </select>
                </span>
              </label>
            </div>

            <div className="faq-form__row">
              <label htmlFor="faq-form-field-3">
                <span className="faq-form__label">Расскажите о проблеме подробнее</span>
                <BaseEditor value="" html={message} getHtml={this.handleEditorChange} />
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
}

FAQForm.propTypes = {
  data: PropTypes.shape({
    options: PropTypes.array.isRequired,
    errors: PropTypes.array.isRequired,
    faqFormSubmit: PropTypes.func.isRequired,
    handleFormChange: PropTypes.func.isRequired,
  }).isRequired,
};

export default FAQForm;
