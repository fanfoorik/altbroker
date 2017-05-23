import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';
import PropTypes from 'prop-types';
import React from 'react';

import Sticker from './Sticker';
import StickerNew from './StickerNew';

const notificationTimeout = 3000;

export default class Stickers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      deletedStickerId: null,
      notifications: OrderedSet(),
      count: 0,
    };
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
    document.addEventListener('keyup', this.onOutsideClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onOutsideClick);
    document.removeEventListener('keyup', this.onOutsideClick);
  }

  /**
   * Closes Stickers.
   * @param event
   */
  onOutsideClick = (event) => {
    const { which, target } = event;
    const stickers = this.stickersRef;
    const isEscKey = which === 27;
    const isEventOnNav = target.closest('.js-header') !== null && target.closest('.js-stickers') === null;
    const isEventOnOverlay = (target === stickers);

    if (isEscKey || isEventOnNav || isEventOnOverlay) {
      this.props.triggerStickers();
    }
  };

  /**
   * Restores last 'removed' sticker's active param.
   */
  handleRestoreSticker = (count) => {
    const { notifications } = this.state;
    this.setState({
      notifications: notifications.filter(item => item.key !== count),
    });
    this.props.restoreSticker(this.state.deletedStickerId);
  };

  /**
   * Adds new notification in notifications Set.
   */
  addNotification = () => {
    const { notifications, count } = this.state;
    const newCount = count + 1;

    return this.setState({
      count: newCount,
      notifications: notifications.add({
        action: 'Восстановить',
        dismissAfter: notificationTimeout,
        key: `notification-id-${newCount}`,
        message: 'Стикер снят.',
        onClick: () => this.handleRestoreSticker(newCount),
      }),
    });
  };

  /**
   * Deletes last notification from notifications Set.
   * @param notification - object
   */
  handleNotificationDismiss = (notification) => {
    this.setState({
      notifications: this.state.notifications.delete(notification),
    });
  };

  /**
   * Set non active param for sticker.
   * Shows notification with ability to restore sticker.
   * @param id - number
   */
  handleRemoveSticker = (id) => {
    this.setState({
      deletedStickerId: id,
    });
    this.addNotification();
    this.props.removeSticker(id);
  };

  render() {
    const generateStickers = () => this.props.stickers.map(item => (
      <Sticker
        key={`sticker-${item.ID}`}
        removeSticker={this.handleRemoveSticker}
        {...item}
      />
    ));

    return (
      <div className="stickers__overlay" ref={(c) => { this.stickersRef = c; }}>
        <div className="center no-padding">
          {generateStickers()}

          <StickerNew addSticker={this.props.addSticker} />
        </div>

        <NotificationStack
          notifications={this.state.notifications.toArray()}
          onDismiss={instance => this.handleNotificationDismiss(instance)}
        />
      </div>
    );
  }
}

Stickers.propTypes = {
  addSticker: PropTypes.func.isRequired,
  removeSticker: PropTypes.func.isRequired,
  restoreSticker: PropTypes.func.isRequired,
  stickers: PropTypes.arrayOf(PropTypes.object).isRequired,
  triggerStickers: PropTypes.func.isRequired,
};
