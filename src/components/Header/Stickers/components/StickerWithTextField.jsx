import PropTypes from 'prop-types';
import React from 'react';

export default class StickerWithTextField extends React.Component {
  constructor(props) {
    super(props);
    this.textareaValue = '';
  }

  componentDidMount() {
    this.textareaRef.focus();
  }

  handleAddSticker = () => {
    this.props.addSticker(this.textareaValue, this.props.selectedColor);
    this.props.resetState();
  };

  handleChange = (value) => {
    this.textareaValue = value;
  };

  render() {
    return (
      <div
        className="sticker sticker_new js-sticker-new"
        role="button"
        tabIndex={0}
        style={{ backgroundColor: this.props.selectedColor }}
      >
        <div className="sticker__inner sticker__inner_new">
          <textarea
            className="sticker__content sticker__content_textarea"
            onChange={event => this.handleChange(event.target.value)}
            placeholder="О чем вы хотели не забыть..."
            ref={(c) => { this.textareaRef = c; }}
          />

          <div className="sticker__footer">
            <div
              className="sticker__footer-item sticker__footer_left"
              onClick={this.props.backToColor}
              role="button"
              tabIndex={0}
            >Назад</div>

            <div
              className="sticker__footer-item sticker__footer_right active"
              onClick={this.handleAddSticker}
              role="button"
              tabIndex={0}
            >Сохранить</div>
          </div>
        </div>
      </div>
    );
  }
}

StickerWithTextField.propTypes = {
  addSticker: PropTypes.func.isRequired,
  backToColor: PropTypes.func.isRequired,
  resetState: PropTypes.func.isRequired,
  selectedColor: PropTypes.string.isRequired,
};
