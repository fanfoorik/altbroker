import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { indexUrl } from 'utils/urls.js';

export default (Component) => {
  class Authentication extends React.Component {
    static contextTypes = {
      router: PropTypes.object.isRequired,
    };

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.replace({
          pathname: `${indexUrl}login/`,
          state: {
            // TODO: Заменить локацию, когда будет готова главная странца
            //location: this.props.location,
            location: `${indexUrl}broker/gb/`,
          },
        });
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.replace({
          pathname: `${indexUrl}login/`,
          state: {
            // TODO: Заменить локацию, когда будет готова главная странца
            // location: nextProps.location,
            location: `${indexUrl}broker/gb/`,
          },
        });
      }
    }

    render() {
      return <Component {...this.props} />;
    }
  }

  const mapStateToProps = function (state) {
    return {
      authenticated: state.auth.components.authenticated,
    };
  };

  return connect(mapStateToProps)(Authentication);
};
