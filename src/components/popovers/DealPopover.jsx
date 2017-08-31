import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';
import PopoverBaseHOC from 'components/popovers/PopoverBaseHOC';
import { Link } from 'react-router';

class DealPopover extends React.Component {

  openDetailPage = () => {
    this.props.openDetailPage(this.props.id);
  };

  render() {
    const { providePopover, id } = this.props;

    return (
      <div className="popover popover_visible popover_without-tabs popover_last popover_md" ref={node => providePopover(node)}>
        <div className="popover-body">
          <div className="popover-content-wrapper no-padding-top no-padding-bottom active">
            <ul className="popover-deal-list">
              <div className="popover-deal-item" onClick={this.openDetailPage}>
                <Icon className="popover-deal-list-icon" icon="eye" width={16} height={16} />
                Смотреть
              </div>
              <a href={`${id}/edit/`} className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="edit" width={16} height={16} />
                Редактировать
              </a>
              <div className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="copy" width={16} height={16} />
                Скопировать
              </div>
              <div className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="share" width={16} height={16} />
                Поделиться
              </div>
              <div className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="rocket" width={16} height={16} />
                Создать сделку
              </div>
              <div className="popover-deal-item">
                <Icon className="popover-deal-list-icon" icon="close" width={16} height={16} />
                Удалить
              </div>
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
  openDetailPage: PropTypes.func.isRequired,
};

export default PopoverBaseHOC(DealPopover);
