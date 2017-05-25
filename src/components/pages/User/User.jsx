import React from 'react';
import { connect } from 'react-redux';

import fetchUser from './actions/fetchUser';

import AboutStaticContainer from './containers/AboutStaticContainer';
import AboutEditableContainer from './containers/AboutEditableContainer';
import ContactsContainer from './containers/ContactsContainer';
import WorkContainer from './containers/WorkContainer';

class User extends React.Component {

  componentDidMount() {
    let { userId } = this.props.params;
    this.props.dispatchFetchUser(userId);
  }

  componentWillUpdate(nextProps) {
    if(this.props.params.userId !== nextProps.params.userId){
      nextProps.dispatchFetchUser(nextProps.params.userId);
    }
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

            <AboutStaticContainer />

            <WorkContainer />

            <ContactsContainer />

            {/*<AboutEditableContainer />*/}

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    dispatchFetchUser(userId) {
      dispatch(fetchUser(userId));
    },
  };
};

export default connect(null, mapDispatchToProps)(User);
