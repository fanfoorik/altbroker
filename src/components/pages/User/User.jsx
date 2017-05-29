import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import fetchUser from './actions/fetchUser';

import AboutStaticContainer from './containers/AboutStaticContainer';
import AboutEditableContainer from './containers/AboutEditableContainer';
import ContactsContainer from './containers/ContactsContainer';
import WorkContainer from './containers/WorkContainer';

class User extends React.Component {

  componentDidMount() {
    const { userId } = this.props.params;
    this.props.fetchUser(userId);
    this.anchorScrollTo();
  }

  componentWillReceiveProps() {
    window.scrollTo(0, 0);
  }

  componentWillUpdate(nextProps) {
    if (this.props.params.userId !== nextProps.params.userId) {
      nextProps.fetchUser(nextProps.params.userId);
    }
  }

  anchorScrollTo = () => {
    // header outer height 60 + margin 20
    const headerOuterHeight = 80;
    const anchorLinks = Array.from(document.querySelectorAll('.profile-menu__link'));
    const profilePanes = Array.from(document.querySelectorAll('.profile-pane'));
    function getAnchorPane(item, anchorLink) {
      return item.getAttribute('data-anchor') === anchorLink && item;
    }

    anchorLinks.forEach((element) => {
      const anchorLink = element.getAttribute('data-anchor');
      const currentPane = profilePanes.filter(item => getAnchorPane(item, anchorLink));

      element.addEventListener('click', () => {
        const anchorPaneOffsetTop = currentPane[0].offsetTop - headerOuterHeight;
        window.scrollTo(0, anchorPaneOffsetTop);
      });
    });
  };

  render() {
    return (
      <div className="profile">
        <div className="profile__center">
          <div className="profile__menu profile-menu">
            <span className="profile-menu__link" data-anchor="about">О себе</span>
            <span className="profile-menu__link" data-anchor="work">Работа</span>
            <span className="profile-menu__link" data-anchor="contact">Контакты</span>
            {/*<span className="profile-menu__link" data-anchor="password">Пароль</span>*/}
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

User.propTypes = {
  params: PropTypes.shape({
    userId: PropTypes.string.isRequired,
  }).isRequired,
  fetchUser: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch);
}

export default connect(null, mapDispatchToProps)(User);
