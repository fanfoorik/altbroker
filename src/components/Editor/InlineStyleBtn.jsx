import PropTypes from 'prop-types';
import React from 'react';

export default class InlineTypeBtn extends React.Component {
  getType = () => this.props.editorState.getCurrentInlineStyle().has(this.props.type);

  handleToggle = () => {
    this.props.onToggle(this.props.type);
  };

  render() {
    const { content, type } = this.props;
    const className = this.getType() ? 'active' : '';

    return (
      <button className={className} onClick={this.handleToggle}>
        {content || type}
      </button>
    );
  }
}
