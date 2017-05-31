import React from 'react';

import Icon from 'components/Icon';

export default function CommentsPopover() {
  return (
    <div className="popover popover_md">
      <div className="popover-header">
        <div className="popover-header__tab active">Брокеры</div>
        <div className="popover-header__tab">Клиенты</div>
      </div>

      <div className="popover-body">
        <div className="popover-content-wrapper no-padding active" data-id="01">
          <ul className="popover-comments">
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
              type="text"
              placeholder="Ваш комментарий..."
            />
            <Icon icon="send_message" width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
}
