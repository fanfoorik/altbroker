import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { index_url } from 'path.js';

import Navigation from './components/Navigation';
import PatchNotes from './PatchNotes/PatchNotes';

const Header = props => {
	
	let { header } = props;
	let { patchNotes } = header;

	return(
		<header className="header" id="header">

			<div className="center clear">

				<div  className="header__left">

					<Link className="logo" to={index_url}>АльтБрокер</Link>

					<PatchNotes
						data={patchNotes}
						fetchPatchNotes={ev => {
							console.log("force to dispatch getPatchNotes");
							console.log(ev);
						}} />

				</div>

				<div className="header__center">
					
					<Navigation className="nav" data={props.data} />
					
				</div>

				<div  className="header__right">
					
				</div>

			</div>

		</header>
	)
}

const mapStateToProps = state => {
    return{
        header: state.header
    }
}

const mapDispatchToProps = dispatch => {
    return{
        dispatchGetPatchNotes(url){
        	if(url){
        		console.log(url);
            // dispatch(getPatchNotes(url));
        	}
        }
    }
}

export default connect(mapStateToProps)(Header);