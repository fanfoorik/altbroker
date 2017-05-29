import React from 'react';
import PropTypes from 'prop-types';
import FAQCategory from './FAQCategory';
import FAQSearch from './FAQSearch';

class FAQ extends React.Component {

  componentDidMount() {
    //to do: run fetchFaq function here
  }

  render() {
    const { data } = this.props;

    return (
      <div className="faq">

        <div className="h1">Помощь</div>

        <FAQSearch />

        <div className="faq__categories clear">
          {
            data.map(item => <FAQCategory key={`faq-category-${item.ID}`} {...item} />)
          }
        </div>
      </div>
    );
  }
}

FAQ.defaultProps = {
  data: [
    {
      ID: '8104',
      NAME: 'Авторизация',
      URL: '/altbroker3/faq/8104/',
      ITEMS: [
        {
          ID: '985140',
          NAME: 'Как восстановить пароль?',
          URL: '/altbroker3/faq/8104/985140/',
          PREVIEW_TEXT: '',
          SELECTED: 'N',
        },
        {
          ID: '985147',
          NAME: 'Сколько попыток ввода пароля есть?',
          URL: '/altbroker3/faq/8104/985147/',
          PREVIEW_TEXT: '',
          SELECTED: 'N',
        },
        {
          ID: '9851477',
          NAME: 'У меня есть претензия, как с этим жить?',
          URL: '/altbroker3/faq/8104/985147/',
          PREVIEW_TEXT: '',
          SELECTED: 'N',
        },
      ],
    },
    {
      ID: '8105',
      NAME: 'Общие вопросы',
      URL: '/altbroker3/faq/8105/',
      ITEMS: [
        {
          ID: '985152',
          NAME: 'Что такое Patch Notes?',
          URL: '/altbroker3/faq/8105/985152/',
          PREVIEW_TEXT: '',
          SELECTED: 'N',
        },
      ],
    },
    {
      ID: '81052',
      NAME: 'Дополнительные вопросы',
      URL: '/altbroker3/faq/8105/',
      ITEMS: [
        {
          ID: '985152',
          NAME: 'Что делать когда голод не тетка?',
          URL: '/altbroker3/faq/8105/985152/',
          PREVIEW_TEXT: '',
          SELECTED: 'N',
        },
      ],
    },
  ],
};

FAQ.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FAQ;
