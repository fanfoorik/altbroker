import React from 'react';
import { Link } from 'react-router';
import PropTypes from 'prop-types';
import htmlParser from 'html-react-parser';

import getHeaders from 'utils/getHeaders';
import handleError from 'utils/handleError';
import ajax from 'utils/ajax';
import { apiUrl } from 'utils/urls';

class FAQList extends React.Component {

  constructor() {
    super();

    this.state = {
      questions: [],
    };
  }

  componentDidMount() {
    this.fetchFaqList();
  }

  fetchFaqList = () => {
    const { listId } = this.props.params;

    ajax.get(
      `${apiUrl}faq/${listId}/`,
      {
        headers: getHeaders(),
      })
      .then(res => res.data)
      .then((data) => {
        const { ITEMS: questions } = data.ANSWER.CONTENT[0];
        this.setState({ questions });
      })
      .catch(error => handleError(error));
  };

  render() {
    const { questions } = this.state;
    const { questionId } = this.props.params;

    return (
      <div className="faq">

        <div className="h1">Помощь</div>

        <div className="faq-list">
          {
            questions.map(item => (
              <div
                key={`question-id-${item.ID}`}
                className={`faq-list__item${questionId === item.ID ? ' faq-list__item_active' : ''}`}
              >
                <Link to={item.URL} className="faq-list__link">{item.NAME}</Link>
                <div className="faq-list__answer">
                  {
                    htmlParser(item.PREVIEW_TEXT)
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

FAQList.propTypes = {
  params: PropTypes.shape({
    listId: PropTypes.string,
    questionId: PropTypes.string,
  }).isRequired,
};

export default FAQList;
