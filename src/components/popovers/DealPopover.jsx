import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';

class DealPopover extends React.Component {

  triggerDetailPage = () => {
    this.props.triggerDetailPage(this.props.id);
  };

  render() {
    const { providePopover } = this.props;

    return (
      <div className="popover popover_visible popover_without-tabs popover_last popover_md" ref={node => providePopover(node)}>
        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active">
            <ul className="popover-deal-list">
              <li className="popover-deal-item" onClick={this.triggerDetailPage}>
                <Icon className="popover-deal-list-icon" icon="eye" width={16} height={16} />
                Смотреть
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="edit" width={16} height={16} />
                Редактировать
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="copy" width={16} height={16} />
                Скопировать
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="share" width={16} height={16} />
                Поделиться
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="rocket" width={16} height={16} />
                Создать сделку
              </li>
              <li className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="close" width={16} height={16} />
                Удалить
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

DealPopover.propTypes = {
  id: PropTypes.string.isRequired,
  providePopover: PropTypes.func.isRequired,
  triggerDetailPage: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DealPopover);
