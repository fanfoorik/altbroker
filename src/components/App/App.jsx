import PropTypes from 'prop-types';
import React from 'react';

import Header from 'components/Header/Header';
import Icons from 'components/Icons';
import iconv from 'assets/images/icons/iconv.svg';

import globalSprite from 'svg-sprite-loader/runtime/sprite';

export default class App extends React.Component {
  componentWillMount() {
    const { authenticated } = this.props.state.auth.components;
    if (authenticated) this.props.fetchInit();
  }

  render() {
    console.log(globalSprite);
    return (
      <main>
        <Icons />
        <Header />
        <section className="content" id="content">
          <svg>
            <use xlinkHref={`#${iconv.id}`} width="40px" height="40px" />
          </svg>
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
