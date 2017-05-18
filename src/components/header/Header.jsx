import React from 'react';
import { Link } from 'react-router';

import { indexUrl } from 'utils/urls';
import Navigation from './Navigation/Navigation';
import Notifications from './Notifications/Notifications';
import PatchNotes from './PatchNotes/PatchNotes';
import SearchComponent from './SearchComponent/SearchComponent';
import StickersComponent from './StickersComponent/StickersComponent';
import Usertop from './Usertop/Usertop';

export default function Header() {
  return (
    <header className="header" id="header">
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
          <StickersComponent />
          <Notifications />
          <SearchComponent />
        </div>
      </div>
    </header>
  );
}
