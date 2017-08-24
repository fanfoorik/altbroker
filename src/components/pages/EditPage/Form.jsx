import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      disabledSubmit: false,
    };

    this.toggleDisabledSubmit = this.toggleDisabledSubmit.bind(this);
  }

  toggleDisabledSubmit(value) {
    this.setState({
      disabledSubmit: value,
    });
  }

  render() {
    return (
      <form className="edit-form" onSubmit={this.props.onSubmit}>
        {React.Children.map(this.props.children, (child) => {
          return React.cloneElement(child, {
            toggleDisabledSubmit: this.toggleDisabledSubmit,
          });
        })}
        <button disabled={this.state.disabledSubmit} className="btn" type="submit">Сохранить</button>
      </form>
    );
  }
}

export default Form;
