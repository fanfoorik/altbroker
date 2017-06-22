import React from 'react';
import { browserHistory } from 'react-router';

import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';
import Autocomplete from 'react-autocomplete';

import ajax from 'utils/ajax';
import { indexUrl } from 'utils/urls';

class FAQSearch extends React.Component {

  constructor() {
    super();
    this.state = {
      focused: false,
      items: [],
      value: '',
    };
  }

  onChange = (ev) => {
    this.setState({ value: ev.target.value });

    ajax.post(`faq/search/`,
      { STRING_SEARCH: ev.target.value })
      .then((data) => {
        const error = data.ERRORS;

        if (error.length) {
          this.setState({ items: [] });
        } else {
          const answer = data.ANSWER;

          if (answer.length) {
            this.setState({ items: answer });
          } else {
            this.setState({
              items: [{
                notFound: true,
                text: 'Ничего похожего ещё никто не искал!',
                extraText: 'Задайте вопрос самостоятельно >',
              }],
            });
          }
        }
      });
  };

  onSelect = (value, item) => {
    const {
      IBLOCK_SECTION_ID: category,
      ID: id,
      notFound,
    } = item;

    if (notFound) {
      browserHistory.push(`${indexUrl}faq/getask/`);
    } else {
      browserHistory.push(`${indexUrl}faq/${category}/${id}/`);
    }
  };

  onFocus = () => this.setState({ focused: true });

  onBlur = () => this.setState({ focused: false });

  getItemValue = (item) => {
    if (item.notFound) {
      return item.text;
    }
    return item.NAME;
  };

  cleanSearchValue = () => {
    this.setState({
      value: '',
      items: [],
    });
  };

  renderItem = (item, isHighlighted) => {
    const {
      IBLOCK_SECTION_TEXT: categoryName,
      NAME: name,
      ICO: icon,
      notFound,
      text,
      extraText,
    } = item;

    if (notFound) {
      return (
        <div className={`faq-autocomplete__item ${isHighlighted ? 'faq-autocomplete__item_active' : ''}`}>
          <div className="faq-autocomplete__title">{text}</div>
          <div className="faq-autocomplete__extra-title">{extraText}</div>
          <div className="faq-autocomplete__404">404</div>
        </div>
      );
    }
    return (
      <div className={`faq-autocomplete__item ${isHighlighted ? 'faq-autocomplete__item_active' : ''}`}>
        <div className="faq-autocomplete__title">{name}</div>
        <div className="faq-autocomplete__category">{categoryName}</div>
        <div className="faq-autocomplete__icon">
          <Icon icon={icon || 'info'} width={24} height={24} />
        </div>
      </div>
    );
  };

  renderMenu = items => (
    <div className="faq-autocomplete" children={items} />
  );

  render() {
    const { focused, items, value } = this.state;

    return (
      <div className="faq__search faq-search">
        <div className="faq-search__control faq-search__control_lens">
          <Icon icon="lens" width="19" height="19" className="faq-search__lens-icon" />
        </div>

        <Autocomplete
          getItemValue={this.getItemValue}
          items={items}
          renderItem={this.renderItem}
          renderMenu={this.renderMenu}
          value={value}
          wrapperStyle={{}}
          wrapperProps={{
            className: `faq-autocomplete__bar ${focused ? 'faq-autocomplete__bar_focused ' : ''}`,
          }}
          inputProps={{
            className: 'input faq-search__input',
            onFocus: this.onFocus,
            onBlur: this.onBlur,
          }}
          onChange={this.onChange}
          onSelect={this.onSelect}
        />

        <IsActive active={!!value.length}>
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
