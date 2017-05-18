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
  return document.querySelector('.js-circle-wrapper').childNodes;
}

function toggleCirclesClass(event, className) {
  getCircles().forEach(item => item.classList.remove(className));
  event.currentTarget.classList.add(className);
}

/**
 * Generates colored circles for new Sticker.
 */
function buildCircles(handleChooseColor, handleMouseOver) {
  const circlesItems = [];

  for (let i = 0; i < Object.keys(circleColors).length; i += 1) {
    circlesItems.push(
      (
        <div
          className="sticker__circle"
          data-color={circleColors[i]}
          key={`sticker-circle-${i}`}
          onClick={event => handleChooseColor(event)}
          onMouseEnter={event => handleMouseOver(event)}
          role="button"
          tabIndex={0}
        >
          <Icon className="sticker__checkbox" icon="check" width="25" height="18" />
        </div>
      ),
    );
  }

  return circlesItems;
}

export default class StickerWithCircles extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resolved: false,
      selectedColor: this.props.selectedColor || '',
    };

    this.defaultColor = '#fffbc4';
  }

  setColor = (event) => {
    const selectedColor = event.currentTarget.dataset.color;
    const parent = event.currentTarget.closest('.js-sticker-new');
    parent.style.backgroundColor = selectedColor;

    this.setState({ selectedColor });
  };

  cancelCreation = (event) => {
    const parent = event.currentTarget.closest('.js-sticker-new');
    parent.style.backgroundColor = '';
    this.props.cancelCreation();
  };

  handleChooseColor = (event) => {
    toggleCirclesClass(event, 'selected');
    getCircles().forEach(item => item.classList.remove('active'));
    this.setColor(event);
    this.setState({ resolved: true });
  };

  handleMouseOver = (event) => {
    if (this.state.resolved) return;
    this.setColor(event);
    toggleCirclesClass(event, 'active');
  };

  handleSubmitColor = () => {
    this.props.submitColor(this.state.selectedColor || this.defaultColor);
  };

  render() {
    return (
      <div
        className="sticker sticker_new js-sticker-new"
        role="button"
        tabIndex={0}
      >
        <div className="sticker__inner sticker__inner_new">
          <div className="sticker__circles-wrapper js-circle-wrapper">
            {buildCircles(this.handleChooseColor, this.handleMouseOver)}
          </div>

          <div className="sticker__footer">
            <div
              className="sticker__footer-item sticker__footer_left"
              onClick={event => this.cancelCreation(event)}
              role="button"
              tabIndex={0}
            >Отмена</div>

            <div
              className="sticker__footer-item sticker__footer_right active"
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
