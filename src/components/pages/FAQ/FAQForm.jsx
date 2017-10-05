import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
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

  handleCategoryChange = data => (
    this.props.data.handleFormChange('category', (data ? data.ID : ''))
  );

  render() {
    const {
      errors,
      options,
      faqFormSubmit,
      values: { name, category, message } } = this.props.data;

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
                <span className="faq-form__label">Опишите вашу проблему в двух словах</span>
                <input value={name} className="input" type="text" onChange={this.handleFieldChange} data-name="name" />
              </label>
            </div>
            <div className="faq-form__row">
              <label htmlFor="faq-form-field-2">
                <span className="faq-form__label">Укажите область</span>
                <Select
                  backspaceRemoves={false}
                  className="faq-form__select"
                  clearable={false}
                  labelKey="NAME"
                  onChange={this.handleCategoryChange}
                  options={options}
                  value={category}
                  valueKey="ID"
                />
              </label>
            </div>

            <div className="faq-form__row">
              <label htmlFor="faq-form-field-3">
                <span className="faq-form__label">Расскажите о проблеме подробнее</span>
                <BaseEditor value={message} onChange={this.handleEditorChange} />
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
