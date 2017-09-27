import React from 'react';
import ajax from 'utils/ajax';
import FAQCover from './FAQCover';
import FAQForm from './FAQForm';
import { htmlToDraft, draftToHtml, draftTextLength } from 'utils/editorUtils';

class FAQAddQuestions extends React.Component {

  constructor() {
    super();

    this.state = {
      cover: false,
      options: [],
      errors: [],
      values: {
        name: '',
        category: '',
        message: htmlToDraft(''),
      },
    };
  }

  componentDidMount() {
    this.fetchFaqFormData();
  }

  handleFormChange = (param, value) => {
    this.setState(() => { this.state.values[param] = value; });
  };

  fetchFaqFormData = () => {
    ajax.get('faq/getask/')
      .then((data) => {
        const { SECTIONS_LIST: options } = data.ANSWER.CONTENT;
        this.setState({ options });
      });
  };

  faqFormSubmit = (ev) => {
    ev.preventDefault();

    // const title = ev.target.querySelector('.js-faq-form-title').value;
    // const category = ev.target.querySelector('.js-faq-form-category').value;
    // const message = ev.target.querySelector('.js-faq-form-message').value;
    const { name, category, message } = this.state.values;

    ajax.post('faq/add/',
      {
        NAME: name,
        SECTION: category,
        TEXT: draftTextLength(message) ? draftToHtml(message) : '',
      },
    )
      .then((data) => {
        const { SUCCESS, ERRORS } = data.ANSWER;

        if (SUCCESS) {
          this.setState({ cover: true });
        } else {
          this.setState({ ERRORS });
        }
      });
  };

  render() {
    const { cover, options, errors, values } = this.state;

    const formData = {
      options,
      errors,
      values,
      faqFormSubmit: this.faqFormSubmit,
      handleFormChange: this.handleFormChange,
    };

    return (
      <div className="faq">
        {cover &&
          <FAQCover />
        }

        {!cover &&
          <FAQForm data={formData} />
        }

      </div>
    );
  }
}

export default FAQAddQuestions;
