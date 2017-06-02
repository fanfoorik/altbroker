import React from 'react';

import IsActive from 'utils/IsActive';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import ajax from 'utils/ajax';
import { apiUrl, indexUrl } from 'utils/urls';

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
    ajax.get(
      `${apiUrl}faq/getask/`,
      {
        headers: getHeaders(),
      })
      .then(res => res.data)
      .then((data) => {
        const { SECTIONS_LIST: options } = data.ANSWER.CONTENT;
        this.setState({ options });
      })
      .catch(error => handleError(error));
  };

  faqFormSubmit = (ev) => {
    ev.preventDefault();

    const title = ev.target.querySelector('.js-faq-form-title').value;
    const category = ev.target.querySelector('.js-faq-form-category').value;
    const message = ev.target.querySelector('.js-faq-form-message').value;

    ajax.post(
      `${apiUrl}faq/add/`,
      {
        NAME: title,
        SECTION: category,
        TEXT: message,
      },
      {
        headers: getHeaders(),
      },
    )
      .then(res => res.data)
      .then((data) => {
        const { SUCCESS: success, ERRORS: errors } = data.ANSWER;

        if (success) {
          this.setState({ cover: true });
        } else {
          this.setState({ errors });
        }
      })
      .catch(error => handleError(error));
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

        <IsActive active={cover} component={FAQCover} />

        <IsActive active={!cover} component={FAQForm} data={formData} />

      </div>
    );
  }
}

export default FAQAddQuestions;
