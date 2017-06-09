import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

class DetailPage extends React.Component {

  componentDidMount() {
    document.addEventListener('click', this.onOuterClick);
    document.addEventListener('keyup', this.onOuterClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOuterClick);
    document.removeEventListener('keyup', this.onOuterClick);
  }

  onOuterClick = (event) => {
    const clickEvent = event.type === 'click' && event.target === this.detailPage;
    const keyupEvent = event.type === 'keyup' && event.which === 27;

    if (clickEvent || keyupEvent) {
      this.props.triggerDetailPage();
    }
  };

  render() {
    const { id } = this.props;
    return (
      <div className="detail-page" ref={(node) => { this.detailPage = node; }}>
        <div className="detail-page-aside">

          <div className="detail-page-header">
            <div className="detail-page-header__title">Частный детский сад в Московском районе</div>

            <div className="detail-page-status">
              <span className="detail-page-status__label">Черновик</span>
              <span className="detail-page-status__last-update">Последнее изменение: 23.02.10</span>
            </div>

            <div className="detail-page-menu">
              <span className="detail-page-menu__item active">
                <span className="detail-page-menu__link">Основное</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Финансы</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Штат</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Помещение</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Активы</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Продавец</span>
              </span>
              <span className="detail-page-menu__item">
                <span className="detail-page-menu__link">Комментарии</span>
              </span>
            </div>

          </div>

          <div className="detail-page-body">
            <div className="detail-page-blank">

              <div className="detail-page__gallery detail-page-gallery">image</div>

              <div className="detail-page-main">

                <div className="detail-page-main__info">

                  <div className="detail-page-info">
                    <div className="detail-page-info__key">ID</div>
                    <div className="detail-page-info__value">994592</div>
                  </div>

                  <div className="detail-page-info">
                    <div className="detail-page-info__key">Город</div>
                    <div className="detail-page-info__value">Санкт-Петербруг</div>
                  </div>

                  <div className="detail-page-info">
                    <div className="detail-page-info__key">Категория</div>
                    <div className="detail-page-info__value">Услуги консалтинга</div>
                  </div>

                  <div className="detail-page-info">
                    <div className="detail-page-info__key">Преимущество</div>
                    <div className="detail-page-info__value">Не хватает оборотных средств</div>
                  </div>

                  <div className="detail-page-info">
                    <div className="detail-page-info__key">Причина продажи</div>
                    <div className="detail-page-info__value">Дорогие активы</div>
                  </div>

                </div>

                <div className="detail-page__label">Описание</div>
                <div className="detail-page-main__text">
                  Продается хостел в 200 метрах от Московского вокзала. Нежилой фонд
                  Хостел находится в центре Санкт-Петербурга, рядом с Московским вокзалом и
                  станцией метро «Площадь Восстания». Размещение объекта позволяет вести успешную
                  политику по привлечению групп туристов.
                </div>

                <span className="more-trigger">Показать полностью <Icon icon="arrow-right" className="more-trigger__arrow" width={8} height={8} /></span>

              </div>
            </div>

            <div className="detail-page-blank">
              <div className="detail-page__title">Финансы</div>
              <div className="detail-page-info">
                <div className="detail-page-info__key">Чистая прибыль в месяц</div>
                <div className="detail-page-info__value">51 000 ₽ / мес</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Окупаемость</div>
                <div className="detail-page-info__value">31 месяц</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Среднемесячные обороты</div>
                <div className="detail-page-info__value">376 000 ₽ / мес</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Среднемесячные расходы</div>
                <div className="detail-page-info__value">51 000 ₽ / мес</div>
              </div>
            </div>

            <div className="detail-page-blank">
              <div className="detail-page__title">Штат</div>
              <div className="detail-page-info">
                <div className="detail-page-info__key">Количество работников</div>
                <div className="detail-page-info__value">3</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Фонд зп</div>
                <div className="detail-page-info__value">25 000 ₽ / мес</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Дополнительная информация</div>
                <div className="detail-page-info__value">Они рукожопые, поэтому можно платить мало и редко</div>
              </div>
            </div>

            <div className="detail-page-blank">
              <div className="detail-page__title">Помещение</div>
              <div className="detail-page-info">
                <div className="detail-page-info__key">В собственность</div>
                <div className="detail-page-info__value">3</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Информация об арендодателе</div>
                <div className="detail-page-info__value">Собственность</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Дополнительная информация</div>
                <div className="detail-page-info__value">
                  административное здание 477,9 кв.м,
                  гостевой дом — 170 кв.м, и 180 кв.м русская баня 75 кв.м,
                  летний домик 35 кв.м, беседка 30 кв.м, веранда 24 кв.м.
                  Летний бассейн 12х4, закрытый бассейн 3х2, детская площадка.
                  Хоз.постройки: прачечная, мастерская, 2 гаража. Земельный участок3400 кв.м.
                </div>
              </div>
            </div>

            <div className="detail-page-blank">
              <div className="detail-page__title">Активы</div>
              <div className="detail-page-info">
                <div className="detail-page-info__key">Правовая форма</div>
                <div className="detail-page-info__value">ИП</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Доля</div>
                <div className="detail-page-info__value">100 %</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Возраст бизнеса</div>
                <div className="detail-page-info__value">3 года</div>
              </div>
            </div>

            <div className="detail-page-blank">
              <div className="detail-page__title">Продавец</div>
              <div className="detail-page-info">
                <div className="detail-page-info__key">ФИО</div>
                <div className="detail-page-info__value">Попов И.</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Телефон</div>
                <div className="detail-page-info__value">+7 999 223 11 31</div>
              </div>

              <div className="detail-page-info">
                <div className="detail-page-info__key">Почта</div>
                <div className="detail-page-info__value">pagac_israel@yahoo.com</div>
              </div>
            </div>

          </div>

        </div>
        <div>
          {`detail-page ${id}`}
        </div>
      </div>
    );
  }
}

DetailPage.propTypes = {
  id: PropTypes.string.isRequired,
  triggerDetailPage: PropTypes.func.isRequired,
};

export default DetailPage;
