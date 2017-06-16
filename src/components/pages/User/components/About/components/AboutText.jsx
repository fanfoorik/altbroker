import React from 'react';
import PropTypes from 'prop-types';
import IsActive from 'utils/IsActive';

import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import Draft from 'draft-js/dist/Draft.css';

import htmlParser from 'html-react-parser';

class AboutText extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      editorState: EditorState.createEmpty(),
    };
  }

  componentWillReceiveProps() {
    if (this.state.trigger) {
      this.setState({ trigger: false });
    }
  }

  triggerDescription = () => {
    this.setState({ trigger: !this.state.trigger });
  };

  onChange = (editorState) => {
    this.setState({ editorState });
    this.logState();
  };

  logState = () => {
    const content = this.state.editorState.getCurrentContent();
    console.log(convertToRaw(content));
  };

  // handleKeyCommand = (command) => {
  //   const newState = RichUtils.handleKeyCommand(this.state.editorState, command);
  //   if (newState) {
  //     this.onChange(newState);
  //     return 'handled';
  //   }
  //   return 'not-handled';
  // };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  render() {
    const htmlText = htmlParser(this.props.data);

    return (
      <div className="profile-details__text">

        <div>
          { !this.state.trigger && htmlText.length > 8 ? htmlText.slice(0, 8) : htmlText }
        </div>

        <br />
        <br />
        <br />

        <div className="editor">
          <div className="editor__controls">
            <button className="mb-12" onClick={this.onBoldClick}>bold</button>
          </div>

          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Enter some text..."
          />
        </div>

        <br />
        <br />

        <IsActive active={htmlText.length > 8}>
          <span
            role="button"
            tabIndex="0"
            className="profile-details__text-trigger"
            onClick={this.triggerDescription}
          >
            { !this.state.trigger ? 'Показать полностью' : 'Cвернуть' }
          </span>
        </IsActive>
      </div>
    );
  }
}

AboutText.defaultProps = {
  data: '',
};

AboutText.propTypes = {
  data: PropTypes.string,
};

export default AboutText;
