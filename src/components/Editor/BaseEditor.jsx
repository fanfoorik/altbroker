import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, convertFromHTML, ContentState } from 'draft-js';
import Draft from 'draft-js/dist/Draft.css';
import BlockStyleBtn from './BlockStyleBtn';
import InlineStyleBtn from './InlineStyleBtn';
import Icon from 'components/Icon';

export default class BaseEditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      editorState: EditorState.createWithContent(this.exportHtml(props.value)),
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editorState: nextProps.html ||
      EditorState.createWithContent(this.exportHtml(nextProps.value)),
    });
  }

  onChange = (editorState) => {
    this.setState({ editorState });
    this.props.getHtml(editorState);
  };

  onTab = (e) => {
    const maxDepth = 3;
    this.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  };

  exportHtml = (html) => {
    const blocksFromHTML = convertFromHTML(html);
    return ContentState.createFromBlockArray(blocksFromHTML.contentBlocks);
  };

  toggleBlockType = (type) => {
    this.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
  };

  toggleInlineStyle = (type) => {
    this.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type));
  };

  render() {
    const { editorState } = this.state;

    return (
      <div className="editor">
        <div className="editor-controls clear">
          <div className="editor-controls__section">
            <BlockStyleBtn
              editorState={editorState}
              content={<Icon icon="header-one" width="12" height="11" />}
              type="header-three"
              onToggle={this.toggleBlockType}
            />
            <InlineStyleBtn
              editorState={editorState}
              content={<Icon icon="font-bold" width="10" height="11" />}
              type="BOLD"
              onToggle={this.toggleInlineStyle}
            />
            <InlineStyleBtn
              editorState={editorState}
              content={<Icon icon="font-italic" width="7" height="11" />}
              type="ITALIC"
              onToggle={this.toggleInlineStyle}
            />
          </div>
          <div className="editor-controls__section">
            <BlockStyleBtn
              editorState={editorState}
              content={<Icon icon="unordered-list-item" width="12" height="10" />}
              type="unordered-list-item"
              onToggle={this.toggleBlockType}
            />
            <BlockStyleBtn
              editorState={editorState}
              content={<Icon icon="ordered-list-item" width="12" height="13" />}
              type="ordered-list-item"
              onToggle={this.toggleBlockType}
            />
          </div>
        </div>

        <Editor
          editorState={editorState}
          onChange={this.onChange}
          onTab={this.onTab}
          handleKeyCommand={this.handleKeyCommand}
          placeholder="Начните что-нибудь писать..."
          spellCheck
          ref={(node) => { this.editor = node; }}
        />

      </div>
    );
  }
}

BaseEditorContainer.defaultProps = {
  getHtml() { return false; },
  value: '',
};

BaseEditorContainer.propTypes = {
  getHtml: PropTypes.func,
  value: PropTypes.string,
};
