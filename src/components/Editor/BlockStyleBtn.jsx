import PropTypes from 'prop-types';
import React from 'react';

export default class BlockTypeBtn extends React.Component {
  getType = () => {
    const selection = this.props.editorState.getSelection();
    return this.props.editorState
      .getCurrentContent()
      .getBlockForKey(selection.getStartKey())
      .getType();
  };

  handleToggle = () => {
    this.props.onToggle(this.props.type);
  };

  render() {
    const { content, type } = this.props;

    return (
      <span
        className={`editor-control ${this.getType() === type ? 'active' : ''}`}
        onClick={this.handleToggle}
        role="button"
        tabIndex="0"
      >
        {content || type}
      </span>
    );
  }
};