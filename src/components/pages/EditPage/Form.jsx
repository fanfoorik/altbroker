import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
    };

    this.toggleDisabledSubmit = this.toggleDisabledSubmit.bind(this);
  }

  toggleDisabledSubmit() {
    this.setState({
      disabledSubmit: !this.state.disabledSubmit,
    });
  }

  render() {
    return (
      <form className="edit-form" onSubmit={this.props.onSubmit}>
        {this.props.children}
        <button disabled={this.state.disabledSubmit} className="btn" type="submit">Сохранить</button>
      </form>
    );
  }
}

export default Form;
