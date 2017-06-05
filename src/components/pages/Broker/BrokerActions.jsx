import React from 'react';

import FooterDelegatePopover from 'components/popovers/FooterDelegatePopover';
import StatusPopover from 'components/popovers/StatusPopover';

export default function BrokerActions() {
  return (
    <div className="table-actions">
      <div className="table-actions__checkbox">
        <label className="checkbox" htmlFor="checkbox-select-all"> Выделить всё
          <input type="checkbox" id="checkbox-select-all" />
          <div className="checkbox_indicator" />
        </label>
      </div>

      <div className="table-actions__items">
        <span className="table-actions__title">С помечеными:</span>
        <ul className="table-actions__list">
          <li className="table-actions__item popover-parent">
            передать
            <FooterDelegatePopover />
          </li>
          <li className="table-actions__item">создать подборку</li>
          <li className="table-actions__item popover-parent">
            изменить статус
            <StatusPopover />
          </li>
          <li className="table-actions__item">наблюдать</li>
        </ul>
      </div>
    </div>
  );
}
