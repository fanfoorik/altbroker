import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import PropTypes from 'prop-types';
import React from 'react';

import StickerWithCircles from './StickerWithCircles';
import StickerWithTextField from './StickerWithTextField';

export default class StickerNew extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chooseColorStep: false,
      selectedColor: false,
    };
  }

  handleBackToColor = () => {
    this.setState({ selectedColor: false });
  };

  handleCancelCreation = () => {
    this.setState({ chooseColorStep: false });
  };

  handleCreateNew = () => {
    this.setState({ chooseColorStep: true });
  };

  handleResetState = () => {
    this.setState({ chooseColorStep: false, selectedColor: false });
  };

  handleSubmitColor = (selectedColor) => {
    this.setState({ selectedColor });
  };

  render() {
    const isChooseColorStep = this.state.chooseColorStep;
    const isFeelTextStep = this.state.selectedColor;

    // User clicks '+' to create new Sticker
    if (isChooseColorStep && !isFeelTextStep) {
      return (
        <StickerWithCircles
          cancelCreation={this.handleCancelCreation}
          selectedColor={this.state.selectedColor}
          submitColor={this.handleSubmitColor}
        />
      );
    }

    // User has submitted color of new Sticker
    if (isChooseColorStep && isFeelTextStep) {
      return (
        <StickerWithTextField
          addSticker={this.props.addSticker}
          backToColor={this.handleBackToColor}
          selectedColor={this.state.selectedColor}
          resetState={this.handleResetState}
        />
      );
    }

    // Initial Stickers page state
    return (
      <CSSTransitionGroup
        transitionName="sticker"
        transitionAppear
        transitionAppearTimeout={500}
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        <div className="sticker">
          <div
            className="sticker__inner sticker__inner_empty"
            onClick={() => this.handleCreateNew()}
            role="button"
            tabIndex={0}
          >
            <div className="sticker__plus" />
            <div className="sticker__content sticker__content_empty align-center">Новый стикер</div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}

StickerNew.propTypes = {
  addSticker: PropTypes.func.isRequired,
};
