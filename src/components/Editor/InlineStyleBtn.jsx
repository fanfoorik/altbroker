import PropTypes from 'prop-types';
import React from 'react';

export default class InlineTypeBtn extends React.Component {
  getType = () => this.props.editorState.getCurrentInlineStyle().has(this.props.type);

  handleToggle = () => {
    this.props.onToggle(this.props.type);
  };

  render() {
    const { content, type } = this.props;

    return (
      <span
        className={`editor-control ${this.getType() ? 'active' : ''}`}
        onClick={this.handleToggle}
        role="button"
        tabIndex="0"
      >
        {content || type}
      </span>
    );
  }
}
