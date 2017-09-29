import React from 'react';
import PropTypes from 'prop-types';

import { Editor, EditorState, RichUtils, convertFromHTML, ContentState } from 'draft-js';
import Draft from 'draft-js/dist/Draft.css';
import BlockStyleBtn from './BlockStyleBtn';
import InlineStyleBtn from './InlineStyleBtn';

import Icony from 'components/Icony';
import headerIcon from 'assets/icons/header-icon.svg';
import boldIcon from 'assets/icons/bold-icon.svg';
import italicIcon from 'assets/icons/italic-icon.svg';
import unorderedListIcon from 'assets/icons/unordered-list-icon.svg';
import orderedListIcon from 'assets/icons/ordered-list-icon.svg';

export default class BaseEditorContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trigger: false,
      editorState: props.value,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      editorState: nextProps.value,
    });
  }

  onTab = (e) => {
    const maxDepth = 3;
    this.props.onChange(RichUtils.onTab(e, this.state.editorState, maxDepth));
  };

  handleKeyCommand = (command) => {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.props.onChange(newState);
      return true;
    }
    return false;
  };

  toggleBlockType = (type) => {
    this.props.onChange(RichUtils.toggleBlockType(this.state.editorState, type));
    setTimeout(() => this.editor.focus(), 0);
  };

  toggleInlineStyle = (type) => {
    this.props.onChange(RichUtils.toggleInlineStyle(this.state.editorState, type));
    setTimeout(() => this.editor.focus(), 0);
  };

  render() {
    const { editorState } = this.state;
    const { onChange } = this.props;

    return (
      <div className="editor">
        <div className="editor-controls clear">
          <div className="editor-controls__section">
            <BlockStyleBtn
              editorState={editorState}
              content={<Icony icon={headerIcon} width="11" height="10" />}
              type="header-three"
              onToggle={this.toggleBlockType}
            />
            <InlineStyleBtn
              editorState={editorState}
              content={<Icony icon={boldIcon} width="9" height="10" />}
              type="BOLD"
              onToggle={this.toggleInlineStyle}
            />
            <InlineStyleBtn
              editorState={editorState}
              content={<Icony icon={italicIcon} width="7" height="11" />}
              type="ITALIC"
              onToggle={this.toggleInlineStyle}
            />
          </div>
          <div className="editor-controls__section">
            <BlockStyleBtn
              editorState={editorState}
              content={<Icony icon={unorderedListIcon} width="12" height="10" />}
              type="unordered-list-item"
              onToggle={this.toggleBlockType}
            />
            <BlockStyleBtn
              editorState={editorState}
              content={<Icony icon={orderedListIcon} width="12" height="13" />}
              type="ordered-list-item"
              onToggle={this.toggleBlockType}
            />
          </div>
        </div>

        <Editor
          editorState={editorState}
          onChange={onChange}
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

BaseEditorContainer.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.shape({
    _immutable: PropTypes.object,
  }).isRequired,
};
