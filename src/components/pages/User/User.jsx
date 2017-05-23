import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import AboutContainer from './containers/AboutContainer';
import fetchUser from './actions/fetchUser';
import WorkContainer from './containers/WorkContainer';

class User extends React.Component {
  componentDidMount() {
    const { userId } = this.props.params;
    this.props.dispatchFetchUser(userId);
  }

  render() {
    return (
      <div className="profile">
        <div className="profile__center">
          <div className="profile__menu profile-menu">
            <a className="profile-menu__link" href="#about">О себе</a>
            <a className="profile-menu__link" href="#job">Работа</a>
            <a className="profile-menu__link" href="#contact">Контакты</a>
            <a className="profile-menu__link" href="#password">Пароль</a>
          </div>

          <div className="profile__container">
            <AboutContainer />
            <WorkContainer />
          </div>
        </div>
      </div>
    );
  }
}

User.propTypes = {
  dispatchFetchUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    dispatchFetchUser(userId) {
      dispatch(fetchUser(userId));
    },
  };
}

export default connect(null, mapDispatchToProps)(User);
