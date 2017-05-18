import { Link } from 'react-router';
import React from 'react';

import { indexUrl } from 'utils/urls';
import Navigation from './Navigation/Navigation';
import Notifications from './NavNotifications/NavNotifications';
import PatchNotes from './PatchNotes/PatchNotes';
import SearchWrapper from './Search/SearchWrapper';
import StickersContainer from './Stickers/StickersContainer';
import Usertop from './Usertop/Usertop';

export default function Header() {
  return (
    <header className="header js-header" id="header">
      <div className="center clear">
        <div className="header__left">
          <Link className="logo" to={indexUrl}>АльтБрокер</Link>
          <PatchNotes />
        </div>

        <div className="header__center">
          <Navigation />
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
