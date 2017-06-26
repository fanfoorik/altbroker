import PropTypes from 'prop-types';
import React from 'react';
import { compose } from 'redux';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import PopoverWithTabsHOC from 'components/popovers/PopoverWithTabsHOC';

class CommentsPopover extends React.Component {

  render() {
    const { providePopover } = this.props;

    return (
      <div className="popover popover_visible popover_md" ref={node => providePopover(node)}>
        <div className="popover-header js-target-trigger">
          <div className="popover-header__tab active js-popover-tab">Брокеры</div>
          <div className="popover-header__tab js-popover-tab">Клиенты</div>
        </div>

        <div className="popover-body">
          <div className="popover-content-wrapper no-padding active js-popover-tab">
            <ul className="popover-comments js-scrollable">
              <li className="popover-comments__item">
                <span className="popover-comments__name">Антон Васильев</span>
                <Icon icon="check" width={16} height={16} />
                <span className="popover-comments__date">Вчера</span>
                <div className="popover-comments__text">Леша отличный мужик. Шарит в теме, отлично аргуменирет.</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Иван Сервер</span>
                <span className="popover-comments__date">13 мая</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Петр Сервер</span>
                <span className="popover-comments__date">13 января</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Коля Сервер</span>
                <span className="popover-comments__date">13 мая</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
            </ul>

            <div className="popover-comments__add-wrapper">
              <input
                className="popover-input popover-input_comments"
                placeholder="Ваш комментарий..."
                type="text"
              />
              <Icon icon="send-message" width={16} height={16} />
            </div>
          </div>

          <div className="popover-content-wrapper no-padding js-popover-tab">
            <ul className="popover-comments popover-comments_clients js-scrollable">
              <li className="popover-comments__item">
                <span className="popover-comments__name">Антон Васильев</span>
                <Icon icon="check" width={16} height={16} />
                <span className="popover-comments__date">Вчера</span>
                <div className="popover-comments__text">Леша отличный мужик. Шарит в теме, отлично аргуменирет.</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Иван Сервер</span>
                <span className="popover-comments__date">13 мая</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Петр Сервер</span>
                <span className="popover-comments__date">13 января</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
              <li className="popover-comments__item">
                <span className="popover-comments__name">Коля Сервер</span>
                <span className="popover-comments__date">13 мая</span>
                <div className="popover-comments__text">Парни, аккуратнее!</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

CommentsPopover.propTypes = {
  providePopover: PropTypes.func.isRequired,
};

export default compose(PopoverBaseHOC, PopoverWithTabsHOC)(CommentsPopover);
