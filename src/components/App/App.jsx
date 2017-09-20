import PropTypes from 'prop-types';
import React from 'react';
import Header from 'components/Header/Header';
import Icons from 'components/Icons';

export default class App extends React.Component {
  componentWillMount() {
    const { authenticated } = this.props.state.auth.components;
    if (authenticated) this.props.fetchInit();
  }

  render() {
    return (
      <main>
        <Icons />
        <Header />
        <section className="content" id="content">
          {this.props.children}
        </section>
      </main>
    );
  }
}

App.propTypes = {
  authenticated: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fetchInit: PropTypes.func.isRequired,
};

App.defaultProps = {
  authenticated: false,
  children: null,
};
