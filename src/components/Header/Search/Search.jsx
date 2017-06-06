import React from 'react';

import Icon from 'components/Icon';

export default class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      category: 'broker',
      value: '',
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.searchClose);
    this.categs = Array.from(document.querySelectorAll('.js-category'));
    this.searchInput.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.searchClose);
  }

  setCategory = (event) => {
    const target = event.target;
    const activeItem = this.categs.filter(item => item.classList.contains('active'));

    if (activeItem[0] !== target) {
      activeItem[0].classList.remove('active');
      target.classList.add('active');
      const category = target.dataset.option;

      this.setState({
        ...this.state,
        category,
      });

      this.searchInput.focus();
    }
  };

  setValue = (event) => {
    this.setState({
      ...this.state,
      value: event.target.value,
    });
  };

  searchClose = (event) => {
    const isEscKey = event.which === 27;
    if (isEscKey) this.props.handleSearchClose();
  };

  render() {
    return (
      <div className="search">
        <div className="search__content">
          <div className="search__center clear">
            <div className="search__close" onClick={() => this.props.handleSearchClose()}>
              Отменить
              <Icon className="search__close-icon" icon="close" width="19" height="19" />
            </div>
            <div className="search__icon top-trigger">
              <Icon className="search__icon-icon" icon="lens" width="19" height="20" />
            </div>
            <div className="search__text">
              <input
                className="search__input"
                value={this.state.value}
                onChange={this.setValue}
                type="text"
                placeholder="Что вы ищите?"
                ref={(c) => { this.searchInput = c; }}
              />
            </div>
          </div>

          <div className="search-categs">
            <div className="search__center">
              <div className="search-categs__label">Раздел поиска:</div>
              <span
                className="search-categs__option js-category active"
                onClick={this.setCategory}
                data-option="broker"
              >Брокер</span>
              <span className="search-categs__option js-category" onClick={this.setCategory} data-option="deal">Сделки</span>
              <span
                className="search-categs__option js-category"
                onClick={this.setCategory}
                data-option="analitics"
              >Аналитика</span>
              <span className="search-categs__option js-category" onClick={this.setCategory} data-option="progress">Развитие</span>
              <span
                className="search-categs__option js-category"
                onClick={this.setCategory}
                data-option="management"
              >Управление</span>
            </div>
          </div>

        </div>

        <div className="search__overlay" onClick={() => this.props.handleSearchClose()} />
      </div>
    );
  }
}
