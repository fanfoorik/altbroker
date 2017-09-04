import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
      errors: {},
    };
  }

  toggleDisabledSubmit = (value) => {
    this.state.disabledSubmit = value;
    this.setState(this.state);
  };

  addError = (field, type) => {
    this.state.errors = Object.assign(this.state.errors, { [field]: type });
    this.setState(this.state);
  };

  deleteError = (field) => {
    delete this.state.errors[field];
    this.setState(this.state);
  };

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
          disabled={
            this.state.disabledSubmit ||
            !!Object.keys(this.state.errors).length
          }
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
