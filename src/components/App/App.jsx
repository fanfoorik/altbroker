import React from 'react';

import Header from 'components/Header/Header';
import Icons from 'components/Icons';

export default class App extends React.Component {
  componentDidMount() {
    const { fetchInit } = this.props;
    const { authenticated } = this.props.state.auth.components;

    if (authenticated) fetchInit();
  }

  render() {
    return (
      <main>
        <Icons />
        <Header />
        <section id="content">
          {this.props.children}
        </section>
      </main>
    );
  }
}
