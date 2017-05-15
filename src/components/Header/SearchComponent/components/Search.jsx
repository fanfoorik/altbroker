import React from 'react';

import Icon from 'components/Icon';

export default class Notifications extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      category: 'broker',
    };
  }

  componentDidMount() {
    document.addEventListener('keyup', this.searchClose);
    this.categs = document.querySelectorAll('.search-categs__option');
    this.refs.search__input.focus();
  }

  componentWillUnmount() {
    document.removeEventListener('keyup', this.searchClose);
  }

  setCategory = (ev) => {
    const activeOption = [].filter.call(this.categs, item => item.classList.contains('active'));

    if (activeOption[0] !== ev.target) {
      activeOption[0].classList.remove('active');
      ev.target.classList.add('active');

      const category = ev.target.getAttribute('data-option');

      this.setState({
        ...this.state,
        category,
      });

      this.refs.search__input.focus();
    }
  }

  setValue = (ev) => {
    this.setState({
      ...this.state,
      value: ev.target.value,
    });
  }

  searchClose = (ev) => {
    if (ev.which === 27) {
      this.props.handleSearchClose();
    }
  }

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
                ref="search__input"
              />
            </div>
          </div>

          <div className="search-categs">
            <div className="search__center">
              <div className="search-categs__label">Раздел поиска:</div>
              <span
                className="search-categs__option active"
                onClick={this.setCategory}
                data-option="broker"
              >Брокер</span>
              <span className="search-categs__option" onClick={this.setCategory} data-option="deal">Сделки</span>
              <span
                className="search-categs__option"
                onClick={this.setCategory}
                data-option="analitics"
              >Аналитика</span>
              <span className="search-categs__option" onClick={this.setCategory} data-option="progress">Развитие</span>
              <span
                className="search-categs__option"
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
