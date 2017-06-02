import React from 'react';

import ajax from 'utils/ajax';
import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import { apiUrl } from 'utils/urls';

import FAQCategory from './FAQCategory';
import FAQSearch from './FAQSearch';

class FAQ extends React.Component {

  constructor() {
    super();

    this.state = {
      category: [],
    };
  }

  componentDidMount() {
    this.fetchFaq();
  }

  fetchFaq = () => {
    ajax.get(
      `${apiUrl}faq/`,
      {
        headers: getHeaders(),
      })
      .then(res => res.data)
      .then((data) => {
        this.setState({ category: data.ANSWER.CONTENT });
      })
      .catch(error => handleError(error));
  };

  render() {
    const { category } = this.state;

    return (
      <div className="faq">

        <div className="h1">Помощь</div>

        <FAQSearch />

        <div className="faq__categories clear">
          {
            category.map(item => <FAQCategory key={`faq-category-${item.ID}`} {...item} />)
          }
        </div>
      </div>
    );
  }
}

export default FAQ;
