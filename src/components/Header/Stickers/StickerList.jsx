import PropTypes from 'prop-types';
import React from 'react';
import { NotificationStack } from 'react-notification';
import { OrderedSet } from 'immutable';
import {
  SortableContainer,
  SortableElement,
  SortableHandle,
  arrayMove,
} from 'react-sortable-hoc';

import Icon from 'components/Icon';
import Sticker from './Sticker';
import StickerNew from './StickerNew';

const notificationTimeout = 5000;
const DragHandle = SortableHandle(() => (
  <div className="drag-handler">
    <Icon icon="menu" width="20" height="17" />
  </div>
));
const SortableItem = SortableElement(({ value }) => <li className="sticker">{value}</li>);
const SortableList = SortableContainer(({ items }) => {
  return (
    <ul>
      {items.map((value, index) => (
        <SortableItem
          className="sortable-item"
          index={index}
          key={`sortable-item-${Math.floor(Date.now() * Math.random())}`}
          value={value}
        />
      ))}
    </ul>
  );
});

export default class Stickers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notifications: OrderedSet(),
      stickers: props.stickers || [],
    };
    this.count = 0;
    this.deletedStickerId = null;
  }

  componentDidMount() {
    document.addEventListener('click', this.onOutsideClick);
    document.addEventListener('keyup', this.onOutsideClick);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ stickers: nextProps.stickers });
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

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState({
      stickers: arrayMove(this.state.stickers, oldIndex, newIndex),
    }, this.updateStickersOrderOnSerer);
  };

  /**
   * Restores last 'removed' sticker's active param.
   */
  updateStickersOrderOnSerer = () => {
    const ids = this.state.stickers.map(item => item.ID);
    this.props.updateStickersOrder(ids);
  };

  /**
   * Restores last 'removed' sticker's active param.
   */
  handleRestoreSticker = (count) => {
    const { notifications } = this.state;
    this.setState({
      notifications: notifications.filter(item => item.key !== count),
    });
    this.props.restoreSticker(this.deletedStickerId);
  };

  notificationText = (text) => {
    return (
      <span>
        Стикер снят <span className="notification-sticker-text">{text}</span>
      </span>
    );
  };

  /**
   * Adds new notification in notifications Set.
   * @param id - number - id of Sticker to remove
   * @param text - string - text value of sticker
   */
  addNotification = (id, text) => {
    const { notifications } = this.state;
    this.count += 1;
    return this.setState({
      count: this.count,
      notifications: notifications.add({
        action: 'Восстановить',
        dismissAfter: notificationTimeout,
        key: `notification-id-${this.count}`,
        message: this.notificationText(text),
        onClick: () => this.handleRestoreSticker(id),
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
   * @param text - string - text value of sticker
   */
  handleRemoveSticker = (id, text) => {
    this.deletedStickerId = id;
    this.addNotification(id, text);
    this.props.removeSticker(id);
  };

  generateStickers = () => {
    return this.state.stickers.map(item => (
      <Sticker
        dragHandle={<DragHandle />}
        key={`sticker-${item.ID}`}
        removeSticker={this.handleRemoveSticker}
        {...item}
      />
    ));
  };

  render() {
    const isStickersNotEmpty = this.state.stickers.length;

    return (
      <div className="stickers__overlay" ref={(c) => { this.stickersRef = c; }}>
        <div className="center no-padding">
          {isStickersNotEmpty ?
            (
              <SortableList
                axis={'xy'}
                helperClass="sortable-helper"
                items={this.generateStickers()}
                onSortEnd={this.onSortEnd}
                transitionDuration={500}
                useDragHandle
              />
            ) : ''
          }

          <StickerNew addSticker={this.props.addSticker}/>
          <NotificationStack
            notifications={this.state.notifications.toArray()}
            onDismiss={instance => this.handleNotificationDismiss(instance)}
          />
        </div>
      </div>
    );
  }
}

Stickers.propTypes = {
  addSticker: PropTypes.func.isRequired,
  updateStickersOrder: PropTypes.func.isRequired,
  removeSticker: PropTypes.func.isRequired,
  restoreSticker: PropTypes.func.isRequired,
  stickers: PropTypes.arrayOf(PropTypes.object).isRequired,
  triggerStickers: PropTypes.func.isRequired,
};
