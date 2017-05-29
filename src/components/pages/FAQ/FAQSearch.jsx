import React from 'react';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';

class FAQSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange = (ev) => {
    this.setState({ value: ev.target.value });
  };

  cleanSearchValue = () => {
    this.setState({ value: '' });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="faq__search faq-search">
        <div className="faq-search__control faq-search__control_lens">
          <Icon icon="lens" width="19" height="19" className="faq-search__lens-icon" />
        </div>

        <input
          type="text"
          value={value}
          id="faq-search__input"
          className="input faq-search__input"
          placeholder="Введите ваш вопрос или ключевое слово"
          onChange={this.handleChange}
        />

        <IsActive active={value.length >= 3}>
          <div
            className="faq-search__control faq-search__control_clean"
            onClick={this.cleanSearchValue}
            role="button"
            tabIndex="0"
          >
            <Icon icon="close" width="19" height="19" className="faq-search__clean-icon" />
          </div>
        </IsActive>
      </div>
    );
  }
}

export default FAQSearch;
