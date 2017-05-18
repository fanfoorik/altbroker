import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';
import React from 'react';

export default function Sticker(props) {
  const {
    DATE_CREATE_TEXT: date,
    ID: id,
    NAME: name,
    PREVIEW_TEXT: text,
    PROPERTY_COLOR_VALUE: color,
    removeSticker,
  } = props;

  return (
    <CSSTransitionGroup
      transitionName="sticker"
      transitionAppear
      transitionAppearTimeout={500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <div className="sticker" style={color && { backgroundColor: color }}>
        <div className="sticker__inner">
          <div className="sticker__header clear">
            <div className="sticker__name">{name}</div>
            <div className="sticker__time">{date}</div>
          </div>

          <div
            className="sticker__header sticker__header-slide clear"
            onClick={() => removeSticker(id)}
            role="button"
            tabIndex={0}
          >Снять стикер</div>
          <div className="sticker__content">{text}</div>
        </div>
      </div>
    </CSSTransitionGroup>
  );
}

Sticker.propTypes = {
  DATE_CREATE_TEXT: PropTypes.string.isRequired,
  ID: PropTypes.string.isRequired,
  NAME: PropTypes.string.isRequired,
  PREVIEW_TEXT: PropTypes.string.isRequired,
  PROPERTY_COLOR_VALUE: PropTypes.string.isRequired,
  removeSticker: PropTypes.func.isRequired,
};
