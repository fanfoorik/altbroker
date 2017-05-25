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
    if (!this.textareaValue) return;
    this.props.addSticker(this.textareaValue, this.props.selectedColor);
    this.props.resetState();
  };

  handleChange = (value) => {
    const saveBtn = document.querySelector('.js-save-sticker');
    this.textareaValue = value;

    if (value) {
      saveBtn.classList.remove('disabled');
    } else {
      saveBtn.classList.add('disabled');
    }
  };

  render() {
    return (
      <div className="sticker sticker_new">
        <div className="sticker__inner sticker__inner_new js-sticker-new" style={{ backgroundColor: this.props.selectedColor }}>
          <textarea
            className="sticker__content sticker__content_textarea"
            onChange={event => this.handleChange(event.target.value)}
            placeholder="О чем вы хотели не забыть..."
            ref={(c) => { this.textareaRef = c; }}
          />

          <div className="sticker__footer">
            <div
              className="sticker__footer-item sticker__footer_left"
              onClick={() => this.props.backToColor(this.props.selectedColor)}
              role="button"
              tabIndex={0}
            >Назад</div>

            <div
              className="sticker__footer-item sticker__footer_right disabled js-save-sticker"
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
  selectedColor: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]).isRequired,
};
