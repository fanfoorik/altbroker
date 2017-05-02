import React from "react";
import { Link } from 'react-router';
import { index_url } from 'path.js';

import Navigation from './components/Navigation';

export default props => {
	return(
		<header className="header" id="header">

			<div className="center clear">

				<div  className="header__left">

					<Link className="logo" to={index_url}>АльтБрокер</Link>

					<div className="patch-notes">
						<span className="patch-notes__trigger"></span>
					</div>

				</div>

				<div className="header__center">
					
					<Navigation className="nav" data={props.data} />
					
				</div>

				<div  className="header__right">
					
				</div>

			</div>

		</header>
	);
}