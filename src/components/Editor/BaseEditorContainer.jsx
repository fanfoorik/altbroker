import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, convertToRaw, convertFromHTML, ContentState } from 'draft-js';
import Draft from 'draft-js/dist/Draft.css';
import draftToHtml from 'draftjs-to-html';
import BlockStyleBtn from './BlockStyleBtn';
import InlineStyleBtn from './InlineStyleBtn';

export default class BaseEditorContainer extends React.Component {
  constructor(props) {
    super(props);

    const sampleMarkup = 'ertyuiop <br />' +
      '<h1>H1 title <b>heading</b></h1>' +
      '<p>Paragraph example.</p>' +
      '<ul><li>list <ul><li>inner list <ul><li>inner list 2 </li></ul></li></ul></li></ul>';

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);

    this.state = {
      trigger: false,
      editorState: EditorState.createWithContent(state),
    };
  }

  onChange = (editorState) => {
    this.setState({ editorState });
    const content = convertToRaw(editorState.getCurrentContent());
    this.htmlContent = draftToHtml(content);
  };

  setHtml = () => {
    const sampleMarkup = 'ertyuiop <br />' +
      '<h1>H1 title <b>heading</b></h1>' +
      '<p>Paragraph example.</p>' +
      '<ul><li>list <ul><li>inner list <ul><li>inner list 2 </li></ul></li></ul></li></ul>';

    const blocksFromHTML = convertFromHTML(sampleMarkup);
    const state = ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);
    this.setState({ editorState: EditorState.createWithContent(state) });
  };

  onTab = (e) => {
    const maxDepth = 3;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  setBlokTypeBtns = () => {
    const blockTypeButtons = [
      { content: 'H', type: 'header-three' },
      { content: 'ul', type: 'unordered-list-item' },
      { content: 'ol', type: 'ordered-list-item' },
    ];

    return blockTypeButtons.map((item, int) => {
      const { content, type } = item;
      return (
        <BlockStyleBtn
          key={`block-btn-${int}`}
          editorState={this.state.editorState}
          content={content}
          type={type}
          onToggle={this.toggleBlockType}
        />
      );
    });
  };

  setInlineTypeBtns = () => {
    const blockTypeButtons = [
      { content: 'b', type: 'BOLD' },
      { content: 'i', type: 'ITALIC' },
    ];

    return blockTypeButtons.map((item, int) => {
      const { content, type } = item;
      return (
        <InlineStyleBtn
          key={`inline-btn-${int}`}
          editorState={this.state.editorState}
          content={content}
          type={type}
          onToggle={this.toggleInlineStyle}
        />
      );
    });
  };

  toggleBlockType = (type) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
    setTimeout(() => this.editor.focus(), 1);
  };

  toggleInlineStyle = (type) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type));
    setTimeout(() => this.editor.focus(), 1);
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="editor">
        <div className="editor__controls">
          {this.setBlokTypeBtns()}
          {this.setInlineTypeBtns()}
        </div>

        <Editor
          editorState={editorState}
          onChange={this.onChange}
          onTab={this.onTab}
          placeholder="Начните что-нибудь писать..."
          spellCheck={true}
          ref={(node) => { this.editor = node; }}
        />

      </div>
    );
  }
}

BaseEditorContainer.defaultProps = {
  content: '',
  getHtml() { return false; },
};

BaseEditorContainer.propTypes = {
  content: PropTypes.string,
  getHtml: PropTypes.func,
};
