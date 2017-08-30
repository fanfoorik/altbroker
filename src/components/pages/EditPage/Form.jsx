import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
      errors: {},
    };

    this.toggleDisabledSubmit = this.toggleDisabledSubmit.bind(this);
    this.addError = this.addError.bind(this);
    this.deleteError = this.deleteError.bind(this);
  }

  toggleDisabledSubmit(value) {
    this.setState({
      disabledSubmit: value,
    });
  }

  addError(field, type) {
    this.setState({
      errors: Object.assign(this.state.errors, { [field]: type }),
    });
  }

  deleteError(field) {
    delete this.state.errors[field];
    this.setState({
      errors: this.state.errors,
    });
  }

  render() {
    return (
      <form className="edit-form" onSubmit={this.props.onSubmit}>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            toggleDisabledSubmit: this.toggleDisabledSubmit,
            addError: this.addError,
            deleteError: this.deleteError,
            errors: this.state.errors,
          });
        })}
        <button
          disabled={this.state.disabledSubmit ||
          Object.keys(this.state.errors).length !== 0}
          className="btn"
          type="submit"
        >
          Сохранить
        </button>
      </form>
    );
  }
}

export default Form;
