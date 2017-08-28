import React from 'react';
import PropTypes from 'prop-types';

import Dropdown from 'components/Dropdown';
import Icon from 'components/Icon';
import ToplineTooltip from 'components/HeaderTooltip';

export default function NavNotifications(props) {
  const { isActive, triggerDropdown } = props;

  return (
    <div className="notifications">
      <div
        className={`top-trigger style-disabled${isActive ? ' active' : ''}`}
        onClick={triggerDropdown}
        role="button"
        tabIndex="0"
      >
        <Icon className="top-trigger__icon" icon="bell" width="18" height="21" />
      </div>

      {isActive &&
        <Dropdown triggerDropdown={triggerDropdown}>
          <ToplineTooltip className="notifications__droptip">
            <ToplineTooltip.Header className="notifications__header clear">
              <div className="notifications__title">Уведомления</div>
            </ToplineTooltip.Header>

            <div className="droptip__content clear">
              <div className="notifications__empty">
                <Icon fill="#e1e5e9" className="mb-24" icon="bell" width="86" height="99" viewBox="0 0 86 99" />
                <div>Новых уведомлений нет</div>
              </div>
            </div>
          </ToplineTooltip>
        </Dropdown>
      }

    </div>
  );
}

NavNotifications.defaultProps = {
  isActive: false,
  triggerDropdown: null,
};

NavNotifications.propTypes = {
  isActive: PropTypes.bool,
  triggerDropdown: PropTypes.func,
};
