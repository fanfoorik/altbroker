import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Field from './Field';
import BaseEditor from 'components/Editor/BaseEditor';

class FieldTextArea extends Component {
  constructor(props) {
    super(props);

    this.state = {
      html: props.value,
    };
  }

  onChangeHandler = (html) => {
    this.props.onChangeState({
      [this.props.field]: html,
    });

    this.setState({ html });
  };

  render() {
    return (
      <Field {...this.props}>
        <BaseEditor
          html={this.props.value}
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
