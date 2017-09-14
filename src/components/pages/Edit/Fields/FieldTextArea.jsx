import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertToRaw } from 'draft-js';

import Field from './Field';
import BaseEditor from 'components/Editor/BaseEditor';
import draftToHtml from 'draftjs-to-html';

class FieldTextArea extends Component {
  onChangeHandler = (editorState) => {
    this.editorState = editorState;

    this.props.onChangeState({
      [this.props.field]: draftToHtml(convertToRaw(editorState.getCurrentContent())),
    });
  };

  render() {
    return (
      <Field {...this.props}>
        <BaseEditor
          value={this.props.value}
          html={this.editorState}
          getHtml={this.onChangeHandler}
        />
      </Field>
    );
  }
}

FieldTextArea.propTypes = {
  value: PropTypes.string,
  onChangeState: PropTypes.func.isRequired,

  field: PropTypes.string,
};

FieldTextArea.defaultProps = {
  field: '',
  value: '',
};

export default FieldTextArea;
