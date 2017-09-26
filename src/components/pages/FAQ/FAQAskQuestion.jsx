import React from 'react';
import ajax from 'utils/ajax';
import FAQCover from './FAQCover';
import FAQForm from './FAQForm';

class FAQAddQuestions extends React.Component {

  constructor() {
    super();

    this.state = {
      cover: false,
      options: [],
      errors: [],
    };
  }

  componentDidMount() {
    this.fetchFaqFormData();
  }

  fetchFaqFormData = () => {
    ajax.get('faq/getask/')
      .then((data) => {
        const { SECTIONS_LIST: options } = data.ANSWER.CONTENT;
        this.setState({ options });
      });
  };

  faqFormSubmit = (ev) => {
    ev.preventDefault();

    const title = ev.target.querySelector('.js-faq-form-title').value;
    const category = ev.target.querySelector('.js-faq-form-category').value;
    const message = ev.target.querySelector('.js-faq-form-message').value;

    ajax.post('faq/add/',
      {
        NAME: title,
        SECTION: category,
        TEXT: message,
      },
    )
      .then((data) => {
        const { SUCCESS: success, ERRORS: errors } = data.ANSWER;

        if (success) {
          this.setState({ cover: true });
        } else {
          this.setState({ errors });
        }
      });
  };

  render() {
    const { cover, options, errors } = this.state;

    const formData = {
      options,
      errors,
      faqFormSubmit: this.faqFormSubmit,
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
