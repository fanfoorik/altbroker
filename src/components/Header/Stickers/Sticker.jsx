import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

export default function Sticker(props) {
  const {
    DATE_CREATE_TEXT: date,
    dragHandle,
    ID: id,
    NAME: name,
    PREVIEW_TEXT: text,
    PROPERTY_COLOR_VALUE: color,
    removeSticker,
  } = props;

  return (
    <div className="sticker__inner" style={color && { backgroundColor: color }}>
      <div className="sticker__header clear">
        <div className="sticker__name">{name}</div>
        <div className="sticker__time">{date}</div>
      </div>
      <div className="sticker__header sticker__header-slide clear">
        {dragHandle}

        <div
          className="sticker__trigger_remove"
          onClick={() => removeSticker(id, text)}
          role="button"
          tabIndex={0}
          title="Снять стикер"
        >
          <Icon icon="close" width="19" height="19" />
        </div>
      </div>
      <div className="sticker__content">{text}</div>
    </div>
  );
}

Sticker.propTypes = {
  DATE_CREATE_TEXT: PropTypes.string.isRequired,
  dragHandle: PropTypes.element.isRequired,
  ID: PropTypes.string.isRequired,
  NAME: PropTypes.string.isRequired,
  PREVIEW_TEXT: PropTypes.string.isRequired,
  PROPERTY_COLOR_VALUE: PropTypes.string.isRequired,
  removeSticker: PropTypes.func.isRequired,
};
