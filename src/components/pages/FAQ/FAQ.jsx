import React from 'react';

import ajax from 'utils/ajax';

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
    ajax.get('faq/')
      .then((data) => {
        this.setState({ category: data.ANSWER.CONTENT });
      });
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
