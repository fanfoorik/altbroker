import React from 'react';
import { htmlToDraft, draftToHtml, draftTextLength } from 'utils/editorUtils';
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
      values: {
        name: '',
        category: '',
        message: htmlToDraft(''),
      },
    };
  }

  componentWillMount() {
    this.fetchFaqFormData();
  }

  handleFormChange = (param, value) => {
    this.setState(() => { this.state.values[param] = value; });
  };

  fetchFaqFormData = () => {
    ajax.get('faq/getask/')
      .then((data) => {
        const { SECTIONS_LIST: options } = data.ANSWER.CONTENT;
        this.setState(() => {
          this.state.options = options;
          this.state.values.category = options[0].ID;
          return this.state;
        });
      });
  };

  faqFormSubmit = (event) => {
    event.preventDefault();

    const { name, category, message } = this.state.values;

    ajax.post('faq/add/',
      {
        NAME: name,
        SECTION: category,
        TEXT: draftTextLength(message) ? draftToHtml(message) : '',
      },
    )
      .then((data) => {
        const { SUCCESS, ERRORS: errors } = data.ANSWER;

        if (SUCCESS) {
          this.setState({ cover: true });
        } else {
          this.setState({ errors });
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
