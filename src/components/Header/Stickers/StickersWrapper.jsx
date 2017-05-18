import React from 'react';
import PropTypes from 'prop-types';

import Icon from 'components/Icon';
import IsActive from 'utils/IsActive';
import StickerList from './StickerList';

export default function StickersWrapper(props) {
  const {
    active,
    addSticker,
    updateStickersOrder,
    removeSticker,
    restoreSticker,
    stickers,
    triggerStickers,
  } = props;

  return (
    <div className="stickers js-stickers">
      <div
        className={`top-trigger ${active ? 'active' : ''}`}
        onClick={triggerStickers}
        role="button"
        tabIndex={0}
      >
        <Icon className="top-trigger__icon" icon="message" width="18" height="21" />
      </div>

      <IsActive
        active={active}
        addSticker={addSticker}
        component={StickerList}
        removeSticker={removeSticker}
        restoreSticker={restoreSticker}
        stickers={stickers}
        triggerStickers={triggerStickers}
        updateStickersOrder={updateStickersOrder}
      />
    </div>
  );
}

StickersWrapper.propTypes = {
  active: PropTypes.bool.isRequired,
  addSticker: PropTypes.func.isRequired,
  updateStickersOrder: PropTypes.func.isRequired,
  removeSticker: PropTypes.func.isRequired,
  restoreSticker: PropTypes.func.isRequired,
  stickers: PropTypes.arrayOf(PropTypes.object).isRequired,
  triggerStickers: PropTypes.func.isRequired,
};
