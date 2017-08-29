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
    const className = (this.getType() === type) ? 'active' : '';

    return (
      <button className={className} onClick={this.handleToggle}>
        {content || type}
      </button>
    );
  }
};