import React from "react";
import { Link } from 'react-router';
import { index_url } from 'path.js';

//components
import PatchNotes from './PatchNotes/PatchNotes';
import Navigation from './Navigation/Navigation';
import SearchComponent from './SearchComponent/SearchComponent';
import Notifications from './Notifications/Notifications';
import StickersComponent from './StickersComponent/StickersComponent';
import Usertop from './Usertop/Usertop';

const Header = () => {

	return(
		<header className="header" id="header">

			<div className="center clear">

				<div  className="header__left">

					<Link className="logo" to={index_url}>АльтБрокер</Link>
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
	)
}

export default Header;
