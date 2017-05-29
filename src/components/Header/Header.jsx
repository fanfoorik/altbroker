import { Link } from 'react-router';
import React from 'react';

import { indexUrl } from 'utils/urls';
import NavigationContainer from './Navigation/NavigationContainer';
import Notifications from './NavNotifications/NavNotifications';
import PatchNotesContainer from './PatchNotes/PatchNotesContainer';
import SearchWrapper from './Search/SearchWrapper';
import StickersContainer from './Stickers/StickersContainer';
import Usertop from './Usertop/Usertop';

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
          <Usertop />
          <StickersContainer />
          <Notifications />
          <SearchWrapper />
        </div>
      </div>
    </header>
  );
}
