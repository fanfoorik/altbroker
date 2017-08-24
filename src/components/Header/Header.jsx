import React from 'react';
import { Link } from 'react-router';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';

import NavigationContainer from './Navigation/NavigationContainer';
import NotificationsContainer from './NavNotifications/NavNotificationsContainer';
import PatchNotesContainer from './PatchNotes/PatchNotesContainer';
import SearchWrapper from './Search/SearchWrapper';
import StickersContainer from './Stickers/StickersContainer';
import UsertopContainer from './Usertop/UsertopContainer';
import { indexUrl } from 'utils/urls';

export default function Header() {
  return (
    <header className="header js-header" id="header">
      <div className="container clear">
        <div className="header__left">
          <Link className="logo" to={indexUrl}>АльтБрокер</Link>
          <PatchNotesContainer />
        </div>

        <div className="header__center">
          <NavigationContainer />
        </div>

        <div className="header__right">
          <UsertopContainer />
          <StickersContainer />
          <NotificationsContainer />
          <SearchWrapper />
        </div>
      </div>
      <NotificationContainer />
    </header>
  );
}
