import PropTypes from 'prop-types';
import React from 'react';

import Icon from 'components/Icon';

const circleColors = {
  0: '#fffbc4',
  1: '#ffd1d1',
  2: '#b6e87f',
  3: '#6fb6ff',
};

function getCircles() {
  return document.querySelectorAll('.js-circle');
}

function toggleCirclesClass(event, className) {
  getCircles().forEach(item => item.classList.remove(className));
  event.currentTarget.classList.add(className);
}

export default class StickerWithCircles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resolved: false,
    };
    this.selectedColor = props.selectedColor || '';
  }

  setColor = (event) => {
    const selectedColor = event.currentTarget.dataset.color;
    const parent = event.currentTarget.closest('.js-sticker-circles');
    parent.style.backgroundColor = selectedColor;
    this.selectedColor = selectedColor;
  };

  /**
   * Generates colored circles for new Sticker.
   */
  buildCircles = () => {
    const circlesItems = [];

    for (let i = 0; i < Object.keys(circleColors).length; i += 1) {
      circlesItems.push(
        (
          <div
            className="sticker__circle js-circle"
            data-color={circleColors[i]}
            key={`sticker-circle-${i}`}
            onClick={event => this.handleChooseColor(event)}
            onMouseEnter={event => this.handleMouseOver(event)}
            onMouseLeave={event => this.handleMouseLeave(event)}
            role="button"
            tabIndex={0}
          >
            <Icon className="sticker__checkbox" icon="check" width="25" height="18" />
          </div>
        ),
      );
    }

    return circlesItems;
  };

  dropColor = () => {
    const newSticker = document.querySelector('.js-sticker-circles');
    newSticker.style.backgroundColor = '';
  };

  cancelCreation = () => {
    this.dropColor();
    this.props.cancelCreation();
  };

  handleChooseColor = (event) => {
    const btn = document.querySelector('.js-disabled');
    const isResolved = this.state.resolved;
    const isElementSelected = event.currentTarget.classList.contains('selected');

    if (isResolved && isElementSelected) {
      // User unchecks checked color:
      getCircles().forEach(item => item.classList.remove('selected'));
      btn.classList.add('disabled');
      toggleCirclesClass(event, 'active');
      this.setState({ resolved: false });
    } else if (isResolved && !isElementSelected) {
      // User checks another color with checked ones:
      this.setColor(event);
      btn.classList.remove('disabled');
      toggleCirclesClass(event, 'selected');
      this.setState({ resolved: true });
    } else {
      // User checks not checked color:
      getCircles().forEach(item => item.classList.remove('active'));
      this.setColor(event);
      btn.classList.remove('disabled');
      toggleCirclesClass(event, 'selected');
      this.setState({ resolved: true });
    }
  };

  handleMouseOver = (event) => {
    if (this.state.resolved) return;
    this.setColor(event);
    toggleCirclesClass(event, 'active');
  };

  handleMouseLeave = () => {
    if (this.state.resolved) return;
    this.dropColor();
    getCircles().forEach(item => item.classList.remove('active'));
  };

  handleSubmitColor = () => {
    if (!this.state.resolved) return;
    this.props.submitColor(this.selectedColor);
  };

  render() {
    const color = this.selectedColor;
    console.log(this.selectedColor);

    return (
      <div className="sticker" role="button" tabIndex={0}>
        <div
          className="sticker__inner sticker__inner_new js-sticker-circles"
          style={{ backgroundColor: color }}
        >
          <div className="sticker__circles-wrapper">{this.buildCircles()}</div>

          <div className="sticker__footer">
            <div
              className="sticker__footer-item sticker__footer_left"
              onClick={event => this.cancelCreation(event)}
              role="button"
              tabIndex={0}
            >Отмена</div>

            <div
              className="sticker__footer-item sticker__footer_right disabled js-disabled"
              onClick={this.handleSubmitColor}
              role="button"
              tabIndex={0}
            >Далее</div>
          </div>
        </div>
      </div>
    );
  }
}

StickerWithCircles.propTypes = {
  cancelCreation: PropTypes.func.isRequired,
  selectedColor: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string,
  ]),
  submitColor: PropTypes.func.isRequired,
};

StickerWithCircles.defaultProps = {
  selectedColor: '#fffbc4',
};
