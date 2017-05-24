import React from 'react';
import PropTypes from 'prop-types';

import DropTip from 'components/DropTip/DropTip';
import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';

export default function NavNotifications(props) {
  const { notifications, triggerNotifications } = props;

  return (
    <div className="notifications">
      <div
        className={notifications.active ? 'top-trigger active' : 'top-trigger'}
        onClick={triggerNotifications}
      >
        <Icon className="top-trigger__icon" icon="bell" width="18" height="21" />
      </div>

      <IsActive active={notifications.active}>
        <DropTip className="notifications__droptip" handleOuterClick={triggerNotifications}>
          <div className="droptip__header notifications__header clear">
            <div className="notifications__title">Уведомления</div>
          </div>
          <div className="droptip__content clear">
            <div className="notifications__empty">
              <Icon fill="#e1e5e9" className="mb_24" icon="bell" width="86" height="99" viewBox="0 0 86 99" />
              <div>Новых уведомлений нет</div>
            </div>
          </div>
        </DropTip>
      </IsActive>
    </div>
  );
}

NavNotifications.propTypes = {
  notifications: PropTypes.shape({
    active: PropTypes.bool,
    data: PropTypes.array,
    error: PropTypes.object,
  }).isRequired,
  triggerNotifications: PropTypes.func.isRequired,
};
