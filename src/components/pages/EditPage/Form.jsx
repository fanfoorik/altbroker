import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
      errors: [],
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
    // this.setState({
    //   errors: this.state.errors.push({ field, type }),
    // });
  }

  deleteError(field, type) {
    // this.setState({
    //   errors: this.state.errors.filter(error => error.field !== field && error.type !== type),
    // });
  }

  render() {
    return (
      <form className="edit-form" onSubmit={this.props.onSubmit}>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            toggleDisabledSubmit: this.toggleDisabledSubmit,
            addError: this.addError,
            deleteError: this.deleteError,
          });
        })}
        <button disabled={this.state.disabledSubmit || this.state.errors.length !== 0} className="btn" type="submit">Сохранить</button>
      </form>
    );
  }
}

export default Form;
