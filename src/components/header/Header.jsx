import React from "react";
import { connect } from "react-redux";
import { Link } from 'react-router';
import { index_url } from 'path.js';

//components
import Navigation from './components/Navigation';
import PatchNotes from './PatchNotes/PatchNotes';

//actions
import { fetchPatchNotes, triggerPatchNotes } from './PatchNotes/actions/patchNotesAction';

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
						triggerPatchNotes={props.dispatchTriggerPatchNotes}
						fetchPatchNotes={url => {
							props.dispatchFetchPatchNotes(url);
						}} />

				</div>

				<div className="header__center">
					
					<Navigation />
					
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
        dispatchTriggerPatchNotes(url){
            dispatch(triggerPatchNotes());
        },
        dispatchFetchPatchNotes(url){
            dispatch(fetchPatchNotes(url));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);