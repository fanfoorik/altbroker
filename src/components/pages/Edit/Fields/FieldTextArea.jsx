import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertToRaw } from 'draft-js';

import Field from './Field';
import BaseEditor from 'components/Editor/BaseEditor';
import { htmlToDraft, draftToHtml } from 'utils/editorUtils';

class FieldTextArea extends Component {
  onChangeHandler = (editorState) => {
    this.editorState = editorState;

    this.props.onChangeState({
      [this.props.field]: draftToHtml(editorState),
    });
  };

  editorState = ''

  render() {
    return (
      <Field {...this.props}>
        <BaseEditor
          value={this.editorState || htmlToDraft(this.props.value)}
          onChange={this.onChangeHandler}
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
