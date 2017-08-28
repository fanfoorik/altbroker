import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import Draft from 'draft-js/dist/Draft.css';

import htmlParser from 'html-react-parser';

class AboutText extends React.Component {

  constructor(props) {
    super(props);

    const sampleMarkup = 'ertyuiop <br />' +
    '<h1>H1 title <b>heading</b></h1>' +
    '<p>Paragraph example.</p>';

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);

    this.state = {
      trigger: false,
      editorState: EditorState.createWithContent(
        state,
      ),
    };
  }

  componentWillReceiveProps() {
    if (this.state.trigger) {
      this.setState({ trigger: false });
    }
  }

  onChange = (editorState) => {
    this.setState({ editorState });
    this.logState(editorState);
  };

  onBoldClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'BOLD'));
  };

  onItalicClick = () => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, 'ITALIC'));
  };

  logState = (editorState) => {
    const content = editorState.getCurrentContent();
    console.log(convertToRaw(content));
    // console.log(content);
    // const content = this.state.editorState.toJS();
    // console.log(content);
  };

  triggerDescription = () => {
    this.setState({ trigger: !this.state.trigger });
  };

  render() {
    const htmlText = htmlParser(this.props.data);

    return (
      <div className="profile-details__text">

        <br />
        <br />
        <br />

        <div className="editor">
          <div className="editor__controls">
            <button className="mb-12" onClick={this.onBoldClick}>b</button>
            <button className="mb-12" onClick={this.onItalicClick}><i>i</i></button>
          </div>

          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            placeholder="Enter some text..."
            value="rrrrrrrrrr"
          />
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          { !this.state.trigger && htmlText.length > 8 ? htmlText.slice(0, 8) : htmlText }
        </div>

        {htmlText.length > 8 &&
        <span
          role="button"
          tabIndex="0"
          className="profile-details__text-trigger"
          onClick={this.triggerDescription}
        >
            { !this.state.trigger ? 'Показать полностью' : 'Cвернуть' }
          </span>
        }
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
